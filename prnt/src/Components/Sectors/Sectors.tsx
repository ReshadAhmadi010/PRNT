import React from "react";
import sector from "../../images/Sectors/sector.svg";
export default function Sectors() {
  return (
    <div>
      {" "}
      <div className="bg-[#f2f2f2] px-[82px]">
        <div className=" w-full  overflow-hidden relative pt-[80px]">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover pointer-events-none relative  bg-transparent"
          >
            <source src="../../../public/Video/circle.mp4" type="video/mp4" />{" "}
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-[420px] left-[550px] transform -translate-x-1/3 -translate-y-1/2 ">
            <h1 className="text-[120px] text-center font-medium my-class  leading-[110px] tracking-[-7%]">
              Sectors{" "}
            </h1>
            <span className="font-medium text-[100px] leading-[110px]  tracking-[-7%]  instrument-serif-regular-italic">
              We serve{" "}
            </span>
          </div>
        </div>

        <div className="mt-[250px] border-b border-[#C1BFBF] pb-[50px]">
          <h1 className="text-[120px] italic leading-[100%] tracking-[-4%] instrument-serif-regular-italic">
            Services
          </h1>

          <div className="flex flex-col gap-[50px]">
            <div className="flex justify-end">
              <p className="font-normal mt-[-30px] text-[28px] tracking-[-3%]">
                At PRNT. Consulting, we offer expert consultation and <br />{" "}
                professional insights tailored to the unique challenges and{" "}
                <br /> goals of diverse industries. Our clients include
              </p>
            </div>

            <div className="flex justify-end">
              <img className="w-[720px]" src={sector} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[46px] flex justify-between">
          <div>
            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Medical{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Advising on compliant, precise <br /> packaging solutions that
                meet stringent <br /> regulatory standards.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Hospitality{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Crafting brand-focused packaging <br /> strategies to enhance
                guest experiences <br /> for hotels, resorts, and restaurants.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Industrial{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Consulting on durable, efficient packaging <br /> solutions
                designed for manufacturing and <br /> industrial use
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Insurance{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Offering secure and professional <br /> branding materials
                tailored for <br /> insurance companies.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Education{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Providing guidance on high-quality, cost- <br />
                effective printing and packaging for <br /> educational
                institutions and publishers.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Banking{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Offering secure, sophisticated packaging <br /> and printing
                solutions for financial services <br /> and promotional needs.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Fitness Centers{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Creating customized packaging and <br /> branding materials that
                reflect the dynamic <br /> nature of fitness and wellness
                brands.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Personal Branding{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Assisting individuals and entrepreneurs in <br /> developing
                impactful, high-quality personal <br /> branding materials.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Food & Beverage{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Developing safe, sustainable packaging <br /> solutions that
                align with industry standards <br /> and brand goals
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Telecommunications{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Advising on targeted packaging and <br /> marketing materials
                that support telecom <br /> branding and outreach.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Government{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Providing consultation on efficient, high- <br />
                quality printing and packaging solutions for <br /> public
                sector needs.
              </p>
            </div>

            <div>
              <h1 className="font-medium text-[30px] leading-[40px] tracking-[-3%] pt-[16px]">
                Retail{" "}
              </h1>

              <p className="text-[18px] leading-[30px] tracking-[-2%] pt-[16px]">
                Advising on attractive and practical <br /> packaging solutions
                to enhance product <br /> presentation and customer experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[50px] pt-[81px]">
          <div className="flex justify-end">
            <img className="w-[720px]" src={sector} alt="" />
          </div>
          <div className="flex justify-end">
            <p className="font-normal mt-[-30px] text-[28px] tracking-[-3%]">
              Our approach is rooted in understanding the specific needs <br />{" "}
              of each sector, ensuring our clients benefit from optimized,{" "}
              <br />
              innovative solutions that elevate quality, efficiency, and <br />{" "}
              brand impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
