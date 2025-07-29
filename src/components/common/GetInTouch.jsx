import React from 'react'
import { DialIcons, StarIcons } from './Icons'
import CommonBtn from './CommonBtn'
import { Link } from 'react-router'

const GetInTouch = () => {
  return (
    <>
           <section className='pb-14 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden px-5'>
                <div className='custom_container container px-5 mx-auto get_in_touch_bg relative py-12 lg:py-24'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-1'></div>
                    <div className='flex flex-col justify-center items-center z-10 relative'>
                        <p className='font-semibold text-lg text-white md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className=''><StarIcons /></span>Let’s Connect</p>
                      <h2 className='font-semibold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-center py-3 text-white'>Get in Touch Today!</h2>
                      <p className='font-normal text-base lg:text-xl text-white/90 leading-[160%] text-center'>For any inquiries, assistance, or to place an order, feel free to reach out to us</p>
                    
                       
                        <div className='mt-8 flex gap-5'>
                          <Link className='text-white font-semibold text-base lg:text-xl flex items-center gap-2' to="tel:9592912726">
                              <span><DialIcons /></span>   9592912726</Link>
                          <CommonBtn path='/contact-us' btnName="Contact Us" btnStyling=" py-2.5 px-3 xl:px-6 border border-white bg-transparent text-white duration-300 hover:border-[#9E1E1D]  hover:bg-[#9E1E1D]" />
                        </div>
                    </div>


                </div>
            </section>
    </>
  )
}

export default GetInTouch
