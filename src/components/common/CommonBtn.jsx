



import React from 'react'
import { Link } from 'react-router'

const CommonBtn = ({ btnName, btnStyling, path, type = "button" }) => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (type === 'submit') {
    return (
      <button
        type="submit"
        className={`btn btn-primary bg-[#9E1E1D] capitalize font-semibold text-base lg:text-lg text-white inline-block ${btnStyling}`}
      >
        {btnName}
      </button>
    );
  } else {
    return (
      <Link
         onClick={handleScrollTop}
        to={path}
        className={`btn btn-primary bg-[#9E1E1D] capitalize font-semibold text-base xl:text-lg text-white inline-block ${btnStyling}`}
      >
        {btnName}
      </Link>
    );
  }
};

export default CommonBtn;
