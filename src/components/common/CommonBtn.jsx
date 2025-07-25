import React from 'react'
import { Link } from 'react-router'

const CommonBtn = ({btnName,btnStyling,path}) => {
  return (
    <>
          <Link to={path} className={`btn btn-primary bg-[#9E1E1D] capitalize font-semibold text-base lg:text-lg text-white inline-block ${btnStyling}`} >
          {btnName}
          </Link>
    </>
  )
}

export default CommonBtn
