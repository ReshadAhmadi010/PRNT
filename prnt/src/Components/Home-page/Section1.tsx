import React from "react";
import image1 from "../../images/Section1/image1.svg";
export default function Section1() {
  return (
    <div className="flex justify-between py-[60px]">
      <div className="flex flex-col justify-center gap-[130px] ">
        <h1 className="font-medium leading-[25px] tracking-[-1%]">
          {" "}
          We Create <br /> Resonating Brands 
        </h1>
        <p className="font-normal leading-[100%] tracking-[-1%]">
          To be a trusted consultant <br /> leader for innovative and <br />{" "}
          sustainable printing <br /> solutions
        </p>
      </div>

      <div className=" w-[660px] h-[660px] overflow-hidden relative">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover pointer-events-none relative  bg-transparent"
        >
          <source src="../../../public/Video/hell.mp4" type="video/mp4" /> Your
          browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={image1}
            alt="section1"
            className="max-w-[500px] max-h-full"
          />
        </div>
      </div>

      <div className=" flex flex-col justify-center gap-[240px] mt-[170px] ">
        <div className="flex justify-end  items-center ">
          <span>/2024</span>
        </div>

        <div className="pt-[410 ">
          <div className="h-[250px] overflow-y-auto scrollable-div scrollable-div scrollbar-hide relative shadow-bottom">
            <div className="border-t py-[15px]">
              <span>Printing Consultation</span>
            </div>
            <div className="border-t py-[15px]">
              <span>
                Packaging Strategy and <br /> Consultation
              </span>
            </div>
            <div className="border-t py-[15px]">
              <span>Job Management</span>
            </div>
            <div className="border-t py-[15px]">
              <span>Sustainability Consulting</span>
            </div>
            <div className="border-t  py-[15px]">
              <span>Printing Consultation</span>
            </div>
          </div>

          <div className="kil"></div>
        </div>
      </div>
    </div>
  );
}
