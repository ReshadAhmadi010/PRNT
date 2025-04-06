import React from "react";
import img07 from "../../images/services/img07.svg";

export default function Services09() {
  return (
    <div>
      {" "}
      <div className="flex gap-[270px] mt-[60px]" id="service9">
        <div>
          <span className="text-[55px]">/09</span>
        </div>

        <div>
          <div className="flex gap-[35px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[46px] leading-[60px] tracking-[-3%] font-medium pt-[-28px]">
              Copywriting, <br /> Editing and <br /> Proof Reading{" "}
            </h1>
            <img src={img07} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Copywriting{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Local and regional experience specializing in <br /> language
                and linguistics, media, and marketing to <br /> build on your
                brand and reflect your brand identity.
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Intersectionality{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                PRNT thoroughly studies cultural and societal <br />
                sensibilities to provide a face to the technical and <br />{" "}
                bring life to your project. 
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Editing and Proof Reading{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              A focus on services such as fact checking, <br /> translation and
              editing to ensure your final product <br /> meets your needs, down
              to the smallest detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
