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
    <div className="w-full p-5 overflow-auto flex justify-center">
    <div className="relative z-50 overflow-hidden flex flex-col justify-between items-center w-[200px] h-[200px] text-neutral-800 bg-neutral-200 border-[3px] border-primary-600 rounded-full p-6">
      <img
        alt="Energy Icon"
        loading="lazy"
        width={36} 
        height={36}
        className="z-50 w-9 h-9"
        src="/icon/icons8-energy-100.png"
        style={{ color: "transparent" ,width:'3.25rem',height:'3.25rem'}}
      />
      <div className="z-50 text-center text-neutral-1000 max-w-[120px]">
        <p className="text-xl font-semibold">  <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg" width="18" height="18" style={{ marginRight: '4px',float:'left',marginTop:'7px' }} /> {points.toFixed(4)}</p>
        {isRunning && (
        <p className="text-xs font-medium mt-2">{formatTime(timeLeft)}</p>
      )}

      </div>
      {!isRunning && !showClaim && (
          <div class="z-50 h-[38px] max-w-[120px]"
          >
        <button onClick={startTrade} style={styles.button} className="w-[53px] h-[25px] rounded-[11px] bg-black text-white text-sm" >Start</button>
        </div>
      )}
      {showClaim && (
        <div class="z-50 h-[38px] max-w-[120px]"
        ><button  onClick={claimReward}  style={styles.claimButton}  class="w-full __className_4fd903 btn btn-secondary btn-medium">Claim</button>
        </div>

      )}
      <div className="liquid" style={{ top: `${-206 + (1 - points / rewardPerDay) * 206}px` }}></div>
    </div>
  </div>
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