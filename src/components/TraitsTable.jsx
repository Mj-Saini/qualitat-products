
import React from "react";



const TraitsTable = ({ mapData }) => {
  console.log(mapData)
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold mb-6">CDCB/HA TYPE TRAITS</h2>
          <div className="overflow-x-auto">
                 <div className="lg:w-full border border-gray-300 w-[1000px] ">
        {mapData?.typeTraits?.map((trait,i) => {
          const barWidth = Math.abs(trait.score) * 75; // scale width
          const isNegative = trait.score < 0;

          return (
            <div
              key={i}
              className={`flex items-center border-b border-black/40 bg-[#C8F9E4]
              }`}
            >
              {/* Low Value */}
              <div className="w-[200px] h-14 border-l border-black/40 px-2 text-center  flex items-center justify-center">{trait.label}</div>

              {/* Label */}
              <div className="w-[200px] h-14 border-x border-black/40 px-2 font-medium text-center  flex items-center justify-center">
                {trait.value}
              </div>

              {/* Center Graph */}
              <div className="flex-1 relative h-14 bg-[#E7ECF1] rounded">
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-600 z-10" />
                <div
                  className={`absolute top-0 bottom-0 bg-[#092346] z-0`}
                  style={{
                    width: `${barWidth}px`,
                    left: isNegative ? `calc(50% - ${barWidth}px)` : "50%",
                  }}
                />
              </div>

              {/* Value */}
              <div className="w-[200px] h-14 px-2 text-center font-semibold  flex items-center justify-center">
                {trait.score}
              </div>

              {/* High Value */}
              <div className="w-[200px] h-14 px-2 text-center  flex items-center justify-center">{trait.opposite}</div>
            </div>
          );
        })}
      </div>
   </div>
    </>
  );
};

export default TraitsTable;
