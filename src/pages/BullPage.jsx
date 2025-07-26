import React from 'react'
import CommonHero from '../components/common/CommonHero'
import AnimalsCard from '../components/AnimalsCard'
import { BullList } from '../components/common/Helper'

const BullPage = () => {
  return (
    <div>
      <CommonHero heading="Empowering Farmers Through World-Class Genetics" lable="BEST MEDICAL TREATMENT"/>
          <section className='mt-6 py-14 md:py-32 lg:py-40 xl:py-44 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2 pe-6'>
              <h2 className='font-extrabold text-3xl md:text-5xl xl:text-6xl xl:leading-[140%] lg:text-end text-[#9E1E1D]'>
               HERD MANAGEMENT SOLUTION
              </h2>
            </div>
            <div className='w-full lg:w-1/2 lg:ps-6 lg:border-l border-[#000000]'>
              <div className='h-full flex items-center '>
                  <p className='font-normal text-lg md:text-xl text-[#2E3646] xl:leading-[160%] text-start'>
              Herd Management Solutions are valuable assets for every farm. From calf management to adult dairy and beef cattle, our elite line of Herd Management Solutions will maximize production, reproduction and health on your operation.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BULLS */}
          <section className='pb-14 md:pb-32 mt-6 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-wrap sm:-mx-3">
            {BullList.map((obj, index) => {
            return (
              <div key={index} className='w-full lg:w-1/2 sm:px-3 mt-6 lg:mb-0'>
                <AnimalsCard mapData={obj} path={`/bulls-details/${obj.id}`}/>
              </div>
            )
          })}  
        
          </div>
        </div>
        </section>
    </div>
  )
}

export default BullPage
