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
           <div key={index} className="w-full relative overflow-hidden">
              {item.img ? (
                <img
                  className="w-[270px] sm:w-full h-[300px] sm:h-[500px] object-cover"
                  src={item.img}
                  alt={`marquee-${index}`}
                />
              ) : item.video ? (
                <video
                  className="w-[270px] sm:w-[500px] h-[300px] sm:h-[500px] object-cover"
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : null}
            </div>
            )
          })}
        </Marquee >
      </div>
    </>
  )
}

export default MarqueeSlide
