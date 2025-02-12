import React from "react";
import logo from '../c0vj7n5t-removebg-preview.png';



const Profile = () => {
  return (


    <div
    className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px]"
    >
    <div className="w-full mt-10 flex justify-center text-primary">
       <div className="w-full max-w-[1440px] rounded-lg">
          <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            
             <div className="p-5 h-full rounded-[16px] flex flex-col justify-center items-center" style={{background: 'rgb(240, 240, 240)'}}>
 
 
             <div className="flex flex-col items-center justify-center gap-2 ">
      {/* Content Text */}
      <div className="flex justify-center mb-4">
    <img style={{   width: '144px'}}
      src={logo} // Replace with actual logo URL
      alt="Logo"
      className="w-[80px] h-[80px]" // Adjust size of the logo as needed
    />
  </div>
      <div className="font-semibold text-center">
        Connect app.HyperMesh.ai
      </div>
      <div className="text-gray-500 text-center">
  Connect your Telegram to your HyperMesh account for easy node management and reward tracking.
</div>

      {/* Button */}
      <button className="bg-[#171717] rounded-lg mt-4 cursor-pointer text-white py-3 px-4 h-[30px] rounded-2xl flex justify-center items-center">
        <span className="text-[14px] ">Connect</span>
      </button>
    </div>
       </div>
       
    </div>
    
 </div>
 
 </div>
</div>
  
     
  );
};




export default Profile;
