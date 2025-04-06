import React from "react";
import image1 from "../../images/Section3/image1.svg";
import image2 from "../../images/Section3/image2.svg";
import image3 from "../../images/Section3/image3.svg";
import image4 from "../../images/Section3/image4.svg";
export default function Section3() {
  return (
    <div className="pt-[60px] border-b border-[#CECECE] pb-[50px]">
      <div>
        <h1 className="text-[18px] font-medium leading-[25px] tracking-[-2%] text-center text-[#52606E]">
          Trusted by the clients.
        </h1>

        <div className="flex justify-center gap-[104px] pt-[58px]">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
}
