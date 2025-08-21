/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CommonBtn from "./CommonBtn";
import logo from "../../../src/assets/images/svg/logo.svg";
import { SearchIcons } from "./Icons";

const Header = ({ contactPage }) => {
  const location = useLocation();
  const [toggle, setToggle] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (toggle) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className={`glass_shadow  ${contactPage ? 'bg-[#C8F9E4]' : 'bg-white '}`}>
      <div className="px-5 lg:px-18 mx-auto flex gap-3  xl:gap-5 items-center justify-between py-4">
        {/* Logo */}

        <div className=" flex items-center relative w-[150px]">
          <Link to="/" title="Qualitat Products" className="lg:absolute -top-5  left-0 w-[300px]">
            <img className="w-[300px] h-[150px]" src={logo} alt="logo" />
          </Link>
        </div>

       

        {/* Action Buttons */}
        <div className=" flex justify-end items-center gap-3 xl:gap-5">
        {/* Navigation Menu */}
        <div
          className={`flex justify-center max-lg:w-screen max-lg:h-screen max-lg:items-center gap-3 xl:gap-5 max-lg:fixed flex-col lg:flex-row duration-300 ${contactPage ? 'bg-[#C8F9E4]' : 'bg-white '}  ${toggle ? "top-0 left-0" : "-top-full -left-full"
            } `}
        >
          <NavLink onClick={() => setToggle(false)} to="/" className={` hover:text-[#C62524] text-sm text_stroke duration-300 transition-all ${location.pathname === '/' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
            Home
          </NavLink>
          <NavLink
            onClick={() => setToggle(false)}
            to="/bulls"
            className={` hover:text-[#C62524] text-sm text_stroke duration-300 transition-all ${location.pathname === '/bulls' ? 'text-black text_stroke_active' : 'text-black/70'}`}
          >
            Bulls
          </NavLink>
          <NavLink onClick={() => setToggle(false)} to="/calfs" className={` hover:text-[#C62524] text-sm text_stroke duration-300 transition-all ${location.pathname === '/calfs' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
            Calfs
          </NavLink>
          <NavLink onClick={() => setToggle(false)} to="/gallery" className={` hover:text-[#C62524] text-sm text_stroke duration-300 transition-all ${location.pathname === '/gallery' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
            Gallery
          </NavLink>
          <NavLink onClick={() => setToggle(false)} to="/products" className={` hover:text-[#C62524] text-sm text_stroke duration-300 transition-all ${location.pathname === '/products' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
            Products
          </NavLink>
      

         

          {/* Genetics Dropdown */}
          <div className="relative group">
            <button
              className={`hover:text-[#C62524] text-sm text_stroke duration-300 transition-all flex items-center gap-1 ${location.pathname.startsWith("/resources")
                ? "text-black text_stroke_active"
                : "text-black/70"
                }`}
            >
              Genetics
              <svg
                className="w-3 h-3 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-4 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-2xs lg:w-sm">
               <div className="px-4 py-5 mx-auto max-w-6xl">
                <ul className="flex flex-wrap">
               
                    <div className="w-full lg:w-1/2 px-2.5">
                              {/* DESIGNATIONS (Parent with children) */}
                  <li className="is-parent is-page">
                    <Link
                      to="genetics/designations/"
                      className="block py-2 font-semibold text-base"
                    >
                      DESIGNATIONS
                    </Link>
                    <ul>
                      {[
                        { path: "genetics/designations/feedpro", text: "FeedPRO®" },
                        { path: "genetics/designations/fertilitypro", text: "FertilityPRO®" },
                        { path: "genetics/designations/grazingpro", text: "GrazingPRO®" },
                        { path: "genetics/designations/mastitis-resistantpro", text: "Mastitis ResistantPRO®" },
                        { path: "genetics/designations/robotpro", text: "RobotPRO®" },
                        { path: "genetics/designations/showcase", text: "Showcase™" },
                        { path: "genetics/designations/gender-selected", text: "gender SELECTED™" },
                        { path: "genetics/designations/elite-sexed-fertility", text: "Elite Sexed Fertility™" },
                        { path: "genetics/designations/gforce", text: "GForce™" },
                        { path: "genetics/designations/gforce-plus", text: "GForce+™" },
                        { path: "genetics/designations/progeny-proven", text: "Progeny Proven" },
                        { path: "genetics/designations/nxgen", text: "NxGEN®" },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={item.path}
                            className="block text-xs lg:text-sm py-2 hover:bg-[#EEEEEE]"
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
               </div>
                   
               

                </ul>
              </div>
            </div>
          </div>
          {/* Resources Dropdown */}
          <div className="relative group">
            <button
              className={`hover:text-[#C62524] text-sm text_stroke duration-300 transition-all flex items-center gap-1 ${location.pathname.startsWith("/resources")
                ? "text-black text_stroke_active"
                : "text-black/70"
                }`}
            >
              Resources
              <svg
                className="w-3 h-3 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NavLink
                onClick={() => setToggle(false)}
                to="/resources/genetics"
                className="block px-4 py-2 text-sm text-black text_stroke"
              >
                Genetics
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to="/resources/management"
                className="block px-4 py-2 text-sm text-black text_stroke"
              >
                Managements
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to="/resources/health"
                className="block px-4 py-2 text-sm text-black text_stroke capitalize"
              >
                health
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to="/resources/calves"
                className="block px-4 py-2 text-sm text-black text_stroke capitalize"
              >
                calves
              </NavLink>
            </div>
          </div>
          <div onClick={() => setToggle(false)} className="lg:hidden flex">
            <CommonBtn path="/contact-us" btnName="contact us" btnStyling=" py-2.5 px-3 xl:px-6" />
          </div>

        </div>
          <div className="hidden lg:flex">
            <CommonBtn path="/contact-us" btnName="contact us" btnStyling=" py-2.5 px-3 xl:px-6  !whitespace-nowrap !text-sm" />
          </div>


          <div
            onClick={handleToggle}
            className="w-5 h-3 flex flex-col gap-1 items-end relative z-[51] lg:hidden cursor-pointer"
          >
            <span
              className={`w-full border border-[#222] rounded-2xl duration-300 ${toggle ? "rotate-45 translate-x-[-3px] translate-y-[9px]" : ""
                }`}
            ></span>
            <span
              className={`w-3/4 border border-[#222] rounded-2xl  duration-300  ${toggle ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-full border border-[#222] rounded-2xl duration-300 ${toggle ? "-rotate-45 -translate-[3px]" : ""
                }`}
            ></span>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
