import React from 'react';
import logo from '../../c0vj7n5t-removebg-preview.png';
const Header = () => {
  return (
    
      <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
        {/* Logo Section */}
        <a className="md:hidden" href="/">
          <img
            alt="Logo"
            loading="lazy"
            width="163"
            
            decoding="async"
            data-nimg="1"
            className="max-w-[156px]"
            src={logo} 
            style={{ color: "transparent", width:"60px",height:"10"}}
          />
        </a>
        <div className="w-full flex flex-row justify-end md:justify-between">
          {/* User Section */}
          <div className="flex items-center h-[38px] text-gray-800 font-medium">
            <a
              className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3"
              href="#" // Adjust the link here
            >
              <div className="flex items-center rounded-full pl-3 text-sm">
                <img
                  alt="User Avatar"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  className="mr-3"
                  src="upnl/assets/icons/icon_user_add.svg"
                  style={{ color: "transparent" }}
                />
                <span> username </span>
              </div>
              <div className="flex mx-2 items-center justify-center font-bold"></div>
            </a>
          </div>

          {/* Button Section */}
          <div className="relative flex items-center space-x-2 font-semibold">
            <span className="hidden lg:inline text-xl">Hello, Ashu!</span>
            
            <button>
              <div
                className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold"
                style={{
                  backgroundColor:'rgb(95, 202, 237)'
                }}
              >
            A  </div>
            </button>
            <div className="hidden md:inline-block">
              <div className="relative inline-block text-[16px] font-bold">
                <button
                  className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none"
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Header;
