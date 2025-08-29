
import osaka1 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (1).jpg'
import osaka2 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (2).jpg'
import osaka3 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (3).jpg'
import osaka4 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (4).jpg'
import osaka5 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (5).jpg'
import osaka6 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (6).jpg'
import osaka7 from '../assets/images/jpg/GLOBAL CONFERENCE MEETING IN OSAKA, JAPAN/1 (7).jpg'

// Import images from Dr. Bo Harstine folder
import drBo1 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (1).JPG'
import drBo2 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (2).jpeg'
import drBo3 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (3).jpeg'
import drBo4 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (4).jpeg'
import drBo5 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (5).jpeg'
import drBo6 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (6).jpeg'
import drBo7 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (7).jpeg'
import drBo8 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (8).jpeg'
import drBo9 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (9).jpeg'
import drBo10 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (10).jpeg'
import drBo11 from '../assets/images/jpg/Dr. Bo Harstine - From USA visited to India (Qualitat Products, India)/1 (11).jpeg'

// Import images from Beijing China folder
import beijing1 from '../assets/images/jpg/BEUING, CHINA 2014 WORLD WIDE SIRES DISTRIBUTOR CONFERENCE/1.jpg'
import beijing2 from '../assets/images/jpg/BEUING, CHINA 2014 WORLD WIDE SIRES DISTRIBUTOR CONFERENCE/2.jpg'
import beijing3 from '../assets/images/jpg/BEUING, CHINA 2014 WORLD WIDE SIRES DISTRIBUTOR CONFERENCE/3.jpg'
import beijing4 from '../assets/images/jpg/BEUING, CHINA 2014 WORLD WIDE SIRES DISTRIBUTOR CONFERENCE/4.jpg'



import React, { useState } from "react"
import CommonHero from "../components/common/CommonHero"

// Import images (keeping your imports as they are above)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Combined image list (your same `allImages`)
  const allImages = [
    // Osaka
    { src: osaka1, alt: "Osaka Conference 1", category: "Osaka" },
    { src: osaka2, alt: "Osaka Conference 2", category: "Osaka" },
    { src: osaka3, alt: "Osaka Conference 3", category: "Osaka" },
    { src: osaka4, alt: "Osaka Conference 4", category: "Osaka" },
    { src: osaka5, alt: "Osaka Conference 5", category: "Osaka" },
    { src: osaka6, alt: "Osaka Conference 6", category: "Osaka" },
    { src: osaka7, alt: "Osaka Conference 7", category: "Osaka" },
    // Dr. Bo
    { src: drBo1, alt: "Dr. Bo Harstine Visit 1", category: "Dr. Bo Harstine" },
    { src: drBo2, alt: "Dr. Bo Harstine Visit 2", category: "Dr. Bo Harstine" },
    { src: drBo3, alt: "Dr. Bo Harstine Visit 3", category: "Dr. Bo Harstine" },
    { src: drBo4, alt: "Dr. Bo Harstine Visit 4", category: "Dr. Bo Harstine" },
    { src: drBo5, alt: "Dr. Bo Harstine Visit 5", category: "Dr. Bo Harstine" },
    { src: drBo6, alt: "Dr. Bo Harstine Visit 6", category: "Dr. Bo Harstine" },
    { src: drBo7, alt: "Dr. Bo Harstine Visit 7", category: "Dr. Bo Harstine" },
    { src: drBo8, alt: "Dr. Bo Harstine Visit 8", category: "Dr. Bo Harstine" },
    { src: drBo9, alt: "Dr. Bo Harstine Visit 9", category: "Dr. Bo Harstine" },
    { src: drBo10, alt: "Dr. Bo Harstine Visit 10", category: "Dr. Bo Harstine" },
    { src: drBo11, alt: "Dr. Bo Harstine Visit 11", category: "Dr. Bo Harstine" },
    // Beijing
    { src: beijing1, alt: "Beijing Conference 1", category: "Beijing" },
    { src: beijing2, alt: "Beijing Conference 2", category: "Beijing" },
    { src: beijing3, alt: "Beijing Conference 3", category: "Beijing" },
    { src: beijing4, alt: "Beijing Conference 4", category: "Beijing" },
  ]

  const openImageModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }
  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }
  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(allImages[newIndex])
  }
  const goToNext = () => {
    const newIndex = currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(allImages[newIndex])
  }
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeImageModal()
    else if (e.key === "ArrowLeft") goToPrevious()
    else if (e.key === "ArrowRight") goToNext()
  }

  // Reusable Grid Section
  const renderGrid = (images) => (
    <div
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        auto-rows-[250px]
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
            ${index % 7 === 0 ? "md:row-span-2" : ""}
            ${index % 5 === 0 ? "md:col-span-2" : ""}
          `}
          onClick={() => openImageModal(img, allImages.indexOf(img))}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-70 flex items-center justify-center transition-all duration-300">
            <p className="text-white text-lg font-semibold">{img.category}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div>
      <CommonHero heading="Capturing Moments, Showcasing Success" lable="Gallery" heroBgImg="gallary_hero_bg_img" />

      {/* Dr. Bo Harstine Visit */}
      <section className="py-14 md:py-20 relative bg-gray-50">
        <div className="custom_container container px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dr. Bo Harstine - From USA Visited to India - 2025
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the visit of Dr. Bo Harstine from USA to Qualitat Products, India - strengthening international partnerships.
            </p>
          </div>
          {renderGrid(allImages.slice(7, 18))}
        </div>
      </section>

      {/* Osaka Japan */}
      <section className="py-14 md:py-20 relative">
        <div className="custom_container container px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Global Conference Meeting in Osaka, Japan - 2024
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the international collaboration and knowledge sharing at our global conference in Osaka, Japan.
            </p>
          </div>
          {renderGrid(allImages.slice(0, 7))}
        </div>
      </section>

      {/* Beijing China */}
      <section className="py-14 md:py-20 relative">
        <div className="custom_container container px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Beijing, China 2014 World Wide Sires Distributor Conference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive the historic 2014 World Wide Sires Distributor Conference held in Beijing, China.
            </p>
          </div>
          {renderGrid(allImages.slice(18))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-full max-h-full">
            {/* Close */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ×
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              ›
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{selectedImage.alt}</p>
              <p className="text-xs text-gray-300">
                {currentImageIndex + 1} of {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
