import React from 'react'
import CommonHero from '../components/common/CommonHero'

// Import images from Osaka Japan folder
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

const Gallery = () => {
  return (
    <div>
      <CommonHero heading="Explore Our Visual Collection" lable="Gallery"/>
      
      {/* Osaka Japan Conference Section */}
      <section className='py-14 md:py-20 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Global Conference Meeting in Osaka, Japan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the international collaboration and knowledge sharing at our global conference in Osaka, Japan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka1} alt="Osaka Conference 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka2} alt="Osaka Conference 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka3} alt="Osaka Conference 3" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka4} alt="Osaka Conference 4" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka5} alt="Osaka Conference 5" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka6} alt="Osaka Conference 6" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={osaka7} alt="Osaka Conference 7" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Bo Harstine Visit Section */}
      <section className='py-14 md:py-20 relative bg-gray-50'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dr. Bo Harstine - From USA Visited to India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Celebrating the visit of Dr. Bo Harstine from USA to Qualitat Products, India - strengthening international partnerships.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo1} alt="Dr. Bo Harstine Visit 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo2} alt="Dr. Bo Harstine Visit 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo3} alt="Dr. Bo Harstine Visit 3" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo4} alt="Dr. Bo Harstine Visit 4" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo5} alt="Dr. Bo Harstine Visit 5" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo6} alt="Dr. Bo Harstine Visit 6" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo7} alt="Dr. Bo Harstine Visit 7" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo8} alt="Dr. Bo Harstine Visit 8" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo9} alt="Dr. Bo Harstine Visit 9" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo10} alt="Dr. Bo Harstine Visit 10" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={drBo11} alt="Dr. Bo Harstine Visit 11" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Beijing China Conference Section */}
      <section className='py-14 md:py-20 relative'>
        <div className='custom_container container px-5 mx-auto'>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Beijing, China 2014 World Wide Sires Distributor Conference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Relive the historic 2014 World Wide Sires Distributor Conference held in Beijing, China.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={beijing1} alt="Beijing Conference 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={beijing2} alt="Beijing Conference 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={beijing3} alt="Beijing Conference 3" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={beijing4} alt="Beijing Conference 4" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery 