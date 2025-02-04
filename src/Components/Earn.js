import React from 'react';
import logo from '../image_2025_01_24T08_48_53_087Z.png';
const Earn = () => {
  return (
    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen pt-[10px]">
      {/* Rewards Header */}
      <div className="text-xl font-bold text-black mb-4 flex-1 w-full overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px]">
        Rewards
        <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col items-center">
  {/* Centered Text */}
  <div className="text-center mb-6">
    <h2 className="text-lg font-bold">16 Points </h2>
    <p className="text-sm text-gray-500">Total rewards</p>
  </div>

  {/* Three Boxes */}
  <div className="flex w-full justify-between space-x-4">
    {/* Box 1: Mining */}
    <div className="p-4 flex-1 text-center rounded-lg" style={{background: 'rgb(240, 240, 240)'}}>

      <p className="text-gray-500 text-sm">mining</p>
      <p className="text-sm black-text">12 pt</p>
    </div>

    {/* Box 2: Task */}
    <div className=" p-4 flex-1 text-center rounded-lg " style={{background: 'rgb(240, 240, 240)'}}>
      
      <p className="text-gray-500 text-sm">tasks</p>
      <p className="text-sm text black-text">0.0 pt</p>
    </div>

    {/* Box 3: TLP */}
    <div className=" p-4 flex-1 text-center rounded-lg "style={{background: 'rgb(240, 240, 240)'}}>

      <p className="text-gray-500 text-sm">referral</p>
      <p className="text-sm black-text">0 pt</p>
    </div>
  </div>
</div>

        <div className="text-xl font-bold text-black mb-2">Available Tasks</div>

{/* Task 1 */}

<div  className="bg-white rounded-lg shadow p-6 mb-6 flex items-center justify-between">
  {/* Left section with image and text */}
  <div className="flex items-center space-x-4" >
    <img style={{width: '40px',height:'40px'}}
      src={logo}
      alt="Telegram icon"
      className="w-10 h-10 rounded-full" // Ensures the image is circular and fixed size
    />
    <div className="flex flex-col">
      <div className="font-semibold text-gray-700">Join Telegram Miniapp</div>
      <div className="text-yellow-500 text-sm">+0.0015 BNB</div>
    </div>
  </div>

  {/* Button section */}
  <button
    className="bg-black text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
    style={{
      backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)',

      border: 'none',
      padding: '5px 20px', // Ensures the button is more spacious and aligned
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    Claim
  </button>
</div>
<div className="bg-white rounded-lg shadow p-6 mb-6 flex items-center justify-between">
  {/* Left section with image and text */}
  <div className="flex items-center space-x-4">
    <img style={{width: '40px',height:'40px'}}
      src={logo}
      alt="Telegram icon"
      className="w-14 h-14 rounded-full" // Increased image size to w-14 h-14
    />
    <div className="flex flex-col">
      <div className="font-semibold text-gray-700">Join Telegram Miniapp</div>
      <div className="text-green-500 text-sm">+0.0015 BNB</div>
    </div>
  </div>

  {/* Button section */}
  <button
    className="bg-black text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
    style={{
      border: 'none',
      padding: '5px 20px', // Ensures the button is more spacious and aligned
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    Start
  </button>
</div>


      </div>
    </div>
  );
};

export default Earn;
