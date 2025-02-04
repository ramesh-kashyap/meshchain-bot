import React from "react";

const Referral = () => {
  const copyToClipboard = () => {
    const textToCopy = document.getElementById("textToCopy").textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Referral link copied to clipboard!");
    });
  };

  return (
    <div
   className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px]"
   >
   <div className="w-full mt-10 flex justify-center text-primary">
      <div className="w-full max-w-[1440px] rounded-lg">
         <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="text-sm flex flex-col items-center  justify h-[72px] px-4 py-1 rounded-[22px] bg-[#F1F1F1]">
               <img
               alt="Filter Icon"
               loading="lazy"
               width="40"
               height="40"
               src="upnl/assets/icons/users.svg"
               
               />
               <p className="pl-3 font-semibold text-[16px] text-center mt-2">Your Friends(0)</p>
            </button>
            <div className="p-5 h-full rounded-[16px] flex flex-col justify-center items-center" style={{background: 'rgb(240, 240, 240)'}}>
  <div className="text-center mb-[14px]">
    <p className="text-sm text-gray-500">Claimable Rewards</p>
    <p className="text-xl font-semibold">0 pt</p>
  </div>

  <button
    className="bg-black text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(315deg,rgb(88, 88, 88) 0%,rgb(96, 96, 96) 100%)',
      border: 'none',
      padding: '5px 20px',
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    Claim
  </button>
</div>
<button
    className="bg-black text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(315deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)',
      border: 'none',
      padding: '10px 20px',
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    Invite Friends
  </button> 
      </div>
      
   </div>
   
</div>

</div>

  );
};

export default Referral;
