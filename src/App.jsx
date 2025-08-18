
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
import GeneticsPage from './pages/GeneticsPage';
import GeneticsDetails from './pages/GeneticsDetails';
import { calvesData, geneticsData, geneticsTabData, healthData, managementData } from './components/common/Helper';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetails from './pages/ResourceDetails';

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
        <Route path="/contact-us" element={<Contact />} />
       
        <Route path="/resources/genetics" element={<ResourcesPage mapData={geneticsData} pageName="/resources/genetics"/>} />
        <Route path="/resources/management" element={<ResourcesPage mapData={managementData}  pageName="/resources/management"/>} />
        <Route path="/resources/health" element={<ResourcesPage mapData={healthData}  pageName="/resources/health"/>} />
        <Route path="/resources/calves" element={<ResourcesPage mapData={calvesData} pageName="/resources/calves" />} />
        <Route path="/resources/genetics/:id" element={<ResourceDetails  mapData={geneticsData} />} />
        <Route path="/resources/health/:id" element={<ResourceDetails mapData={healthData}/>} />
        <Route path="/resources/calves/:id" element={<ResourceDetails mapData={calvesData}/>} />
        
         <Route path="/genetics" element={<GeneticsPage mapData={geneticsData} pageName="genetics"/>} />
        <Route path="/genetics/designations/:id" element={<GeneticsDetails  mapData={geneticsTabData} />} />
      </Routes>
        {!contactPage && <GetInTouch />
     }   <Footer />

    </>
  )
}

export default App
