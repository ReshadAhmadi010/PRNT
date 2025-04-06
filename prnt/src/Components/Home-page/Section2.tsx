import image1 from "../../images/Section2/image1.svg";
import image2 from "../../images/Section2/image2.svg";
import image3 from "../../images/Section2/image3.svg";
import image4 from "../../images/Section2/image4.svg";
import image5 from "../../images/Section2/image5.svg";

export default function Section2() {
  return (
    <div>
      <div className="flex gap-5">
        <img className="w-[600px] h-[390px]" src={image1} alt="" />
        <img className="w-[600px] h-[390px]" src={image2} alt="" />
      </div>

      <div className="flex gap-[20px]">
        <img className="w-[394px] h-[381px]" src={image3} alt="" />
        <img className="w-[394px] h-[381px]" src={image4} alt="" />
        <img className="w-[394px] h-[381px]" src={image5} alt="" />
      </div>
    </div>
  );
}
