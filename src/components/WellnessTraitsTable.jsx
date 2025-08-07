import React from "react";



const WellnessTraitsTable = ({mapData}) => {
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
                    {mapData?.wellnessTraits?.map((trait, index) => {
                        console.log(trait,"asdsa")

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
