import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
      <nav className="flex justify-between items-center text-white px-6 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#f4c542] cursor-pointer">
          Auto<span className="text-white">Drive</span>
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm md:text-base font-semibold">
          <li>
            <a
              href="#Home"
              className="hover:text-[#f4c542] transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Cars"
              className="hover:text-[#f4c542] transition-colors duration-300"
            >
              Cars
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-[#f4c542] transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-[#f4c542] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Contacts"
              className="hover:text-[#f4c542] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RiCloseLine size={28} className="text-[#f4c542]" />
          ) : (
            <RiMenu3Line size={28} className="text-[#f4c542]" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white flex flex-col items-center gap-6 py-8 text-lg font-semibold border-t border-gray-700 animate-slideDown">
          <a
            href="#Home"
            className="hover:text-[#f4c542] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#Cars"
            className="hover:text-[#f4c542] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Cars
          </a>
          <a
            href="#Survices"
            className="hover:text-[#f4c542] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#About"
            className="hover:text-[#f4c542] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#Contacts"
            className="hover:text-[#f4c542] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
