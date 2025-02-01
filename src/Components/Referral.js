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
            <div className=" p-5 h-full rounded-[16px] flex flex-col justify-between"   style={{   backgroundImage: "linear-gradient(315deg,rgb(120, 184, 221) 0%, #80D0C7 100%)", }}>
              <div>
                <div className="flex justify-between items-center mb-[14px]">
                  <h3 className="text-[20px] font-medium text-primary">Referrals</h3>
                  <button className="text-sm flex items-center h-[32px] px-4 py-1 rounded-[22px] bg-[#F1F1F1]">
                    <img
                      alt="Filter Icon"
                      loading="lazy"
                      width="20"
                      height="20"
                      src="upnl/assets/icons/users.svg"
                      style={{ color: "transparent" }}
                    />
                    <p className="pl-3 font-semibold text-[16px]">0</p>
                  </button>
                </div>
              </div>
              <button
                className="flex rounded-[24px] justify-center items-center align-center border border-[#F1F1F1] text-[#373737] bg-[#F9F9F9] h-[36px] py-2 px-3"
                style={{ fontFamily: "ClashDisplay-Semibold" }}
              >
                <p className="mr-3" id="textToCopy">refferal link</p>
                <img
                  alt="Copy Icon"
                  loading="lazy"
                  width="16"
                  height="16"
                  src="upnl/assets/icons/copy_clipboard.svg"
                  style={{ color: "transparent" }}
                  onClick={copyToClipboard}
                />
              </button>
              <button className="mt-1 font-medium" style={{ color: "#f1c40f" }}>
                Copy referral link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
