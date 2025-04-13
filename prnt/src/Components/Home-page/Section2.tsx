import React from 'react';
import image1 from '../../images/Section2/image1.svg'
import image2 from '../../images/Section2/image2.svg'
import image3 from '../../images/Section2/image3.svg'
import image4 from '../../images/Section2/image4.svg'
import image5 from '../../images/Section2/image5.svg'

export default function Section2() {
  return (
    <div>
      {/* First Row */}
      <div className="flex gap-5 flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center mb-8">
        <img
          className="w-[600px] h-[390px] object-cover rounded-lg shadow-lg"
          src={image1}
          alt="Image 1"
        />
        <img
          className="w-[600px] h-[390px] object-cover rounded-lg shadow-lg"
          src={image2}
          alt="Image 2"
        />
      </div>

      {/* Second Row */}
      <div className="flex gap-5 flex-col sm:flex-row justify-center items-center">
        <img
          className="w-[394px] h-[381px] object-cover rounded-lg shadow-lg"
          src={image3}
          alt="Image 3"
        />
        <img
          className="w-[394px] h-[381px] object-cover rounded-lg shadow-lg"
          src={image4}
          alt="Image 4"
        />
        <img
          className="w-[394px] h-[381px] object-cover rounded-lg shadow-lg"
          src={image5}
          alt="Image 5"
        />
      </div>
    </div>
  );
}