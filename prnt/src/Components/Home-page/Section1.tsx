import React from "react";
import image1 from "../../images/Section1/image1.svg";

export default function Section1() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-[40px] sm:py-[50px] md:py-[60px] px-4 gap-[30px] sm:gap-[40px]">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-[20px] sm:gap-[30px] text-center sm:text-left lg:text-left w-[100px] lg:w-[120px] sm:w-auto">
        <h1 className="font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[19px] leading-[1.2] tracking-[-1%]">
          We Create <br className="hidden sm:block" /> Resonating Brands
        </h1>
        <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] leading-[1.5] tracking-[-1%]">
          To be a trusted consultant <br className="sm:hidden" />
          leader for innovative and <br className="sm:hidden" />
          sustainable printing <br className="sm:hidden" />
          solutions
        </p>
      </div>

      {/* Video & Image Section */}
      <div className="relative w-full sm:w-[300px] md:w-[450px] lg:w-[850px] xl:w-[660px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[660px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full  object-cover pointer-events-none bg-transparent"
        >
          <source src="/Video/hell.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={image1}
            alt="section1"
            className="w-[90%] sm:w-[100%] md:w-[440px] lg:w-[550px] xl:w-[660px]"
          />
        </div>
      </div>

      {/* Side Services Section */}
      <div className="flex flex-col justify-center items-center lg:items-end gap-[40px] sm:gap-[50px] mt-[30px] sm:mt-[40px] lg:mt-[120px] xl:mt-[170px] w-full sm:w-auto">
        <div className="flex justify-center lg:justify-end w-full">
          <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">/2024</span>
        </div>

        <div className="pt-[30px] sm:pt-[40px] w-full">
          <div className="h-[200px] w-[213px] sm:h-[250px] lg:h-[300px] overflow-y-auto scrollable-div scrollbar-hide relative shadow-bottom px-2">
            <div className="border-t py-[10px] sm:py-[15px] lg:py-[20px]">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Printing Consultation
              </span>
            </div>
            <div className="border-t py-[10px] sm:py-[15px] lg:py-[20px]">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Packaging Strategy and <br className="sm:hidden" />
                Consultation
              </span>
            </div>
            <div className="border-t py-[10px] sm:py-[15px] lg:py-[20px]">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Job Management
              </span>
            </div>
            <div className="border-t py-[10px] sm:py-[15px] lg:py-[20px]">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Sustainability Consulting
              </span>
            </div>
            <div className="border-t py-[10px] sm:py-[15px] lg:py-[20px]">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Printing Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}