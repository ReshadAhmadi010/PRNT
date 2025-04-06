import React from "react";
import image1 from "../../images/Aboutus/image1.svg";
import { div } from "framer-motion/client";

export default function About2() {
  return (
    <div className="px-[81px] ">
      <div className="flex justify-between mt-[320px] border-b border-[#CECECE] pb-[70px] ">
        <h1 className=" italic instrument-serif-regular-italic text-[130px] tracking-[-4%] leading-[100%] ">
          About us
        </h1>

        <div className=" text-start pt-[130px] flex flex-col gap-[60px] ">
          <p className="font-normal text-[25px] ">
            Based in Kuwait, with a history of experience spanning the <br />{" "}
            Arabian Gulf, we are a consulting organization that specializes{" "}
            <br /> in the printing and packaging industry. With a firm grasp on{" "}
            <br /> local and regional technical expertise, and extensive <br />{" "}
            knowledge of different printing methods and solutions, we <br />{" "}
            provide a broad range of services to guide our clients <br />{" "}
            throughout the challenging and complex world of printing.
          </p>
          <img className="w-[700px] " src={image1} alt="" />

          <div>
            <span className="text-[24px] font-normal leading-[100%] tracking-[-1%] text-[#52606E]">
              /Vision
            </span>
            <p className="font-normal text-[30px] leading-[45px] tracking-[-1px]">
              To be a trusted consultant leader for innovative and <br />{" "}
              sustainable printing solutions
            </p>
          </div>

          <div>
            <span className="text-[24px] font-normal leading-[100%] tracking-[-1%] text-[#52606E]">
              /Vision
            </span>
            <p className="font-normal text-[25px] leading-[45px] tracking-[-1px]">
              We provide our clients with tailored, expert consultations to{" "}
              <br />
              optimize their printing processes, reduce costs, and achieve{" "}
              <br />
              excellent quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
