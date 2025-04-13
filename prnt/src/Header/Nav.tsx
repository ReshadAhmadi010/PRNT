import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { useCounter } from "../context/CounterContext";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const { counter } = useCounter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-300 py-5 px-4 md:px-10 w-full">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10" />

        {/* Desktop Menu (from md: 768px and up) */}
        <ul className="hidden md:flex gap-8 text-[17px] text-[#101820] items-center">
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
          <li className="relative">
            <Link to="/services" className="hover:text-blue-500">
              Services
            </Link>
            <sup className="bg-blue-500 rounded-full px-[4px] text-[10px] text-white text-center absolute -top-2 -right-4">
              {counter}
            </sup>
          </li>
          <li>
            <Link to="/sectors" className="hover:text-blue-500">
              Sectors
            </Link>
          </li>
        </ul>

        {/* Contact Button (visible from md and up) */}
        <Link to="/Contactus" className="hidden md:block">
          <button className="bg-[#101820] text-white rounded-full px-4 py-2 hover:bg-gray-800 hover:text-blue-500">
            Contact us
          </button>
        </Link>

        {/* Hamburger Button (visible below md) */}
        <button
          className="md:hidden text-2xl text-[#101820]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (only visible below 768px) */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden text-[17px] text-[#101820]">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            About us
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Services
            </Link>
            <sup className="bg-blue-500 rounded-full px-[4px] text-[10px] text-white text-center">
              {counter}
            </sup>
          </div>
          <Link to="/sectors" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            Sectors
          </Link>
          <Link to="/Contactus">
            <button className="w-full bg-[#101820] text-white rounded-full px-4 py-2 hover:bg-gray-800 hover:text-blue-500">
              Contact us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
