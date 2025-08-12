import React from 'react'
import bullImg from '../assets/images/png/bull-details-hero-img.png';
import { StarIcons } from '../components/common/Icons';
import BixiTable from '../components/BixiTable';
import TraitsTable from '../components/TraitsTable';
import WellnessTraitsTable from '../components/WellnessTraitsTable';
import { useLocation } from 'react-router-dom';

const BullDetails = () => {

  const { state } = useLocation();
  console.log(state)


  return (
    <>
      <div className='pt-12 md:pt-24 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
          <div className='flex flex-col-reverse lg:flex-row justify-between text-center lg:-mx-4'>
            <div className='w-full lg:w-6/12 lg:pe-6  mt-8 lg:mt-0'>
              <div className='relative h-full'>
                <img className='h-full object-cover' src={state.img} alt="profitable-product" />
              </div>
            </div>
            <div className='w-full lg:w-6/12 lg:px-4'>
              <div className='relative text-start'>

  
                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> { state.registration_number}</p>
                <h2 className='font-extrabold text-2xl md:text-3xl lg:text-4xl 2xl:text-[54px] xl:leading-[120%] text-start my-4.5'>
              {state.name} &nbsp; {state.id}
                </h2>

                <ul className='list-disc flex flex-col gap-4.5 text-start ps-5 ml-2'>
                   {state?.pedigree?.map((items,i)=>( <li  key={i} className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4'>
                   {items}
                  </li>))}
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
                <img className='h-full object-cover' src={state.img} alt="profitable-product" />
              </div>
            </div>
            <div className='w-full lg:w-6/12  lg:pe-6  lg:px-4'>
              <div className='relative text-start'>


                <ul className='list-disc flex flex-col gap-4.5 text-start ps-5 ml-2'>
                  {state?.genetics?.map((item, i) => {
                    return (
                        <li key={i} className='font-semibold text-lg lg:text-xl text-[#2E3646] text-start border-b border-[#2E3646]/20 pb-4 capitalize'>
                   {item}
                  </li>
                    )
                  })}
                
                 
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
            {state?.allDetails?.map((details, i) => {
              return (
                <div key={i}>
                   <BixiTable mapData={details}  />
             </div>
           )
         })}
          </div>
        </div>
      </div>
      <div className='md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
          <TraitsTable mapData={state} />
        </div>
      </div>
      <div className='md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
            <WellnessTraitsTable mapData={state}/>
        </div>
      </div>
    </>
  )
}

export default BullDetails
