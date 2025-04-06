import React from "react";
import img03 from "../../images/services/img03.svg";

export default function services03() {
  return (
    <div>
      <div className="flex gap-[270px] mt-[60px]" id="service3">
        <div>
          <span className="text-[55px]">/03</span>
        </div>

        <div>
          <div className="flex gap-[30px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[40px] font-medium mt-[-20px] ">
              Job Management{" "}
            </h1>
            <img src={img03} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Full Job Coordination{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Overseeing the entire lifecycle of your print jobs <br /> from
                order placement to final delivery
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Production Scheduling{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Ensuring deadlines are met with efficient scheduling <br /> for
                seamless operations.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Supplier Management{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Handling communication with print suppliers for <br /> quality and
              timeline adherence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
