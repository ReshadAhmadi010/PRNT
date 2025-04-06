import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { useCounter } from "../context/CounterContext";

export default function Nav() {
  const { counter } = useCounter(); // Access the counter
  return (
    <div className="flex justify-between items-center  border-b border-gray-300   py-[28px]">
      <img src={Logo} alt="Logo" className="h-10" />
      <div className="">
        <ul className="flex gap-11 text-[17px] text-[#101820]">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-blue-500">
              About us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-500">
              Services
            </Link>
            {""}
            <sup className="bg-blue-500 rounded-full px-[4px] text-[10px] text-white text-center">
              {counter}
            </sup>
          </li>
          <li>
            <Link to="/sectors" className="hover:text-blue-500">
              Sectors
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/Contactus">
        <button className="bg-[#101820] text-white rounded-full px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-blue-500">
          Contact us
        </button>
      </Link>
    </div>
  );
}
