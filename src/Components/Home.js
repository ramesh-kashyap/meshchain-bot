import React from 'react';

function Home() {
  return (

    
    <div class="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen" >
    <div
className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px]"

>
<div
  className="w-full"
  style={{
    backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '1000px',
    width: '100%',
    boxSizing: 'border-box',
  }}
>
  {/* Countdown Section */}
  {/* Circular Progress Section */}
  <div
    style={{
      width: '150px',
      height: '150px',
      margin: '0 auto',
      border: '5px solid rgb(219, 219, 219)',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
  >
    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>
      3.7227 pt
    </span>
    <button
      style={{
        backgroundColor: 'black',
        color: '#ffffff',
        border: 'none',
        borderRadius: '20px',
        padding: '5px 15px',
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      Claim
    </button>
    <div
      style={{
        content: '',
        width: '90%',
        height: '90%',
        background: 'rgba(0, 208, 138, 0.2)',
        borderRadius: '50%',
        position: 'absolute',
        zIndex: -1,
      }}
    ></div>
  </div>
  <div style={{ marginTop: '10px', fontSize: '14px', color: '#fff' }}>1h 35m</div>
  <div
    style={{
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    }}
  >
    <button
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '14px',
        cursor: 'pointer',
      }}
    >
      Reward
    </button>
    <button
      style={{
        backgroundColor: '#f0f0f0',
        color: '#666666',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '14px',
        cursor: 'pointer',
      }}
    >
      Status
    </button>
  </div>
  {/* Today Mining and Total Rewards Section */}
  <div
    style={{
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}
  >
    <div 
      style={{
        flex: 1,
        minWidth: '45%',
        background: '#f0f0f0',
        borderRadius: '10px',
        padding: '10px',
        margin: '5px',
      }}
    >
      <span
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'black',
          display: 'block',
        }}
      >
        0 pt
      </span>
      <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#333' }}>
        Today Mining
      </p>
    </div>
    <div
      style={{
        flex: 1,
        minWidth: '45%',
        background: '#f0f0f0',
        borderRadius: '10px',
        padding: '10px',
        margin: '5px',
      }}
    >
      <span
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'black',
          display: 'block',
        }}
      >
        0 pt
      </span>
      <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#333' }}>
        Total Rewards
      </p>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default Home;
