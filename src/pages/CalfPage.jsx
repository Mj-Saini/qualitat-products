// import React from 'react'
// import CommonHero from '../components/common/CommonHero'
// import {  CalfList } from '../components/common/Helper'

// const CalfPage = () => {
//   return (
//     <div>
//       <CommonHero heading="Strong Starts Begin with the Right Genetics" heroBgImg="calf_hero_bg_img" />
         
      
//       {/* CALFS */}
//           <section className='py-14 md:py-32  relative'>
//         <div className='custom_container container px-5 mx-auto'>
//           <div className="flex flex-wrap sm:-mx-3">
//             {CalfList.map((obj, index) => {
//             return (
//               <div key={index} className='w-full  sm:w-1/2 md:w-1/3 xl:w-1/4 sm:px-3 mt-6 lg:mb-0'>
//               <img className='w-full h-full object-fit'  src={obj.img} alt="calf" />
//               </div>
//             )
//           })}  
        
//           </div>
//         </div>
//         </section>
//     </div>
//   )
// }

// export default CalfPage




import React, { useState } from 'react'
import CommonHero from '../components/common/CommonHero'
import { CalfList } from '../components/common/Helper'

const CalfPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? CalfList.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(CalfList[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentImageIndex === CalfList.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(CalfList[newIndex])
  }

  return (
    <div>
      <CommonHero heading="Strong Starts Begin with the Right Genetics" heroBgImg="calf_hero_bg_img" />

      {/* CALFS */}
      <section className="py-14 md:py-32 relative">
        <div className="custom_container container px-5 mx-auto">
          <div className="flex flex-wrap sm:-mx-3">
            {CalfList.map((obj, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 sm:px-3 mt-6 lg:mb-0 cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openImageModal(obj, index)}
              >
                {obj.img ? (
                   <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={obj.img}
                  alt="calf"
                />
                ) : obj.video ? (
                    
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={obj.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />  
               ): null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
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
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ›
            </button>

            {/* Image */}
            <img
              src={selectedImage.img}
              alt="calf preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">Calf Image</p>
              <p className="text-xs text-gray-300">
                {currentImageIndex + 1} of {CalfList.length}
              </p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CalfPage
