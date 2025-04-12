import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { useCounter } from "../context/CounterContext";

export default function Nav() {
  const { counter } = useCounter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full border-b border-gray-300">
      {/* Main Nav Container */}
      <div className="mx-auto py-4 px-4 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-8" />

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to="/" className="text-[#101820] hover:text-blue-500">
            Home
          </Link>
          <Link to="/about-us" className="text-[#101820] hover:text-blue-500">
            About us
          </Link>
          <div className="relative">
            <Link to="/services" className="text-[#101820] hover:text-blue-500">
              Services
            </Link>
            <sup className="absolute -top-2 -right-3 bg-blue-500 rounded-full px-1 text-xs text-white">
              {counter}
            </sup>
          </div>
          <Link to="/sectors" className="text-[#101820] hover:text-blue-500">
            Sectors
          </Link>
        </div>

        {/* Desktop Contact Button (hidden on mobile) */}
        <div className="hidden sm:block">
          <Link to="/Contactus">
            <button className="bg-[#101820] text-white rounded-full px-4 py-1 text-sm hover:bg-gray-800">
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (visible only on small screens) */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-[#101820]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only when menu is open) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white py-2 px-4 border-t border-gray-200">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="block py-2 text-[#101820] hover:text-blue-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block py-2 text-[#101820] hover:text-blue-500"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <div className="relative">
              <Link
                to="/services"
                className="block py-2 text-[#101820] hover:text-blue-500"
                onClick={toggleMenu}
              >
                Services
                <sup className="ml-1 bg-blue-500 rounded-full px-1 text-xs text-white">
                  {counter}
                </sup>
              </Link>
            </div>
            <Link
              to="/sectors"
              className="block py-2 text-[#101820] hover:text-blue-500"
              onClick={toggleMenu}
            >
              Sectors
            </Link>
            <Link to="/Contactus" className="block py-2" onClick={toggleMenu}>
              <button className="w-full bg-[#101820] text-white rounded-full px-4 py-1 text-sm hover:bg-gray-800">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
