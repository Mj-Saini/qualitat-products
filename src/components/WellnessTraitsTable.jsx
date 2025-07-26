import React from "react";
import { wellnessTraits } from "./common/Helper";



const WellnessTraitsTable = () => {
    const renderBar = (value, isZoetis = true) => {
        if (typeof value !== "number") return null;
        const width = Math.abs(value) * (isZoetis ? 1.5 : 1);
        const isNegative = value < 0;

        return (
            <div className="relative h-16 rounded">
                
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 bg-[#092346] h-full z-0"
                    style={{
                        width: `${width}px`,
                        left: isNegative ? `calc(50% - ${width}px)` : "50%",
                    }}
                />
            </div>
        );
    };

    return (
        <div className="overflow-x-auto">
            <table className="lg:w-full w-[1000px] ">
                <thead>
                    <tr className="">
                        <th colSpan={3} className="text-end font-semibold text-2xl md:text-3xl lg:text-[38px] text-black uppercase pb-5">ZOETIS</th>

                        <th colSpan={3} className="text-end font-semibold text-2xl md:text-3xl lg:text-[38px] text-black uppercase pb-5">CDCB</th>
                    </tr>
                    <tr className="bg-white text-center border border-black">
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black"></th>
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black border-x ">Value</th>
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black">Rel. %</th>
                        <th className="text-center font-bold text-lg md:text-xl text-[#2E3646] px-4 py-4  border-t border-x border-black">WELLNESS TRAITS</th>
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black">Value</th>
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black border-x">Rel. %</th>
                        <th className="px-2 py-4 font-bold text-lg md:text-xl text-[#2E3646] border-t border-black"></th>
                    </tr>
                </thead>
                <tbody>
                    {wellnessTraits.map((trait, index) => {

                        return (
                            <tr key={index} className="text-center border border-black">
                                {/* ZOETIS bar */}
                                {/* Graph */}
                                <td className="px-2 w-[350px]  border-r border-black">
                                    {renderBar(trait.zoetis?.value, false)}
                                </td>

                                {/* ZOETIS value + rel */}
                                <td className="px-2 py-3 text-[#2e3646] bg-[#C8F9E4] border-r border-black text-center font-medium">{trait.zoetis?.value ?? "-"}</td>
                                <td className="px-2 py-3 text-[#2e3646] bg-[#C8F9E4] border-r border-black text-center font-medium">{trait.zoetis?.rel ?? "-"}</td>

                                {/* Trait Name */}
                                <td className=" px-4 py-3 font-medium border-r text-center border-black">{trait.trait}</td>

                                {/* CDCB value + rel */}
                                <td className="px-2 py-3 text-[#2e3646] bg-[#C8F9E4] border-r border-black text-center font-medium">{trait.cdcb?.value ?? "-"}</td>
                                <td className="px-2 py-3 text-[#2e3646] bg-[#C8F9E4] border-r border-black text-center font-medium">{trait.cdcb?.rel ?? "-"}</td>
                                {/* CDCB bar */}
                                <td className="px-2 w-[350px]  border-r border-black">
                                    {renderBar(trait.cdcb?.value, false)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default WellnessTraitsTable



// import React from "react";

// const traits = [
//   { label: "Stature", low: "short", value: 2.65, high: "tall" },
//   { label: "Strength", low: "frail", value: 1.66, high: "strong" },
//   { label: "Dairy Form", low: "tight ribbed", value: 0.89, high: "deep" },
//   { label: "Rump Width", low: "narrow", value: -1.23, high: "open ribbed" },
//   { label: "Rump Angle", low: "high pins", value: 0.39, high: "wide" },
//   { label: "Rear Leg (Side View)", low: "posty", value: 0.2, high: "sloped" },
//   { label: "Rear Leg (Rear View)", low: "hook-in", value: -1.22, high: "sickled" },
//   { label: "Foot Angle", low: "Low Angle", value: 0.76, high: "straight" },
//   { label: "Feet & Leg Score", low: "low", value: 2.16, high: "steep angle" },
//   { label: "Fore Udder", low: "loose", value: 0.44, high: "high" },
//   { label: "Rear Udder Height", low: "low", value: 0.89, high: "strong" },
//   { label: "Rear Udder Width", low: "narrow", value: 0.12, high: "high" },
//   { label: "Udder Cleft", low: "weak", value: -0.28, high: "wide" },
//   { label: "Udder Depth", low: "deep", value: 0.26, high: "strong" },
//   { label: "Front Teat Placement", low: "wide", value: 1.29, high: "shallow" },
//   { label: "Rear Teat Placement", low: "wide", value: 1.21, high: "close" },
//   { label: "Teat Length", low: "short", value: 0.0, high: "long" },
// ];

// const TraitsTable = () => {
//   const scaleFactor = 20; // controls how wide the bars grow per value unit

//   return (
//     <div className="px-4">
//       <h2 className="text-xl md:text-2xl font-bold mb-6">CDCB/HA TYPE TRAITS</h2>
//       <table className="w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 text-sm md:text-base">
//             <th className="w-[200px] py-2">Low</th>
//             <th className="w-[200px] text-left py-2">Trait</th>
//             <th className="px-2 text-center py-2">Graph</th>
//             <th className="w-[200px] py-2">Value</th>
//             <th className="w-[200px] py-2">High</th>
//           </tr>
//         </thead>
//         <tbody>
//           {traits.map((trait, index) => {
//             const value = trait.value || 0;
//             const isNegative = value < 0;
//             const barWidth = Math.min(Math.abs(value) * scaleFactor, 100); // max 100px

//             return (
//               <tr
//                 key={trait.label}
//                 className={`text-sm md:text-base ${
//                   index % 2 === 1 ? "bg-[#C8F9E4]" : "bg-white"
//                 } border-b border-black/30`}
//               >
//                 {/* Low */}
//                 <td className="w-[200px] h-14 px-2 text-center flex items-center justify-center">
//                   {trait.low}
//                 </td>

//                 {/* Label */}
//                 <td className="w-[200px] h-14 px-2 font-medium text-left flex items-center">
//                   {trait.label}
//                 </td>

//                 {/* Graph */}
//                 <td className="px-2 py-3">
//                   <div className="relative w-[200px] h-5 bg-[#E7ECF1] rounded overflow-hidden mx-auto">
//                     {/* Center axis */}
//                     <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-600 z-10" />

//                     {/* Graph bar */}
//                     <div
//                       className="absolute top-0 bottom-0 bg-[#092346]"
//                       style={{
//                         width: `${barWidth}px`,
//                         left: isNegative
//                           ? `calc(50% - ${barWidth}px)`
//                           : "50%",
//                       }}
//                     />
//                   </div>
//                 </td>

//                 {/* Value */}
//                 <td className="w-[200px] h-14 px-2 text-center font-semibold flex items-center justify-center">
//                   {value}
//                 </td>

//                 {/* High */}
//                 <td className="w-[200px] h-14 px-2 text-center flex items-center justify-center">
//                   {trait.high}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TraitsTable;

