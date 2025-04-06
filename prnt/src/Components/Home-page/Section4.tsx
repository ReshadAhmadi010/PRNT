import React, { useState } from "react";
import image4 from "../../images/Section4/image3.svg";
import image3 from "../../images/Section4/image4.svg";
import image2 from "../../images/Section4/image2.svg";

export default function Section4() {
  const testimonials = [
    {
      text: `Prnt completely transformed our design approach. Their team  
           delivered a stunning, user-centric design that exceeded our  
           expectations. Professional, smooth process, and excellent  
           results. Highly recommend!`,
      name: "Abdulaziz Al Ali",
      role: "Marketing Director",
      image: image2,
    },
    {
      text: `"Working with Prnt was an absolute game-changer for our 
             Their team crafted a visually stunning Their  highly functional
             that perfectly aligned with our vision. The process , and 
              the results were beyond our expectations. !"`,
      name: "John Doe",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      text: `"We were blown in away by the quality  work from Prnt.Their 
              delivered a design that was  only  visually stunning but also 
              functional. Their professionalism  creativity made the entire 
               enjoyable."`,
      name: "Jane Smith",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="pt-[87px]">
      <div className="flex">
        <h1 className="font-medium text-[80px] leading-[100%] tracking-[-7%]">
          Client
          <span className="text-[70px] pl-[10px] leading-[100%] tracking-[-7%] instrument-serif-regular-italic">
            testimonials
          </span>
        </h1>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex gap-[14px]">
          <button
            className="p-[16px] border rounded-full cursor-pointer"
            onClick={handlePrev}
            disabled={currentIndex === 0} // Disable left button on first testimonial
          >
            <img src={image4} alt="Previous" />
          </button>

          <button
            className="p-[16px] border rounded-full cursor-pointer"
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1} // Disable right button on last testimonial
          >
            <img src={image3} alt="Next" />
          </button>
        </div>

        <div className="">
          <p className="text-[28px] leading-[45px] tracking-[-5%] pt-[15px]">
            {currentTestimonial.text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="flex items-center gap-[15px] pt-[30px]">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div>
              <h1 className="font-medium text-[22px] leading-[22px] tracking-[-3%]">
                {currentTestimonial.name}
              </h1>
              <span>{currentTestimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
