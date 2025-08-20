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
          <div className="flex flex-wrap sm:-mx-3">
            {productList.map((obj, index) => {
            return (
              <div key={index} className='w-full sm:w-1/2 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
                <AnimalsCard mapData={obj} path={`/products-details/${obj.id}`} btnStyling='!hidden' />
              </div>
            ) 
          })} 
            
            <h2 className='3xl  text-bold text-center uppercase w-full'>add Products here</h2>
        
          </div>
        </div>
        </section>
    </div>
  )
}


export default Products
