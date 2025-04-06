import React from "react";
import img07 from "../../images/services/img07.svg";

export default function Services07() {
  return (
    <div>
      {" "}
      <div className="flex gap-[270px] mt-[60px]" id="service7">
        <div>
          <span className="text-[55px]">/07</span>
        </div>

        <div>
          <div className="flex gap-[30px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[50px] leading-[40px] tracking-[-3%] font-medium pt-[-28px]">
              Sustainability <br /> Consulting{" "}
            </h1>
            <img src={img07} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Eco-Friendly Solutions{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Advising on sustainable packaging materials to meet <br />
                environmental goals.
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Regulatory Compliance{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Ensuring your packaging meets the latest <br /> sustainability
                and safety regulations.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Environmental Impact <br /> Reduction{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Developing strategies to reduce your packaging’s <br /> carbon
              footprint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
