import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Services01 } from "./Services01";
import Services02 from "./Services02";
import Services03 from "./services03";
import Services04 from "./Services04";
import Services05 from "./Services05";
import Services06 from "./Services06";
import Services07 from "./Services07";
import Services08 from "./Services08";
import Services09 from "./Services09";

export default function Service1() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // e.g., #parent

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [location.hash]);

  return (
    <div>
      <div className="bg-[#f2f2f2]">
        {/* Add id="parent" to the target div */}
        <div id="parent">
          <div
            id="video-section"
            className="w-full overflow-hidden relative pt-[50px]"
          >
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover pointer-events-none relative bg-transparent"
            >
              <source src="../../../public/Video/Tube.mp4" type="video/mp4" />{" "}
              Your browser does not support the video tag.
            </video>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[100px] text-center font-medium leading-[110px] tracking-[-7%]">
                Elevate your{" "}
              </h1>
              <span className="font-normal text-[100px] leading-[110px] tracking-[-2%] italic instrument-serif-regular-italic">
                business with us{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="px-[70px]">
          <Services01 />
          <Services02 />
          <Services03 />
          <Services04 />
          <Services05 />
          <Services06 />
          <Services07 />
          <Services08 />
          <Services09 />
        </div>
      </div>
    </div>
  );
}
