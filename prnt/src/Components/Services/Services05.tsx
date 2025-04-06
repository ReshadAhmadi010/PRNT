import React from "react";
import img05 from "../../images/services/img05.svg";
export default function Services05() {
  return (
    <div>
      <div className="flex gap-[270px] mt-[60px]" id="service5">
        <div>
          <span className="text-[55px]">/05</span>
        </div>

        <div>
          <div className="flex gap-[40px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[42px] leading-[40px] tracking-[-3%] font-medium pt-[-28px]">
              Cost Analysis <br /> & Optimization{" "}
            </h1>
            <img loading="lazy" src={img05} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Expense Review{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                In-depth analysis of current printing and packaging <br /> costs
                for potential savings.
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Process Efficiency{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Recommendations to optimize materials and <br /> workflows,
                reducing waste and costs.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Customized Savings <br /> Strategies{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Tailored strategies for long-term financial <br /> efficiency in
              your packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
