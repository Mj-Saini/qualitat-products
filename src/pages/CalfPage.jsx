import React from 'react'
import CommonHero from '../components/common/CommonHero'
import AnimalsCard from '../components/AnimalsCard'
import { BullList, CalfList } from '../components/common/Helper'

const CalfPage = () => {
  return (
    <div>
      <CommonHero heading="Strong Starts Begin with the Right Genetics" lable="Born for Excellence"/>
         
      
      {/* CALFS */}
          <section className='py-14 md:py-32  relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-wrap sm:-mx-3">
            {CalfList.map((obj, index) => {
            return (
              <div key={index} className='w-full  sm:w-1/2 md:w-1/3 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
                <AnimalsCard mapData={obj} path={`/calfs-details/${obj.id}`} />
              </div>
            )
          })}  
        
          </div>
        </div>
        </section>
    </div>
  )
}

export default CalfPage
