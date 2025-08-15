
import './App.css'
import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useLocation } from 'react-router';
import BullPage from './pages/BullPage';
import CalfPage from './pages/CalfPage';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import GetInTouch from './components/common/GetInTouch';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import BullDetails from './pages/BullDetails';
import GeneticsPage from './pages/GeneticsPage';
import GeneticsDetails from './pages/GeneticsDetails';
import { calvesData, geneticsData, healthData, managementData } from './components/common/Helper';

function App() {
  const location = useLocation();
  const contactPage = location.pathname === '/contact-us';

  return (
    <>
  <div className={`relative z-50`}>
        <Header contactPage={ contactPage} />
            </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bulls" element={<BullPage />} />
        <Route path="/calfs" element={<CalfPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-details/:id" element={<ProductDetails />} />
        <Route path="/calfs-details/:id" element={<BullDetails />} />
        <Route path="/bulls-details/:id" element={<BullDetails />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/genetics" element={<GeneticsPage mapData={geneticsData} pageName="genetics"/>} />
        <Route path="/genetics/:id" element={<GeneticsDetails  mapData={geneticsData} />} />
        <Route path="/management" element={<GeneticsPage mapData={managementData}  pageName="management"/>} />
        <Route path="/health" element={<GeneticsPage mapData={healthData}  pageName="health"/>} />
        <Route path="/calves" element={<GeneticsPage mapData={calvesData}  pageName="calves"/>} />
        <Route path="/health/:id" element={<GeneticsDetails mapData={healthData}/>} />
        <Route path="/calves/:id" element={<GeneticsDetails mapData={calvesData}/>} />
      </Routes>
        {!contactPage && <GetInTouch />
     }   <Footer />

    </>
  )
}

export default App
