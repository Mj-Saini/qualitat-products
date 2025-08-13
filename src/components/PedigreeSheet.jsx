
import React from 'react';

const PedigreeSheet = ({ mapData }) => {
    // ✅ Get indexes by index name (case-insensitive)
    const getDataByIndex = (indexName) => {
        console.log(indexName)
        if (!mapData?.allDetails) return [];
        const foundItem = mapData.allDetails.find(
            item => item.index?.toLowerCase() === indexName.toLowerCase()
        );
        return foundItem?.indexes || [];
    };

    //     const getFertilityData = (fertilityKey) => {
    //   const detail = mapData?.allDetails.find(
    //     (d) => d.fertility.toLowerCase() === fertilityKey.toLowerCase()
    //   );
    //   return detail ? detail.fertilities : [];
    // };

    // ✅ Get fertilities by fertility name (case-insensitive)
    const getFertilityData = (fertilityName) => {
        if (!mapData?.allDetails) return [];
        const foundItem = mapData.allDetails.find(
            item => item.fertility?.toLowerCase() === fertilityName.toLowerCase()
        );
        return foundItem?.fertilities || [];
    };

    // ✅ Helper function to format birth date
    const formatBirthDate = (genetics) => {
        if (!genetics) return "Born On: April 04, 2017";
        const birthDate = genetics.find(item => item.includes("birth_date"));
        if (birthDate) {
            const date = birthDate.split(":")[1]?.trim();
            if (date) {
                const [year, month, day] = date.split("-");
                const monthNames = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                return `Born On: ${monthNames[parseInt(month) - 1]} ${day}, ${year}`;
            }
        }
        return "Born On: April 04, 2017";
    };

    // ✅ Helper function to get genetic markers
    const getGeneticMarkers = (genetics) => {
        if (!genetics) return [];
        return genetics.filter(item => !item.includes("birth_date"));
    };

    // ✅ Helpers for Wellness section visuals
    const displayValue = (v) => (v === undefined || v === null || isNaN(v) ? 'N/A' : v);
    const getZoetisBarPercent = (value) => {
        if (value === undefined || value === null || isNaN(value)) return 0;
        const min = 80;
        const max = 110;
        const clamped = Math.max(min, Math.min(max, value));
        return Math.round(((clamped - min) / (max - min)) * 100);
    };
    const getCdcbBarPercent = (value) => {
        if (value === undefined || value === null || isNaN(value)) return 0;
        const min = -2;
        const max = 2;
        const clamped = Math.max(min, Math.min(max, value));
        return Math.round(((clamped - min) / (max - min)) * 100);
    };

    return (
        <div className="min-h-screen bg-white py-8 px-4 pt-12 md:pt-24 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* ✅ Header Section */}
                <div className="bg-white text-black p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/3">
                            <h1 className="text-4xl font-bold mb-2 text-[black]">{mapData?.name}</h1>
                            <p className="text-base mb-2 text-black">{mapData?.full_name}</p>
                            <p className="text-base mb-1 text-black/80 font-bold">{mapData?.pedigree?.[3] || 'POWER TOOL-P X ERASER P X RELIEF P'}</p>
                            <p className="text-sm mb-1 text-black">Sire: {mapData?.pedigree?.[0]}</p>
                            <p className="text-sm mb-1 text-black">Dam: {mapData?.pedigree?.[1]}</p>
                            <p className="text-sm mb-1 text-black">MGS: {mapData?.pedigree?.[2]}</p>
                        </div>

                        {/* Center Column */}
                        <div className="text-center w-full lg:w-1/3">
                            <p className="text-sm mb-1 text-black">{mapData?.id}</p>
                            <p className="text-sm mb-1 text-black">{mapData?.registration_number}</p>
                            <span className="text-sm mb-2 text-black flex">{mapData?.breedingGenetics}</span>
                        </div>

                        {/* Right Column */}
                        <div className="text-right w-full lg:w-1/3">
                            <p className="text-lg font-semibold mb-4 text-black text-end">{formatBirthDate(mapData?.genetics)}</p>
                            <div className="space-y-2">
                                {getGeneticMarkers(mapData?.genetics).map((marker, index) => (
                                    <p key={index} className="text-sm text-black text-end">{marker}</p>
                                ))}
                            </div>
                            <p className="text-sm mb-1 text-black text-start">Daughter Average: </p>
                            <p className="text-sm mb-1 text-black text-start">11,192 kgM 450 kgF 4.00%F 357 kgP 3.20%P</p>
                        </div>
                    </div>
                </div>

                {/* ✅ Central Image */}
                <div className="text-center mb-8">
                    <div className="w-64 h-48 bg-gray-100 mx-auto rounded-lg flex items-center justify-center mb-2 border border-[#ccc]">
                        {mapData?.img ? (
                            <img src={mapData.img} alt={mapData.name} className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-400 text-4xl">🐄</span>
                        )}
                    </div>
                    <p className="text-sm text-black">MGD Ms Sunview Relief Sundew-ET</p>
                </div>

                {/* ✅ Main Content */}
                <div className="p-6 bg-white">
                    {/* ✅ Data Tables Grid */}
                    <div className="flex flex-col lg:flex-row flex-wrap mb-8">
                        {/* Indexes */}
                        <div className="w-full lg:w-1/3 lg:px-2.5">
                            <div className="bg-white p-4 rounded-lg border border-[#ccc] h-full">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">INDEXES</h3>
                                <div className="space-y-3">
                                    {getDataByIndex("indexes").map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="font-medium text-black">{item.label}:</span>
                                            <span className="font-bold text-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Production */}
                        <div className="w-full lg:w-1/3 lg:px-2.5">
                            <div className="bg-white p-4 rounded-lg border border-[#ccc] h-full">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">PRODUCTION</h3>
                                <div className="space-y-3">
                                    {getDataByIndex("Production").map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="font-medium text-black">{item.label}:</span>
                                            <span className="font-bold text-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ✅ TYPE */}
                        <div className="w-full lg:w-1/3 lg:px-2.5">
                            <div className="bg-white p-4 rounded-lg border border-[#ccc] h-full">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">TYPE</h3>
                                <div className="space-y-3">
                                    {getFertilityData("Type").map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="font-medium text-black">{item.label}:</span>
                                            <span className="font-bold text-black">{item.value}</span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Daughter Fertility & Management Traits */}
                    <div className="flex flex-col lg:flex-row flex-wrap mb-8">
                        {/* Daughter Fertility */}
                        <div className="w-full lg:w-1/3 lg:px-2.5">
                            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">DAUGHTER FERTILITY</h3>
                                <div className="space-y-3">
                                    {getFertilityData("fertility").map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="font-medium text-black">{item.label}:</span>
                                            <span className="font-bold text-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Management Traits */}
                            <div className="bg-white p-4 rounded-lg border border-[#ccc] mt-2.5">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">MANAGEMENT TRAITS</h3>
                                <div className="space-y-3">
                                    {getDataByIndex("MANAGEMENT TRAITS").map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="font-medium text-black">{item.label}:</span>
                                            <span className="font-bold text-black">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CDCB/HA TYPE TRAITS */}
                        <div className="w-full lg:w-2/3 lg:px-2.5">
                            <div className="bg-white p-4 rounded-lg mb-8 border border-[#ccc]">
                                <h3 className="font-bold text-lg mb-4 text-center text-black">CDCB/HA TYPE TRAITS</h3>
                                <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                                    {mapData?.typeTraits?.map((item, index) => (
                                        <div key={index} className="w-full flex items-center space-x-3">
                                            <span className="font-medium text-sm w-32 text-center text-black">{item.label}:</span>
                                            <span className="text-sm w-20 text-black text-center">{item.value}</span>
                                            <div className="flex-1 bg-gray-200 h-2.5 rounded-full relative">
                                                <div
                                                    className={`absolute top-0 h-2.5 bg-[#092346] rounded-full w-1 ${item.score < -1 ? 'left-0' :
                                                        item.score < -0.5 ? 'left-1/4' :
                                                            item.score === 0 ? 'left-1/2' :
                                                                item.score < 0.5 ? 'left-3/4' :
                                                                    'right-0'
                                                        }`}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-black text-center w-24">{item.score}</span>
                                            <span className="text-sm text-black text-center w-24">{item.opposite}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Wellness Traits */}
                    <div className="bg-white p-4 rounded-lg mb-8 border border-[#ccc]">
                        <h3 className="font-bold text-lg mb-4 text-center text-black">ZOETIS WELLNESS TRAITS / CDCB WELLNESS TRAITS</h3>
                        <div className="overflow-x-auto">
                            <div className="min-w-[700px]">
                                <div className="flex border-b border-[#ccc]">
                                    <div className="w-1/4 px-2 py-2">
                                        <div className="text-center text-black font-bold">ZOETIS</div>
                                        <div className="flex text-xs text-black/70 mt-1">
                                            <span className="w-1/2 text-center">Value</span>
                                            <span className="w-1/2 text-center">Rel. %</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 px-2 py-2">
                                        <div className="text-center text-black font-bold">WELLNESS TRAITS</div>
                                    </div>
                                    <div className="w-1/4 px-2 py-2">
                                        <div className="text-center text-black font-bold">CDCB</div>
                                        <div className="flex text-xs text-black/70 mt-1">
                                            <span className="w-1/2 text-center">Value</span>
                                            <span className="w-1/2 text-center">Rel. %</span>
                                        </div>
                                    </div>
                                </div>
                                {mapData?.wellnessTraits?.map((item, index) => (
                                    <div key={index} className="flex border-b border-[#eee]">
                                        <div className="w-1/4 relative px-2 py-2 border-r border-[#eee]">
                                            <div className="absolute left-2 top-1/2 -translate-y-1/2 h-3 bg-transparent">
                                                <div
                                                    className="h-3 bg-[#0b2d5b] rounded"
                                                    style={{ width: `${getZoetisBarPercent(item.zoetis?.value)}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex relative text-sm text-black">
                                                <span className="w-1/2 text-center">{displayValue(item.zoetis?.value)}</span>
                                                <span className="w-1/2 text-center">{displayValue(item.zoetis?.rel)}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 px-2 py-2 flex items-center justify-center border-r border-[#eee]">
                                            <span className="text-black font-medium text-base text-center">{item.trait}</span>
                                        </div>
                                        <div className="w-1/4 relative px-2 py-2">
                                            <div className="absolute left-2 top-1/2 -translate-y-1/2 h-3 bg-transparent">
                                                <div
                                                    className="h-3 bg-[#0b2d5b] rounded"
                                                    style={{ width: `${getCdcbBarPercent(item.cdcb?.value)}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex relative text-sm text-black">
                                                <span className="w-1/2 text-center">{displayValue(item.cdcb?.value)}</span>
                                                <span className="w-1/2 text-center">{displayValue(item.cdcb?.rel)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PedigreeSheet;
