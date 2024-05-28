// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AppDownloadPage from './pages/AppDownloadPage';
import Footer from './components/Footer';
import AdminSales from './components/AdminSales';
import SaleReceipt from './components/SaleReceipt';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<AppDownloadPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/sales"
            element={
              <ProtectedRoute>
                <AdminSales />
              </ProtectedRoute>
            }
          />
          <Route path="/receipt/:saleId" element={<SaleReceipt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
