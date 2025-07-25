import React from 'react'
import Marquee from 'react-fast-marquee'
import { MarqueeList } from './common/Helper'

const MarqueeSlide = () => {
  return (
    <>
      <div className='flex'>
        <Marquee
          speed={100}
        >
          {MarqueeList.map((item, index) => {
            return (
              <div key={index} className='w-full  relative overflow-hidden'>
                <img className='w-[270px] sm:w-full h-[300px] sm:h-[500px] object-cover' src={item.img} alt="cow-1" />
                <div className='absolute top-0 left-0 w-full h-full p-5 border-2 border-white bg-black/40 z-10 flex flex-col justify-end'>
                  <h3 className='font-extrabold text-white text-xl lg:text-2xl'>Longevity and fertility</h3>
                  <p className='font-normal text-base lg:text-lg text-white'>Providing consistent supply for academic and practical training purposes.</p>
                </div>
              </div>
            )
          })}
        </Marquee >
      </div>
    </>
  )
}

export default MarqueeSlide
