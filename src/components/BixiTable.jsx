import React from 'react';



const BixiTable = ({ mapData }) => {
    console.log(mapData)
    return (
        <div className="mx-auto py-4">
           
            <div className='overflow-x-auto'>
                  <div className="border border-black/40 sm:mt-12  w-[640px] sm:w-full overflow-auto">
                <div className="grid grid-cols-2 bg-gray-50 border-b border-black/40">
                    <div className="font-semibold text-xl lg:text-2xl text-black p-4 border-r border-black/40 capitalize">• {mapData?.index}</div>
                    <div className="font-semibold text-xl lg:text-2xl text-black p-4 border-r border-black/40 capitalize">• {mapData?.fertility}</div>
                </div>

                <div className='flex '>
                    <div className='w-full lg:w-6/12 border-r border-black/40'>
                        {mapData?.indexes.map((item, index) => (
                            <div className={`flex justify-between ${index % 2 !== 0 ? 'bg-[#C8F9E4] border-y border-[#000]/20' : ''}`} key={index}>
                                <div className="p-4 ">{item.label}</div>
                                <div className="p-4">{item.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full lg:w-6/12'>
                        {mapData?.fertilities.map((item, index) => (
                            <div className={`flex justify-between ${index % 2 !== 0 ? 'bg-[#C8F9E4] border-y border-[#000]/20' : ''}`} key={index}>
                                <div className="p-4 ">{item.label}</div>
                                <div className="p-4">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default BixiTable
