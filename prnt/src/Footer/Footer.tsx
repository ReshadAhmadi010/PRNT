// Footer.js
import React from "react";
import { useNavigate } from "react-router-dom";
import image2 from "../images/Section5/image2.svg";

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Contactus page with the #contactus hash
    navigate("/contactus#contactus");
  };

  return (
    <div className="bg-[#f2f2f2] px-[72px] pt-[70px]">
      <div className="border-b border-[#b0b6bb]">
        <div className="flex items-baseline gap-[20px]">
          <h1 className="text-[100px] font-medium leading-[120px] tracking-[-7px]">
            Let’s create
          </h1>
          <button
            onClick={handleClick}
            className="bg-[#386AF3] w-[100px] cursor-pointer h-[60px] rounded-[30px] py-[2px] px-[14px]"
          >
            <img className="block m-auto" src={image2} alt="" />
          </button>
        </div>
        <span className="text-[100px] instrument-serif-regular text-[#101820] font-normal leading-[120px] tracking-[-2px] italic instrument-serif-regular-italic">
          excellence together
        </span>
      </div>

      <div className="flex justify-between pt-[40px] pb-[30px] border-b border-[#b0b6bb]">
        <div>
          <ul className="text-[30px] text-[#101820] font-normal leading-[120%] tracing-[-5px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Sectors</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center">
            <span className="font-normal text-[24px] leading-[120%] tracking-[-1px]">
              /Whatsapp
            </span>
          </div>
          <h1 className="pt-[12px] font-medium text-[30px] leading-[100%] tracking-[-2px]">
            +965.555.51986
          </h1>
          <p className="pt-[16px] font-normal text-[18px] leading-[25px] text-[#5C6C7B]">
            123 Al-Jabri Street, Block 4, <br />
            Mubarak Al-Kabeer, Kuwait City, <br />
            Kuwait 12345
          </p>
        </div>
      </div>

      <div className="flex justify-between text-[#5C6C7B]">
        <span>© 2025 Prnt. All rights reserved.</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  );
}
