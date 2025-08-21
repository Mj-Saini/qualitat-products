import React from 'react'

const CommonHero = ({heading,heroBgImg }) => {
  return (
    <>
       <div className={`${heroBgImg} h-[calc(70vh-87px)] relative flex`}>
                <div className='bg-[#111111]/50 absolute w-full h-[calc(70vh-87px)] top-0 left-0'></div>
                <div className='custom_container container px-5 mx-auto grow'>
                    <div className='flex flex-col justify-center items-center text-start text-white h-full relative z-10'>

                      
                        <h2 className='font-extrabold text-3xl md:text-4xl text-center lg:text-5xl xl:text-7xl leading-[120%] my-2'>
                          {heading}
            </h2>
            
                
                    </div>
                </div>     </div>
    </>
  )
}

export default CommonHero
