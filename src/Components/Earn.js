import React from 'react';

const Earn = () => {
  return (
    <React.Fragment>
    <div
      className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px]"
      
    >
      <div className="w-full mt-10 flex justify-center text-primary"></div>
      <div
        style={{
          backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
          borderRadius: '20px',
          boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
          padding: '20px',
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Rewards Section */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Rewards
          </h2>
          <div
            style={{
              backgroundImage: "linear-gradient(315deg,rgb(120, 184, 221) 0%, #80D0C7 100%)",
              padding: '20px',
              borderRadius: '10px',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0',
              }}
            >
              0 Points
            </h3>
            <p style={{ color: '#fff', fontSize: '14px', margin: '5px 0' }}>
              Total Rewards
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#333', margin: '0' }}>
                  Mining
                </p>
                <span style={{ fontSize: '14px', color: '#fff' }}>0 pt</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#333', margin: '0' }}>
                  Tasks
                </p>
                <span style={{ fontSize: '14px', color: '#fff' }}>0 pt</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#333', margin: '0' }}>
                  Referral
                </p>
                <span style={{ fontSize: '14px', color: '#fff' }}>0 pt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tasks Section */}
        <div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            Available Tasks
          </h3>

          {/* Task 1 */}
          <div
            style={{
              backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
              padding: '15px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <div>
              <p style={{ fontSize: '16px', color: '#333', margin: '0' }}>
                Email verification
              </p>
              <span style={{ fontSize: '14px', color: '#fff' }}>+0.005 BNB</span>
            </div>
            <button
              style={{
                background: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              Start
            </button>
          </div>

          {/* Task 2 */}
          <div
            style={{
              backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
              padding: '15px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <p style={{ fontSize: '16px', color: '#333', margin: '0' }}>
                Join Telegram Miniapp
              </p>
              <span style={{ fontSize: '14px', color: '#fff' }}>+0.0015 BNB</span>
            </div>
            <button
              style={{
                backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Earn;
