import React from "react";
import img06 from "../../images/services/img06.svg";
export default function Services06() {
  return (
    <div>
      <div className="flex gap-[270px] mt-[60px]" id="service6">
        <div>
          <span className="text-[55px]">/06</span>
        </div>

        <div>
          <div className="flex gap-[60px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[50px] leading-[50px] tracking-[-5%] font-medium pt-[-28px]">
              Vendor <br /> Sourcing & <br /> Negotiation{" "}
            </h1>
            <img src={img06} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Trusted Vendor <br /> Recommendations{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Access to a network of reliable suppliers for high- <br />
                quality packaging and printing materials.
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Negotiation Support{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Securing competitive pricing and favorable terms <br /> with
                vendors to maximize your budget.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Global Sourcing Options{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Assistance with sourcing specialized or rare <br /> materials both
              locally and internationally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
