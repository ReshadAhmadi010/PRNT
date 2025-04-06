import React from "react";
import img04 from "../../images/services/img04.svg";
export default function Services04() {
  return (
    <div>
      <div className="flex gap-[270px] mt-[60px]" id="service4">
        <div>
          <span className="text-[55px]">/04 </span>
        </div>

        <div>
          <div className="flex justify-between  gap-[40px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[42px] font-medium mt-[-20px] ">
              Quality Control <br /> & Assurance{" "}
            </h1>
            <img src={img04} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Quality Audits{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Comprehensive assessments of printed materials to <br />{" "}
                maintain brand standards.
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Color Consistency{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Regular checks to ensure uniformity in print quality <br />{" "}
                across all materials.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Vendor Quality Evaluations{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Auditing vendor performance to secure the highest <br /> quality
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
