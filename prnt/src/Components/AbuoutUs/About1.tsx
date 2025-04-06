import React from "react";
import About2 from "./About2";
import MeetTeam from "./MeetTeam";

export default function About1() {
  return (
    <div className="bg-[#f2f2f2]">
      <div>
        <div className=" w-full h-[660px] overflow-hidden relative pt-[80px]">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover pointer-events-none relative  bg-transparent"
          >
            <source src="../../../public/Video/Cloth.mp4" type="video/mp4" />{" "}
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[100px] font-medium  leading-[110px] tracking-[-7%] ">
              Get to Know
            </h1>
            <span className="font-normal text-[100px] leading-[110px] tracking-[-2%] italic instrument-serif-regular-italic">
              More about us
            </span>
          </div>
        </div>
      </div>
      <div>
        <About2 />
        <MeetTeam />
      </div>
    </div>
  ); // Added p-4 for padding
}
