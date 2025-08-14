
import React from 'react';

const PedigreeSheet = ({ mapData }) => {
   
    return (
        <div className="min-h-screen bg-white py-8 px-4 pt-12 md:pt-36 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12">
            <div className='container custom_container sm:px-5 mx-auto'>
            <img src={mapData.detailsImg} alt="" />
            </div>    
        </div>
    );
};

export default PedigreeSheet;
