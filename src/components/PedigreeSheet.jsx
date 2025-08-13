import React from 'react'; 

const PedigreeSheet = ({ mapData }) => {
  // Helper function to get data from allDetails array
  const getDataByIndex = (indexName) => {
    if (!mapData?.allDetails) return [];
    return mapData.allDetails.find(item => item.index === indexName)?.indexes || [];
  };

  // Helper function to get fertility data
  const getFertilityData = (indexName) => {
    if (!mapData?.allDetails) return [];
    return mapData.allDetails.find(item => item.index === indexName)?.fertilities || [];
  };

  // Helper function to format birth date
  const formatBirthDate = (genetics) => {
    if (!genetics) return "Born On: April 04, 2017";
    const birthDate = genetics.find(item => item.includes("birth_date"));
    if (birthDate) {
      const date = birthDate.split(":")[1]?.trim();
      if (date) {
        const [year, month, day] = date.split("-");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `Born On: ${monthNames[parseInt(month) - 1]} ${day}, ${year}`;
      }
    }
    return "Born On: April 04, 2017";
  };

  // Helper function to get genetic markers
  const getGeneticMarkers = (genetics) => {
    if (!genetics) return [];
    return genetics.filter(item => !item.includes("birth_date"));
  };

    console.log(mapData)
  return (
    <div className="min-h-screen bg-white py-8 px-4 pt-12 md:pt-24 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-white text-black p-6 border-b border-[#ccc]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Bull Info */}
            <div>
              <h1 className="text-4xl font-bold mb-2 text-[black]">{mapData?.name}</h1>
                          <p className="text-base mb-2 text-black">{mapData?.full_name}
                          
              </p>
              <p className="text-base mb-1 text-black/80 font-bold">{mapData?.pedigree?.[3] || 'POWER TOOL-P X ERASER P X RELIEF P'}</p>
              <p className="text-sm mb-1 text-black">Sire: {mapData?.pedigree?.[0] || 'RI-VAL-RE POWER TOOL-P-ET'}</p>
              <p className="text-sm mb-1 text-black">Dam: {mapData?.pedigree?.[1] || 'HOLYLAND ERASER SUNDROP-ET VG-85'}</p>
              <p className="text-sm mb-1 text-black">MGS: {mapData?.pedigree?.[2] || 'KERNDTWAY ERASER P-ET'}</p>
            </div>

            {/* Center Column - Registration Numbers */}
            <div className="text-center">
              <p className="text-sm mb-1 text-black">{mapData?.id}</p>
              <p className="text-sm mb-1 text-black">{mapData?.registration_number }</p>
            <span className="text-sm mb-2 text-black flex">{mapData?.breedingGenetics}</span>
                      </div>

            {/* Right Column - Birth Date & Genetic Markers */}
            <div className="text-right">
              {/* Center Column - Birth Date & Genetic Markers */}
              <div className="">
                <p className="text-lg font-semibold mb-4 text-black text-end">{formatBirthDate(mapData?.genetics)}</p>
                <div className="space-y-2">
                  {getGeneticMarkers(mapData?.genetics).map((marker, index) => (
                    <p key={index} className="text-sm text-black text-end">{marker}</p>
                  ))}
                </div>
              </div>

              <p className="text-sm mb-1 text-black text-start">Daughter Average: </p>
              <p className="text-sm mb-1 text-black text-start">11,192 kgM 450 kgF 4.00%F 357 kgP 3.20%P</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 bg-white">
          {/* Central Image Section */}
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

          {/* Data Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column - Indexes */}
            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
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

            {/* Middle Column - Production */}
            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
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

            {/* Right Column - Type */}
            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
              <h3 className="font-bold text-lg mb-4 text-center text-black">TYPE</h3>
              <div className="space-y-3">
                {getDataByIndex("Production").filter(item => 
                  item.label.includes("Type") || item.label.includes("Composite")
                ).map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium text-black">{item.label}:</span>
                    <span className="font-bold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daughter Fertility & Management Traits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Daughter Fertility */}
            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
              <h3 className="font-bold text-lg mb-4 text-center text-black">DAUGHTER FERTILITY</h3>
              <div className="space-y-3">
                {getFertilityData("indexes").map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium text-black">{item.label}:</span>
                    <span className="font-bold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Traits */}
            <div className="bg-white p-4 rounded-lg border border-[#ccc]">
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

          {/* CDCB/HA Type Traits */}
          <div className="bg-white p-4 rounded-lg mb-8 border border-[#ccc]">
            <h3 className="font-bold text-lg mb-4 text-center text-black">CDCB/HA TYPE TRAITS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mapData?.typeTraits?.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="font-medium text-sm w-32 text-black">{item.label}:</span>
                  <span className="text-sm w-20 text-black">{item.value}</span>
                  <span className="text-sm text-black w-24">({item.score} {item.opposite})</span>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                    <div className={`absolute top-0 h-2 bg-blue-500 rounded-full w-1 ${
                      item.score < -1 ? 'left-0' :
                      item.score < -0.5 ? 'left-1/4' :
                      item.score === 0 ? 'left-1/2' :
                      item.score < 0.5 ? 'left-3/4' :
                      'right-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wellness Traits */}
          <div className="bg-white p-4 rounded-lg mb-8 border border-[#ccc]">
            <h3 className="font-bold text-lg mb-4 text-center text-black">ZOETIS WELLNESS TRAITS / CDCB WELLNESS TRAITS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mapData?.wellnessTraits?.map((item, index) => (
                <div key={index} className="border border-[#ccc] p-3 rounded bg-white">
                  <div className="font-medium text-sm mb-2 text-black">{item.trait}</div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-black">Zoetis: {item.zoetis?.value || 'N/A'}/{item.zoetis?.rel || 'N/A'}</span>
                    <span className="text-black">CDCB: {item.cdcb?.value || 'N/A'}/{item.cdcb?.rel || 'N/A'}</span>
                  </div>
                  {item.cdcb?.value !== undefined && item.cdcb?.value !== null && !isNaN(item.cdcb.value) && (
                    <div className="bg-gray-200 h-2 rounded-full relative">
                      <div className={`absolute top-0 h-2 bg-blue-500 rounded-full w-1 ${
                        item.cdcb.value < -1 ? 'left-0' :
                        item.cdcb.value < -0.5 ? 'left-1/4' :
                        item.cdcb.value === 0 ? 'left-1/2' :
                        item.cdcb.value < 0.5 ? 'left-3/4' :
                        'right-0'
                      }`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="bg-white p-6 border-t border-[#ccc]">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h4 className="font-bold text-lg text-black">WORLD WIDE SIRES LTD.</h4>
              <p className="text-sm text-black">www.wwsires.com</p>
              <p className="text-sm text-black">Email: info@wwsires.com</p>
            </div>
            <div className="text-right text-sm text-black">
              <p>Information for August 13, 2024, provided by the following:</p>
              <p>Production: IB/MACE - USA; Type: CDCB/HA; Milking Speed: CDN Evaluation;</p>
              <p>Service Sire Calving Ease: IB/MACE; Daughter Calving Ease: IB/MACE;</p>
              <p>Wellness: CDCB & Zoetis 08/24</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PedigreeSheet; 