import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Contacts"
      className="bg-gradient-to-r from-[#0b0c14] via-[#151826] to-[#0b0c14] text-white px-8 md:px-20 py-12 border-t border-gray-700"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-[#f4c542]">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Get in touch for collaborations or queries.
          </p>
          <h3 className="text-lg md:text-xl font-semibold">
            📞 +91 77177 94185
          </h3>
        </div>

        {/* Divider for mobile */}
        <div className="w-full md:hidden border-t border-gray-700"></div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex flex-col md:items-end space-y-3">
            <a
              href="mailto:nihalpandey636@gmail.com"
              className="flex items-center gap-2 hover:text-[#f4c542] transition-colors duration-300"
            >
              <MdOutlineEmail size={22} />
              <span className="text-sm md:text-base">
                nihalpandey636@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nihal-pandey2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#f4c542] transition-colors duration-300"
            >
              <CiLinkedin size={22} />
              <span className="text-sm md:text-base">LinkedIn</span>
            </a>

            <a
              href="https://github.com/Nihal-75"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#f4c542] transition-colors duration-300"
            >
              <FaGithub size={22} />
              <span className="text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 mt-10 mb-6"></div>

      {/* Social Media Icons Centered */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f4c542] transition-all duration-300 transform hover:scale-110"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f4c542] transition-all duration-300 transform hover:scale-110"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f4c542] transition-all duration-300 transform hover:scale-110"
        >
          <FaTwitter size={25} />
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm md:text-base border-t border-gray-700 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#f4c542] font-semibold">AutoDrive</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
