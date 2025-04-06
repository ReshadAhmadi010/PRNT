import { useNavigate } from "react-router-dom";
import image1 from "../../images/Section5/image1.svg";
import image2 from "../../images/Section5/image2.svg";
import image3 from "../../images/Section5/image3.svg";
import image5 from "../../images/Section5/image5.svg";
import { useCounter } from "../../context/CounterContext";
import { Link } from "react-router";

export default function Section5() {
  const navigate = useNavigate();
  const { incrementCounter } = useCounter();

  const handleClick = (serviceId: string) => {
    incrementCounter(); // Increment the counter when the button is clicked
    navigate(`/services#${serviceId}`); // Navigate to the Services01 route
  };

  const handleExploreServicesClick = () => {
    navigate("/service1"); // Navigate to the Service1 page
  };

  return (
    <>
      <div className="mt-[100px]">
        <div className="relative top-[10px]">
          <div className="flex justify-center pt-[80px] bg-[#0f4bf0]">
            <img
              src={image1}
              alt="Header"
              className="relative bottom-[80px] pt-[80px]"
            />
          </div>
        </div>
        <div className="bg-[#1b54f1] mb-[-250px] z-10">
          <div className="flex justify-between relative px-[57px] gap-[84px] top-2.5">
            <div className="flex-1">
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Printing Consultation
                </h1>
                <button
                  onClick={() => handleClick("service1")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Packaging Strategy and Consultation
                </h1>
                <button
                  onClick={() => handleClick("service2")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">Job Management</h1>
                <button
                  onClick={() => handleClick("service3")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-b border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Quality Control & Assurance
                </h1>
                <button
                  onClick={() => handleClick("service4")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Cost Analysis & Optimization
                </h1>
                <button
                  onClick={() => handleClick("service5")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Vendor Sourcing & Negotiation
                </h1>
                <button
                  onClick={() => handleClick("service6")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Sustainability Consulting
                </h1>
                <button
                  onClick={() => handleClick("service7")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="flex justify-between items-center border-t border-b border-[#7197FF] py-4">
                <h1 className="text-[20px] text-[#E6EAF4]">
                  Copywriting, Editing and Proof Reading
                </h1>
                <button
                  onClick={() => handleClick("service8")}
                  className="cursor-pointer"
                >
                  <img src={image2} alt="Icon" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
          <video
            className="block relative top-[-251px] mix-blend-color-burn cursor-pointer pointer-events-none"
            autoPlay
            muted
            loop
            style={{
              objectFit: "cover",
            }}
          >
            <source src="/Video/infinity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <button
        onClick={() => handleClick("parent")}
        className="bg-white cursor-pointer px-[23px] absolute top-[3550px] left-[600px] py-[20px] flex gap-[10px] rounded-full font-medium text-[15px]"
      >
        Explore Services
        <img src={image5} alt="" />
      </button>
    </>
  );
}
