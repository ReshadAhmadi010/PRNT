import React, { useEffect } from "react";
import img01 from "../../images/services/img01.svg";
import { useLocation } from "react-router";

export function Services01() {
  return (
    <div className="" data-path="services01">
      <h1 className="text-[120px] italic leading-[100%] tracking-[-4%] instrument-serif-regular-italic">
        Services
      </h1>

      <div className="flex gap-[275px] mt-[60px]" id="service1">
        <div>
          <span className="text-[55px]">/01</span>
        </div>

        <div>
          <div className="flex gap-[40px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[50px] font-medium mt-[-20px] ">
              Printing <br />
              <span>Consultation</span>
            </h1>
            <img src={img01} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Printing Strategy and Planning
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                To be a trusted consultant leader for innovative <br /> and
                sustainable printing solutions
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Printing Process Optimization{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Identifying inefficiencies in the client’s current <br />{" "}
                printing processes and recommending improvements <br /> to
                increase speed, reduce waste, or enhance quality.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
              Print Material Selection{" "}
            </h1>
            <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
              Consulting on the choice of paper, inks, coatings, <br /> and
              other materials to ensure the desired outcome <br /> in terms of
              durability, cost-effectiveness, and <br /> aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
