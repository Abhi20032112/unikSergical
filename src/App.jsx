import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Toaster } from '@/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Clients from '@/pages/Clients';
import Contact from '@/pages/Contact';
import Certifications from '@/pages/Certifications';
import Team from '@/pages/Team';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-light-bg pt-20">
      <Helmet>
        <title>Unik Surgical Pvt. Ltd. - Leading Healthcare Infrastructure Solutions in Eastern India</title>
        <meta name="description" content="Unik Surgical Pvt. Ltd. - Premier healthcare infrastructure company in Patna, Bihar. 25+ years experience in Medical Gas Pipeline Systems, Modular Operation Theatres, Medical Furniture, and Surgical Instruments. ISO 9001:2015 certified with 500+ completed projects." />
        <meta name="keywords" content="medical gas pipeline systems, modular operation theatres, medical furniture, surgical instruments, healthcare infrastructure, hospital equipment, Patna Bihar, Eastern India" />
        <meta name="author" content="Unik Surgical Pvt. Ltd." />
        <meta property="og:title" content="Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Solutions" />
        <meta property="og:description" content="Leading healthcare infrastructure company providing comprehensive solutions for hospitals and medical facilities across Eastern India." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unik Surgical Pvt. Ltd. - Healthcare Infrastructure Solutions" />
        <meta name="twitter:description" content="Premier healthcare infrastructure company with 25+ years of experience in medical gas systems, operation theatres, and medical furniture." />
      </Helmet>
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/medical-furniture" element={<Products />} />
          <Route path="/products/non-medical-furniture" element={<Products />} />
          <Route path="/products/surgical-instruments" element={<Products />} />
          <Route path="/products/diagnostic-instruments" element={<Products />} />
          <Route path="/products/support-instruments" element={<Products />} />
          <Route path="/products/furniture/:id" element={<ProductDetail />} />
          <Route path="/products/instruments/:id" element={<ProductDetail />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
