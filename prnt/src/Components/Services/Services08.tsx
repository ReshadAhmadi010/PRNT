import React from "react";
import img07 from "../../images/services/img07.svg";

export default function Services08() {
  return (
    <div>
      {" "}
      <div className="flex gap-[270px] mt-[60px]" id="service8">
        <div>
          <span className="text-[55px]">/08</span>
        </div>

        <div>
          <div className="flex gap-[30px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[47px] leading-[40px] tracking-[-3%] font-medium pt-[-28px]">
              Price Proofing{" "}
            </h1>
            <img src={img07} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Vendor Price Checks{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                An independent service where we review quotes <br /> received by
                clients and assess if they reflect a fair <br /> market price
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Market Cost Analysis{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Comparing received quotes with market averages to <br /> ensure
                the best value for your budget
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Transparent Reporting{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              A quick, straightforward report showing the <br /> competitiveness
              of your pricing and providing a <br /> reliable view of your deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
