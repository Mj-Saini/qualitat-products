// import React from 'react'
// import { StarIcons } from '../components/common/Icons';
// import BixiTable from '../components/BixiTable';
// import TraitsTable from '../components/TraitsTable';
// import WellnessTraitsTable from '../components/WellnessTraitsTable';
// import { useLocation } from 'react-router-dom';
// import PedigreeSheet from '../components/PedigreeSheet';

// const BullDetails = () => {

//   const { state } = useLocation();
//   console.log(state)


//   return (
//     <>
      
//       {/* <PedigreeSheet mapData={state}/> */}


//        <div className="min-h-screen bg-white py-8 px-4 pt-12 md:pt-36 md:pb-36 lg:pb-44 xl:pb-48 overflow-hidden pb-12">
//       <div className="container custom_container sm:px-5 mx-auto">
//         <embed
//           src={state.detailsPdf} // 👈 yaha tumhe PDF ka link dena hoga
//           type="application/pdf"
//           width="100%"
//           height="800px"
//           className="rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
      
//     </>
//   )
// }

// export default BullDetails


import React from 'react';
import { useLocation } from 'react-router-dom';

const BullDetails = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <a
        href={state.detailsPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        View PDF
      </a>
    </div>
  );
};

export default BullDetails;

