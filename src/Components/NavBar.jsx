import React, { Fragment, useState } from "react";
import logo from "../assets/logo/akhil-logo.png";
import { FaFileDownload } from "react-icons/fa";
import resume from "../assets/logo/resum-akhil.pdf";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-between items-center mt-7 ">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="lg:w-[150px] md:w-[130px] w-[100px]"
            />
          </div>

          {/* Hamburger Icon */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu with transition */}
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="bg-white shadow mt-5 mb-5 p-5 flex flex-wrap gap-5">
            <li>
              <a
                href="#Portfolio"
                className="hover:text-CBrand cursor-pointer font-semibold text-[13px] md:text-[15px] lg:text-[16px] "
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="hover:text-CBrand cursor-pointer font-semibold text-[13px] md:text-[15px] lg:text-[16px]"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href={resume}
                download
                className="hover:text-CBrand cursor-pointer font-semibold flex items-center justify-center text-[13px] md:text-[15px] lg:text-[16px]"
              >
                Resume
                <FaFileDownload className="ml-2" />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-CBrand cursor-pointer font-semibold text-[13px] md:text-[15px] lg:text-[16px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
