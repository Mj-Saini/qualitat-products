import React, { useState } from 'react'
import CommonHero from '../components/common/CommonHero'
import AnimalsCard from '../components/AnimalsCard'
import { bullList } from '../data/bullsdetails';

const BullPage = () => {
  const [activeType, setActiveType] = useState('HF');
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter bull list by category
  const filteredBullList = bullList.filter(bull => bull.category === activeType);

  // Show only the bulls up to the visible count
  const visibleBulls = filteredBullList.slice(0, visibleCount);

  // Reset visible count when type changes
  const handleTypeChange = (type) => {
    setActiveType(type);
    setVisibleCount(8); // reset on type change
  };

  return (
    <div>
      <CommonHero heading="Empowering Farmers Through World-Class Genetics" heroBgImg="bull_hero_bg_img"  />

      {/* Description Section */}
      <section className='mt-6 py-14 md:py-32 lg:py-40 xl:py-44 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2 pe-6'>
              <h2 className='font-extrabold text-3xl md:text-5xl xl:text-6xl xl:leading-[140%] lg:text-end text-[#9E1E1D]'>
                Right Bull, Better Future – The Power of Semen Selection
              </h2>
            </div>
            <div className='w-full lg:w-1/2 lg:ps-6 lg:border-l border-[#000000]'>
              <div className='h-full flex items-center '>
                <p className='font-normal text-lg md:text-xl text-[#2E3646] xl:leading-[160%] text-start'>
                  In dairy farming, the selection of bull semen is a crucial decision that directly
                  impacts milk production, fertility, and herd improvement. Choosing genetically
                  superior semen ensures healthier calves, higher conception rates, and long-term
                  profitability. A smart breeding choice today builds a stronger, more productive
                  herd for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BULLS SECTION */}
      <section className='pb-14 md:pb-32 mt-6 relative'>
        <div className='custom_container container px-5 mx-auto'>
          {/* Filter Buttons */}
          <div className="flex mb-8">
            <div className="flex shadow-sm border border-[#9E1E1D] overflow-clip rounded-full !bg-[#C8F9E4]" role="group">
              {['HF', 'JE', 'Red'].map(type => (
                <button
                  key={type}
                  type="button"
                  className={`px-6 py-2 text-base md:text-xl lg:text-2xl font-medium ${
                    activeType === type
                      ? 'bg-[#9E1E1D] text-white'
                      : 'bg-white text-[#9E1E1D]'
                  } ${type !== 'HF' && 'border-x border-[#9E1E1D]'}`}
                  onClick={() => handleTypeChange(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Bull Cards */}
          <div className="flex flex-wrap sm:-mx-3">
            {visibleBulls.length > 0 ? (
              visibleBulls.map((obj, index) => (
                <div key={index} className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
                  <AnimalsCard mapData={obj} path={`/bulls-details/${obj.id}`} />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 text-xl text-gray-500">No bulls found for this type.</div>
            )}
          </div>

          {/* Show More Button */}
          {visibleCount < filteredBullList.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount(prev => prev + 8)}
                className="px-6 py-3 text-lg font-semibold text-white bg-[#9E1E1D] rounded-full hover:bg-[#7c1919] transition-all duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BullPage;
