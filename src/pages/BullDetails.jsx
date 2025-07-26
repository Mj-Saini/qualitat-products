import React from 'react'
import bullImg from '../assets/images/png/bull-details-hero-img.png';
import { StarIcons } from '../components/common/Icons';
import BixiTable from '../components/BixiTable';
import { fertility, indexes } from '../components/common/Helper';
import TraitsTable from '../components/TraitsTable';
import WellnessTraitsTable from '../components/WellnessTraitsTable';

const BullDetails = () => {
  return (
    <>
      <div className='pt-12 md:pt-24 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
          <div className='flex flex-col-reverse lg:flex-row justify-between text-center lg:-mx-4'>
            <div className='w-full lg:w-6/12 lg:pe-6  mt-8 lg:mt-0'>
              <div className='relative h-full'>
                <img className='h-full object-cover' src={bullImg} alt="profitable-product" />
              </div>
            </div>
            <div className='w-full lg:w-6/12 lg:px-4'>
              <div className='relative text-start'>

                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> HO840003136877210</p>
                <h2 className='font-extrabold text-2xl md:text-3xl lg:text-4xl 2xl:text-[54px] xl:leading-[120%] text-start my-4.5'>
                  REEVE-RED 14HO14464
                </h2>

                <ul className='list-disc flex flex-col gap-4.5 text-start ps-5 ml-2'>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    MR STONE-FRONT REEVE-RED-ET TP TC TY TV TL TD TE HH1T HH2T HH3T HH4T HH5T HH6T
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    Sire: MR SALVATORE RC-ET
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    Dam: Y-WHISPER SILVER REGAL-ET VG-87
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    2-03 3X 365D 17,232 kgM 3.3% 567 kgF 3.1% 527 kgP
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    MGS: SEAGULL-BAY SILVER-ET
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='pt-12 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
          <div className='flex flex-col-reverse lg:flex-row-reverse justify-between items-center text-center lg:-mx-4'>
            <div className='w-full lg:w-6/12 mt-8 lg:mt-0'>
              <div className='relative h-full'>
                <img className='h-full object-cover' src={bullImg} alt="profitable-product" />
              </div>
            </div>
            <div className='w-full lg:w-6/12  lg:pe-6  lg:px-4'>
              <div className='relative text-start'>


                <ul className='list-disc flex flex-col gap-4.5 text-start ps-5 ml-2'>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    Born On: May 26, 2017
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    Beta-casein: A1A2
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    Kappa-casein: AE
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    EFI: 10.4%
                  </li>
                  <li className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                    aAa: 234
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* DETAILS TABLE */}
      <div className='pt-12 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
           <h1 className="text-2xl md:text-3xl xl:text-[38px] text-black font-semibold">Car-Mer Reevered Bixy-Red</h1>
          <div>
            <BixiTable mapData1={indexes} mapData2={fertility}  />
        
            <BixiTable mapData1={indexes} mapData2={fertility} />
        
            <BixiTable mapData1={indexes} mapData2={fertility} />
          </div>
        </div>
      </div>
      <div className='md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
            <TraitsTable/>
        </div>
      </div>
      <div className='md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
            <WellnessTraitsTable/>
        </div>
      </div>
    </>
  )
}

export default BullDetails
