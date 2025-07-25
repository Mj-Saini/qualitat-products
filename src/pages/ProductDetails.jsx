import React from 'react'
import CommonHero from '../components/common/CommonHero'
import breedProgramImg from '../assets/images/webp/breed-program-img.webp'
import { StarIcons } from '../components/common/Icons'

import newsImg from '../assets/images/png/news-img.jpg'
import statImg from '../assets/images/png/stat-img.jpg'

const ProductDetails = () => {
  return (
    <div>
      <CommonHero heading="Breed naturally healthy dairy cows" lable="Products" />

      <div className='pt-24 md:pt-36 lg:pt-44 xl:pt-48 overflow-hidden pb-12'>
        <div className='custom_container container px-5 mx-auto'>
          <div className='flex flex-col-reverse lg:flex-row justify-between text-center lg:-mx-4'>
            <div className='w-full lg:w-5/12  mt-8 lg:mt-0'>
              <div className='relative h-full'>
                <img className='h-full object-cover' src={breedProgramImg} alt="profitable-product" />
              </div>
            </div>
            <div className='w-full lg:w-6/12 lg:px-4'>
              <div className='relative text-start'>

                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> About Product</p>
                <h2 className='font-extrabold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-start my-4.5'>
                  Healthy, efficient cows
                </h2>
                <p className='font-normal text-lg lg:text-xl text-black text-start'>What is a healthy cow worth to you? What if you didn't need to worry about reproduction, milk quality, bills and wasted time? What if your herd was simply thriving and yielding the biggest return?
                  They are the kind of easy-going cow you love being around — and doesn't require too much of your attention. </p>

                <h3 className='font-semibold text-xl lg:text-2xl leading-[160%] text-[#2E3646] my-4.5'>VikingHolstein cows are...</h3>
                <ul className='list-disc flex flex-col gap-4.5 text-start ps-5 ml-2'>
                  <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                    <strong>Healthy :</strong>  Excellent health and reproduction
                  </li>
                  <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                    <strong>High producing :</strong>   High lifetime production of milk and solids
                  </li>
                  <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                    <strong> Resilient :</strong> Great genetic diversity - long-lasting
                  </li>
                  <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                    <strong> Efficient :</strong>   Medium-sized cows, easy to manage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VikingHolstein */}
      <section className='mt-6 py-8 md:py-14 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-col md:flex-row md:mt-10 lg:mt-20 -mx-3">

            <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
              <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> Stats</p>
             <h2 className='font-semibold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-start text-[#030F26] my-4.5'>
                  VikingHolstein
                </h2>
              <div className='relative h-full w-full group overflow-hidden'>
                <div className="mx-auto py-6 font-sans text-[#2E3646] space-y-4">
                  {/* No. Cows */}
                  <div className="flex justify-between items-center">
                    <p className="font-medium">No. cows</p>
                    <p className="font-medium">535,000 (DNK, SWE, FIN)</p>
                  </div>

                  {/* Fat kg */}
                  <div className="bg-[#C8F9E4] px-4 py-3 flex justify-between items-center border-y border-black/20">
                    <p className="font-medium">Fat kg</p>
                    <p className="font-medium">470</p>
                  </div>

                  {/* Fat % */}
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Fat %</p>
                    <p className="font-medium">4.09</p>
                  </div>

                  {/* Protein kg */}
                  <div className="bg-[#C8F9E4] px-4 py-3 flex justify-between items-center border-y border-black/20">
                    <p className="font-medium px-1">Protein kg</p>
                    <p className="font-medium px-1">402</p>
                  </div>

                  {/* Protein % */}
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Protein %</p>
                    <p className="font-medium">3.50</p>
                  </div>

                  {/* Fat + Protein kg */}
                  <div className="bg-[#C8F9E4] px-4 py-3 flex justify-between items-center border-y border-black/20">
                    <p className="font-medium">Fat + Protein kg</p>
                    <p className="font-medium">872</p>
                  </div>

                  {/* Footer */}
                  <p className="italic font-semibold">NAV January 2025</p>
                </div>

              </div>
            </div>
            <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
              <div className='flex h-[500px] bg-top'>
                <img className='w-full h-full object-fit' src={statImg} alt='customer' />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* NEWS */}
      <section className='mt-6 bg-[#C8F9E4] py-8 md:py-14 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="flex flex-col md:flex-row md:mt-10 lg:mt-20 -mx-3">
            <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
              <div className='flex justify-end'>
                <div className='relative w-full h-full md:w-[43%] md:absolute top-0 left-0 bg-[#353535] group overflow-hidden'>
                  <img className='w-full h-full object-cover' src={newsImg} alt='customer' />
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
              <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> Details</p>
              <div className='relative h-full w-full group overflow-hidden'>
                <div className='pb-6 mt-10 '>

                  <h3 className='font-semibold text-3xl lg:text-5xl xl:text-6xl xl:leading-[140%] text-[#2E3646] '>
                    Breed the cows of the future</h3>
                  <p>Balanced breeding is the key to breeding success, and you can achieve this with VikingHolstein - as proven by the International Bull Evaluation Service Interbull.
                    <br /> <br />
                    Take a look at the comparison of the genetic level of daughter-proven Holstein bulls from different countries.
                    VikingHolstein sires have a high genetic level for udder health, fertility, and production traits – all key traits for supporting a sustainable and profitable dairy business.
                    <br /><br />

                    VikingHolstein are resilient, medium-sized cows that are feed-efficient and produce high levels of milk and solids.
                    The breed population average for each trait is 100, and one standard deviation equals 10 units.
                    They are the kind of easy-going cow you love being around — and doesn't require too much of your attention.</p>


                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}



export default ProductDetails
