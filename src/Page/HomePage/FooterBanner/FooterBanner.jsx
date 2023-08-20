import React from "react";
import { FaTwitter, FaYoutube, FaDiscord, FaLinkedinIn } from "react-icons/fa";
const FooterBanner = () => {
  return (
    <div className="footer_banner_bg mt-32">
      <div className="flex justify-center items-center h-full gap-5">
        <div className="hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center">
          <FaTwitter className=" text-white w-7 h-7 shadow-2xl" />
        </div>
        <div className="hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center">
          <FaYoutube className=" text-white w-7 h-7 shadow-2xl" />
        </div>
        <div className="hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center">
          <FaDiscord className=" text-white w-7 h-7 shadow-2xl" />
        </div>
        <div className="hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center" >
          <FaLinkedinIn className=" text-white  w-7 h-7 shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
