import React from 'react';
import { fertility, indexes } from './common/Helper';



const BixiTable = () => {
  return (
    <div className="mx-auto mt-10 p-4">
      <h1 className="text-2xl md:text-3xl xl:text-[38px] text-black font-semibold mb-6">Car-Mer Reevered Bixy-Red</h1>
      <div className="border border-black/40 mt-12">
        <div className="grid grid-cols-2 bg-gray-50 border-b border-black/40">
          <div className="font-semibold text-xl lg:text-2xl text-black p-4 border-r border-black/40">• INDEXES</div>
          <div className="font-semibold text-xl lg:text-2xl text-black p-4 border-r border-black/40">• DAUGHTER FERTILITY</div>
        </div>

        {indexes.map((item, index) => (
          <div className={`grid grid-cols-2 ${index % 2 !== 0? 'bg-[#C8F9E4] border-y border-[#000]/20' : ''}`} key={index}>
            <div className="p-4 border-r border-black/40">{item.label}</div>
            <div className="p-4">{item.value}</div>
          </div>
        ))}

        {fertility.map((item, index) => (
          <div className={`grid grid-cols-2 ${index % 2 !== 0 ? 'bg-[#C8F9E4] border-y border-[#C8F9E4]' : ''}`} key={`fert-${index}`}>
            <div className="p-4 border-r border-black/40">{item.label}</div>
            <div className="p-4">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BixiTable
