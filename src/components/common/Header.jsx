/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CommonBtn from "./CommonBtn";
import logo from "../../../src/assets/images/png/logo.png";
import { SearchIcons } from "./Icons";

const Header = ({ contactPage }) => {
  const location = useLocation();
  const [toggle, setToggle] = React.useState(false);

  if (toggle) {
    document.body.style.overflow="hidden"
  } else {
    document.body.style.overflow="auto"
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className={`glass_shadow  ${contactPage ? 'bg-[#C8F9E4]' : 'bg-white '}`}>
      <div className="px-5 lg:px-18 mx-auto flex gap-5 items-center justify-between py-4">
        {/* Logo */}
       
          <div className=" flex items-center relative w-[150px]">
            <Link to="/" title="Qualitat Products" className="md:absolute -top-12  lg:-left-17 xl:-left-12  2xl:-left-15 ">
            <img className="w-full h-full" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div
            className={`flex justify-center max-md:w-screen max-md:h-screen max-md:items-center gap-5 max-md:fixed flex-col md:flex-row duration-300 ${contactPage ? 'bg-[#C8F9E4]' : 'bg-white '}  ${toggle ? "top-0 left-0" : "-top-full -left-full"
              } `}
          >
            <NavLink onClick={()=>setToggle(false)} to="/" className={` hover:text-[#C62524] text_stroke duration-300 transition-all ${location.pathname === '/' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
              Home
            </NavLink>
          <NavLink
            onClick={()=>setToggle(false)}
              to="/bulls"
              className={` hover:text-[#C62524] text_stroke duration-300 transition-all ${location.pathname === '/bulls' ? 'text-black text_stroke_active' : 'text-black/70'}`}
            >
              Bulls
            </NavLink>
            <NavLink onClick={()=>setToggle(false)} to="/calfs" className={` hover:text-[#C62524] text_stroke duration-300 transition-all ${location.pathname === '/calfs' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
              Calfs
            </NavLink>
            <NavLink onClick={()=>setToggle(false)} to="/products" className={` hover:text-[#C62524] text_stroke duration-300 transition-all ${location.pathname === '/products' ? 'text-black text_stroke_active' : 'text-black/70'}`}>
              Products
          </NavLink>
          <div onClick={()=>setToggle(false)} className="md:hidden flex">
              <CommonBtn path="/contact-us" btnName="contact us" btnStyling=" py-2.5 px-3 xl:px-6"/>
        </div>
         
          </div>

        {/* Action Buttons */}
              <div className=" flex justify-end items-center gap-5">
                  <div className="flex gap-2 items-center border border-[#000]/40 px-3 py-2.5 lg:max-w-[350px] lg:w-[470px]">
                      <span><SearchIcons/></span>
                      <input className="bg-transparent outline-none w-full" type="search" name="search" id="search" placeholder="search" />
                  </div>
          <div className="hidden md:flex">
              <CommonBtn path="/contact-us" btnName="contact us" btnStyling=" py-2.5 px-3 xl:px-6"/>
        </div>
        
          
          <div
            onClick={handleToggle}
            className="w-5 h-3 flex flex-col gap-1 items-end relative z-[51] md:hidden cursor-pointer"
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
