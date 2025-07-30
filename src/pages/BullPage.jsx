import React, { useState } from 'react'
import CommonHero from '../components/common/CommonHero'
import AnimalsCard from '../components/AnimalsCard'
import { BullList } from '../components/common/Helper'

const BullPage = () => {
  const [activeType, setActiveType] = useState('HF');

  // Filter BullList based on activeType
  const filteredBullList = BullList.filter(bull => bull.type === activeType);


  return (
    <div>
      <CommonHero heading="Empowering Farmers Through World-Class Genetics" lable="BEST MEDICAL TREATMENT" />
      <section className='mt-6 py-14 md:py-32 lg:py-40 xl:py-44 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2 pe-6'>
              <h2 className='font-extrabold text-3xl md:text-5xl xl:text-6xl xl:leading-[140%] lg:text-end text-[#9E1E1D]'>
                Right Bull, Better Future – The Power
                of Semen Selection
              </h2>
            </div>
            <div className='w-full lg:w-1/2 lg:ps-6 lg:border-l border-[#000000]'>
              <div className='h-full flex items-center '>
                <p className='font-normal text-lg md:text-xl text-[#2E3646] xl:leading-[160%] text-start'>
                  In dairy farming, the selection of bull
                  semen is a crucial decision that directly
                  impacts milk production, fertility, and herd
                  improvement. Choosing genetically
                  superior semen ensures healthier calves,
                  higher conception rates, and long-term
                  profitability. A smart breeding choice
                  today builds a stronger, more productive
                  herd for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BULLS */}
      <section className='pb-14 md:pb-32 mt-6 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex mb-8">
        <div className="flex shadow-sm border border-[#9E1E1D] overflow-clip rounded-full !bg-[#C8F9E4]" role="group">
          <button
            type="button"
            className={`px-6 lg:px-10 py-3 text-base md:text-xl lg:text-2xl font-medium ${activeType === 'HF' ? 'bg-[#9E1E1D] text-white' : 'bg-white text-[#9E1E1D]'}`}
            onClick={() => setActiveType('HF')}
          >
            HF
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-base md:text-xl lg:text-2xl font-medium border-x border-[#9E1E1D] ${activeType === 'Jersey' ? 'bg-[#9E1E1D] text-white' : 'bg-white text-[#9E1E1D]'}`}
            onClick={() => setActiveType('Jersey')}
          >
            Jersey
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-base md:text-xl lg:text-2xl font-medium ${activeType === 'Red' ? 'bg-[#9E1E1D] text-white' : 'bg-white text-[#9E1E1D]'}`}
            onClick={() => setActiveType('Red')}
          >
            Red
          </button>
        </div>
      </div>
        <div className="flex flex-wrap sm:-mx-3">
            {filteredBullList.length > 0 ? (
              filteredBullList.map((obj, index) => {
                return (
                  <div key={index} className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
                    <AnimalsCard mapData={obj} path={`/bulls-details/${obj.id}`} />
                  </div>
                )
              })
            ) : (
              <div className="w-full text-center py-10 text-xl text-gray-500">No bulls found for this type.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BullPage
