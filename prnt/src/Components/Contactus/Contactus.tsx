// Contactus.js
import React, { useEffect } from "react";
import whatsup from "../../images/Contactus/whatsup.svg";

export default function Contactus() {
  const [formData, setFormData] = React.useState({
    name: "",
    organization: "",
    email: "",
    howHeard: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  // Scroll to the #contactus section when the component mounts
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#contactus") {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="bg-[#f2f2f2] px-[82px] pt-[120px]" id="contactus">
      <div>
        <h1 className="font-medium text-[120px] leading-[100px] tracking-[-7%]">
          Let's
        </h1>
        <span className="font-normal text-[120px] italic leading-[110px] tracking-[-5%] instrument-serif-regular-italic">
          work together
        </span>
      </div>
      <button className="bg-black cursor-pointer text-white flex gap-[11px] py-[17px] px-[27px] rounded-full mt-[36px]">
        <img src={whatsup} alt="" />
        Whatsapp
      </button>

      <div className="min-h-screen flex items-center justify-end p-4">
        <form onSubmit={handleSubmit} className="p-6 w-[640px]">
          {/* Form fields remain the same */}

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-[#797979]  mb-2">
              What's your name?
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-b hover:border-blue-600 border-gray-300  focus:outline-none "
              //   placeholder="Yasir Noori"
            />
          </div>

          {/* Organization Field */}
          <div className="mb-4">
            <label className="block text-[#797979]  mb-2">
              What's the name of your organization?
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-2 border-b hover:border-blue-600 border-gray-300  focus:outline-none "
              //   placeholder="Prnt"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-[#797979]  mb-2">
              What's your email?
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-b hover:border-blue-600 border-gray-300  focus:outline-none "
              //   placeholder="yasimoon@gmail.com"
            />
          </div>

          {/* How Did You Hear About Us? */}
          <div className="mb-4">
            <label className="block text-[#797979] mb-2">
              How did you hear about Prnt?
            </label>
            <input
              type="text"
              name="howHeard"
              value={formData.howHeard}
              onChange={handleChange}
              className="w-full pb-[32px] border-b text-[22px] hover:border-blue-600 border-gray-300  focus:outline-none "
              placeholder="A person's name, social channel, or something else."
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-[#797979]  mb-2">Message </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pb-[100px] border-b text-[24px] hover:border-blue-600 border-gray-300  focus:outline-none "
              placeholder="Tell us how we can help"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-[18px] cursor-pointer mt-[40px] px-[50px] rounded-full bg-black text-white  hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
