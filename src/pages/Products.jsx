// import React from 'react'
// import CommonHero from '../components/common/CommonHero'
// import MarqueeSlide from '../components/MarqueeSlide'
// import { CalfList, productList } from '../components/common/Helper'

// import previewImg from '../assets/images/png/no-preview.jpg'

// const Products = () => {
//   return (
//     <div>
//       <CommonHero heading="Explore Our Visual Collection" lable="Products" heroBgImg={"product_hero_bg_img"}/>
         
//          <MarqueeSlide />
//     {/* Products */}
//           <section className='py-14 md:py-32  relative'>
//         <div className='custom_container container px-5 mx-auto'>
//               <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#9E1E1D] mb-6">
//         ALL PRODUCTS AVAILABLE IN 1 LTR, 5 LTR, 25 LTR
//       </p>
//           <div className="flex flex-wrap sm:-mx-3 mt-6">
//             {productList.map((obj, index) => {
//             return (
//               <div key={index} className='w-full sm:w-1/2 lg:w-1/4 sm:px-3 mt-6 lg:mb-0'>
//                 <img className='w-full object-fit h-[300px]' src={obj.img || previewImg} alt="" />
//               </div>
//             ) 
//           })} 
//             </div>
//         </div>
//         </section>
//     </div>
//   )
// }


// export default Products



import React, { useState } from 'react'
import CommonHero from '../components/common/CommonHero'
import MarqueeSlide from '../components/MarqueeSlide'
import { productList } from '../components/common/Helper'
import previewImg from '../assets/images/png/no-preview.jpg'

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = (e) => {
    e.stopPropagation()
    const newIndex = currentImageIndex === 0 ? productList.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(productList[newIndex].img || previewImg)
  }

  const goToNext = (e) => {
    e.stopPropagation()
    const newIndex = currentImageIndex === productList.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(productList[newIndex].img || previewImg)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeImageModal()
    if (e.key === 'ArrowLeft') goToPrevious(e)
    if (e.key === 'ArrowRight') goToNext(e)
  }

  return (
    <div>
      <CommonHero heading="Explore Our Visual Collection" lable="Products" heroBgImg="product_hero_bg_img" />
      <MarqueeSlide />

      {/* Products */}
      <section className='py-14 md:py-32 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#9E1E1D] mb-6">
            ALL PRODUCTS AVAILABLE IN 1 LTR, 5 LTR, 25 LTR
          </p>
          <div className="flex flex-wrap sm:-mx-3 mt-6">
            {productList.map((obj, index) => (
              <div
                key={index}
                className='w-full sm:w-1/2 lg:w-1/4 sm:px-3 mt-6 lg:mb-0 cursor-pointer'
                onClick={() => openImageModal(obj.img || previewImg, index)}
              >
                <img className='w-full object-fit h-[300px]' src={obj.img || previewImg} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ×
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ‹
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ›
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Product Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <p className="text-xs">{currentImageIndex + 1} of {productList.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
