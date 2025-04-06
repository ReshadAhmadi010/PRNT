import React from "react";
import image1 from "../../images/Aboutus/Meet/image1.svg";
import image2 from "../../images/Aboutus/Meet/image2.svg";
import image3 from "../../images/Aboutus/Meet/image3.svg";
import image4 from "../../images/Aboutus/Meet/image4.svg";

export default function MeetTeam() {
  return (
    <div className="pt-[120px] px-[81px]">
      {/* Header */}
      <div className="flex justify-center items-center gap-[10px] mb-[24px]">
        <h1 className="text-[80px] font-medium leading-[100%] tracking-[-7%]">
          Meet
        </h1>
        <span className="font-medium text-[88px] leading-[100%] tracking-[-5%] italic instrument-serif-regular-italic">
          team
        </span>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Team Member 1 */}
        <div className="flex flex-col  relative top-[-80px]">
          <img src={image1} alt="Abdulrahman Al Refaie" className="mb-4" />
          <h1 className="text-[24px] font-medium">Abdulrahman Al Refaie</h1>
          <span className="font-normal leading-[22px] tracking-[-3%] text-[#71767C]">
            Operation Director
          </span>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col">
          <img src={image2} alt="Mosab Al" className="mb-4" />
          <h1 className="text-[24px] font-medium">Mosab Al</h1>
          <span className="font-normal leading-[22px] tracking-[-3%] text-[#71767C]">
            Business Development Director
          </span>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col">
          <img src={image3} alt="Hamad Al Nabhan" className="mb-4" />
          <h1 className="text-[24px] font-medium">Hamad Al Nabhan</h1>
          <span className="font-normal leading-[22px] tracking-[-3%] text-[#71767C]">
            Business Development Director
          </span>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col  relative top-[-80px]">
          <img src={image4} alt="Abdulaziz Al Ali" className="mb-4" />
          <h1 className="text-[24px] font-medium">Abdulaziz Al Ali</h1>
          <span className="font-normal leading-[22px] tracking-[-3%] text-[#71767C]">
            Managing Director
          </span>
        </div>
      </div>
    </div>
  );
}
