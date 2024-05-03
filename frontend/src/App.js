import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products'; // Product listing component
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage'; // Assuming this exists or replace with the actual product listing page
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AppDownloadPage from './pages/AppDownloadPage';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails'; // Product details component


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          {/* Assuming a product listing page exists, replace ProductPage with the actual component */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<AppDownloadPage />} />
          {/* Remove the duplicate route for generic product listing */}
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
