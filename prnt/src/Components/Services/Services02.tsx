import React from "react";
import image02 from "../../images/services/img02.svg";
export default function Services02() {
  return (
    <div>
      <div className="flex gap-[270px] mt-[60px]" id="service2">
        <div>
          <span className="text-[55px]">/02</span>
        </div>

        <div>
          <div className="flex gap-[40px] border-b border-[#C1BFBF] pb-[30px] ">
            <h1 className="text-[50px] font-medium mt-[-20px] ">
              Packaging Strategy and Consultation
            </h1>
            <img src={image02} alt="" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Material Selection{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Advising on the most suitable packaging materials <br /> (e.g.,
                plastic, glass, paperboard, biodegradable <br /> materials)
                based on product needs, budget, and <br /> environmental goals
              </p>
            </div>

            <div>
              <h1 className="text-[30px] leading-[40px] tracking-[-3%] font-medium pt-[28px]">
                Sustainable Packaging <br /> Solutions{" "}
              </h1>
              <p className="text-[18px] pt-[20px] leading-[30px] tracking-[-2%] ">
                Helping clients transition to eco-friendly packaging <br />{" "}
                options, including biodegradable, recyclable, or <br /> 0
                reusable materials, in line with industry trends and <br />
                regulations.
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
