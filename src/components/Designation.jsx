

import React, { useState } from "react";
import { designationList } from "./common/Helper";
import { Link } from "react-router";

const Designation = () => {
  const [active, setActive] = useState(designationList[0]);

  return (
    <section
      id="designations"
      className="mt-6 md:mb-32 lg:mb-40 xl:mb-44 bg-[#666666] py-12 relative"
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT SIDE GRID */}
        <div className="grid grid-cols-3 grid-rows-8 gap-6 md:w-1/2">
          {designationList.map((item, index) => {
            const gridPositions = [
              "row-span-2 col-span-1", // box1 row:1/3 col:1/2
              "row-start-2 row-end-4 col-start-2 col-end-3", // box2
              "row-span-2 col-start-3 col-end-4", // box3
              "row-start-3 row-end-5 col-start-1 col-end-2", // box4
              "row-start-4 row-end-6 col-start-2 col-end-3", // box5
              "row-start-3 row-end-5 col-start-3 col-end-4", // box6
              "row-start-5 row-end-7 col-start-1 col-end-2", // box7
              "row-start-6 row-end-8 col-start-2 col-end-3", // box8
              "row-start-5 row-end-7 col-start-3 col-end-4", // box9
              "row-start-7 row-end-9 col-start-1 col-end-2", // box10
              "row-start-7 row-end-9 col-start-3 col-end-4", // box11
            ];
 const isActive = active.name === item.name;
            return (
                <Link
                    to={item.href} 
                key={index}
                className={`cursor-pointer flex justify-center items-center ${gridPositions[index]}`}
                onMouseEnter={() => setActive(item)}
              >
                <img
                  src={isActive ? item.colorIcon : item.greyIcon}
                  alt={item.name}
                  className=" transition-transform hover:scale-110"
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full md:w-1/2 text-center flex flex-col items-center">
          <img src={active.colorIcon} alt={active.name} className="w-48 mb-4" />
          <h2 className="text-2xl md:text-4xl text-white uppercase font-medium mb-3">
            {active.title}
          </h2>
          <p className="text-white text-base lg:text-lg max-w-md">{active.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Designation;
