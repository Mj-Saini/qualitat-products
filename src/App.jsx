
import './App.css'
import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useLocation } from 'react-router';
import BullPage from './pages/BullPage';
import CalfPage from './pages/CalfPage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import GetInTouch from './components/common/GetInTouch';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

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
        <Route path="/products" element={<Products />} />
        <Route path="/products-details/:id" element={<ProductDetails />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
        {!contactPage && <GetInTouch />
     }   <Footer />

    </>
  )
}

export default App
