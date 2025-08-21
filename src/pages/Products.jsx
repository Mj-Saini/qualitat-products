import React from 'react'
import CommonHero from '../components/common/CommonHero'
import MarqueeSlide from '../components/MarqueeSlide'
import { CalfList, productList } from '../components/common/Helper'
import AnimalsCard from '../components/AnimalsCard'

const Products = () => {
  return (
    <div>
      <CommonHero heading="Strong Starts Begin with the Right Genetics" lable="Products" heroBgImg={"product_hero_bg_img"}/>
         
         <MarqueeSlide />
    {/* Products */}
          <section className='py-14 md:py-32  relative'>
        <div className='custom_container container px-5 mx-auto'>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#9E1E1D] mb-6">
        ALL PRODUCTS AVAILABLE IN 1 LTR, 5 LTR, 25 LTR
      </p>
          <div className="flex flex-wrap sm:-mx-3 mt-6">
            {productList.map((obj, index) => {
            return (
              <div key={index} className='w-full sm:w-1/2 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
                <AnimalsCard mapData={obj} path={`/products-details/${obj.id}`} btnStyling='!hidden' />
              </div>
            ) 
          })} 
            
           
        
          </div>
        </div>
        </section>
    </div>
  )
}


export default Products
