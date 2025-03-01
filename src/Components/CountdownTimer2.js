import React, { useState, useEffect, useRef } from "react";
import Api from "../services/Api";

const CountdownTimer = ({ depositAmount = 100 }) => {
  const [telegram_id] = useState(localStorage.getItem("telegram_id"));
  const [timeLeft, setTimeLeft] = useState(0);
  const [points, setPoints] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showClaim, setShowClaim] = useState(false);
  const [rewardPerDay, setrewardPerDay] = useState(localStorage.getItem("rewardPerDay") || depositAmount * 0.01);

  const rewardPerInterval = rewardPerDay / (24 * 60 * 60 / 5); // Every 5 sec
  const intervalRef = useRef(null);

  useEffect(() => {
    fetchLastTrade();
  }, []);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(timer);
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setShowClaim(true);
          return 0;
        });
      }, 1000);

      intervalRef.current = setInterval(async () => {
        setPoints((prevPoints) => {
          const newPoints = Math.min(prevPoints + rewardPerInterval, rewardPerDay);
          if (newPoints >= rewardPerDay) {
            clearInterval(intervalRef.current);
          }
          updateTodayROI(newPoints);
          return newPoints;
        });
      }, 5000);

      return () => {
        clearInterval(timer);
        clearInterval(intervalRef.current);
      };
    }
  }, [isRunning]);

  const fetchLastTrade = async () => {
    try {
      const response = await Api.post("auth/get-last-trade", { telegram_id });
      if (response.data.success) {
        const { todayroi, timeLeft } = response.data;
        setPoints(todayroi);
        setTimeLeft(timeLeft);
        setIsRunning(timeLeft > 0);
        setShowClaim(timeLeft === 0 && todayroi > 0);
      }
    } catch (error) {
      console.error("❌ Error fetching lastTrade:", error);
    }
  };

  const updateTodayROI = async (newPoints) => {
    try {
      await Api.post("auth/update-today-roi", { telegram_id, todayroi: newPoints });
    } catch (error) {
      console.error("❌ Error updating todayroi:", error);
    }
  };

  const startTrade = async () => {
    try {
      const response = await Api.post("auth/start-trade", { telegram_id });
      if (response.data.success) {
        localStorage.setItem("rewardPerDay", response.data.rewardPerDay);
        setTimeLeft(24 * 60 * 60);
        setPoints(0);
        setIsRunning(true);
        setShowClaim(false);
        setrewardPerDay(response.data.rewardPerDay);
      }
    } catch (error) {
      console.error("❌ Error starting trade:", error);
    }
  };

  const claimReward = async () => {
    try {
      const response = await Api.post("auth/claim-reward", { telegram_id, roi: points });

      if (response.data.success) {
        localStorage.removeItem("rewardPerDay");
        setPoints(0);
        setShowClaim(false);
      }
    } catch (error) {
      console.error("❌ Error claiming reward:", error);
    }
  };

  const formatTime = (seconds) => {
    seconds = Math.max(0, Math.floor(seconds));
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
  };

  return (
    <><div style={styles.container} >
      <svg width="160" height="160" viewBox="0 0 160 160">
        {/* Outer Border */}
        <circle cx="80" cy="80" r="70" stroke="#5ecaed" strokeWidth="5" fill="none"  />

        {/* Inner Background Fill */}
        <circle cx="80" cy="80" r="65" fill="#5ecaed" clipPath="url(#progressClip)" />
        {/* White Foreground Circle (Masking Effect) */}
        <circle cx="80" cy="80" r={64 - (points / rewardPerDay) * 65} fill="white" />

        {/* Center Icon */}
        <text x="50%" y="35%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="#5ecaed">
          ⚡
        </text>
        {/* USDT Icon */}

        {/* Points Text */}
        <foreignObject x="40" y="60" width="80" height="30">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg" width="18" height="18" style={{ marginRight: '4px' }} />
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>{points.toFixed(4)}</span>
          </div>
        </foreignObject>
        {/* Time Left */}
        <text x="50%" y="63%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="#555">
          {formatTime(timeLeft)}
        </text>

        {/* Buttons Inside the Circle */}
        {!isRunning && !showClaim && (
          <foreignObject x="40" y="95" width="80" height="30">
            <button onClick={startTrade} style={styles.button}>Start</button>
          </foreignObject>
        )}

        {showClaim && (
          <foreignObject x="40" y="95" width="80" height="30">
            <button onClick={claimReward} style={styles.claimButton}>Claim</button>
          </foreignObject>
        )}
      </svg>
      {/* <div class="z-50 h-[38px] max-w-[120px] h-[0px]"></div> */}
    </div>
    </>
  );
};
const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" },
  button: {
    width: "53px",
    height: "25px",
    borderRadius: "11px",
    border: "none",
    background: "black",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "center",
  },
  claimButton: {
    width: "53px",
    height: "25px",
    borderRadius: "11px",
    border: "none",
    background: "gold",
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default CountdownTimer;