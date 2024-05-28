// src/pages/AdminSales.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/AdminSales.css';

const AdminSales = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    models: [{ model: '', unitPrice: '', quantity: '', remarks: '' }],
    total: '',
    date: new Date().toISOString().split('T')[0],
    gst: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [salesData, setSalesData] = useState([]);
  const [showSalesData, setShowSalesData] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.models.length === 0 || formData.models.some(model => !model.model || !model.unitPrice || !model.quantity)) {
      setErrorMessage('Please provide complete details for at least one model.');
      return;
    }

    try {
      const token = localStorage.getItem('auth-token');
      await axios.post('http://localhost:5000/api/sales', formData, {
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json'
        }
      });
      setSuccessMessage('Data submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        address: '',
        models: [{ model: '', unitPrice: '', quantity: '', remarks: '' }],
        total: '',
        date: new Date().toISOString().split('T')[0],
        gst: ''
      });
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('model-')) {
      const index = name.split('-')[1];
      const key = name.split('-')[2];
      const updatedModels = formData.models.map((model, i) => (i === parseInt(index) ? { ...model, [key]: value } : model));
      setFormData({ ...formData, models: updatedModels });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addModel = () => {
    setFormData({ ...formData, models: [...formData.models, { model: '', unitPrice: '', quantity: '', remarks: '' }] });
  };

  const removeModel = (index) => {
    const updatedModels = formData.models.filter((_, i) => i !== index);
    setFormData({ ...formData, models: updatedModels });
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    window.location.href = '/login';
  };

  const fetchSalesData = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      const res = await axios.get('http://localhost:5000/api/sales', {
        headers: {
          'auth-token': token
        }
      });
      setSalesData(res.data);
      setShowSalesData(true);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  const handlePrintPDF = (sale) => {
    // Implement the logic to print the PDF for the sale
    console.log('Print PDF for sale:', sale);
  };

  const handleViewFullData = (sale) => {
    navigate(`/receipt/${sale._id}`); // Navigate to SaleReceipt page with sale ID
  };

  return (
    <div className="admin-sales">
      <div className="top-buttons">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="see-all-data-button" onClick={fetchSalesData}>See All Data</button>
      </div>
      <h1>Admin Sales</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="add-sales-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        {formData.models.map((model, index) => (
          <div key={index}>
            <label>
              Model:
              <input
                type="text"
                name={`model-${index}-model`}
                value={model.model}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Unit Price:
              <input
                type="text"
                name={`model-${index}-unitPrice`}
                value={model.unitPrice}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Quantity:
              <input
                type="text"
                name={`model-${index}-quantity`}
                value={model.quantity}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Remarks:
              <input
                type="text"
                name={`model-${index}-remarks`}
                value={model.remarks}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={() => removeModel(index)}>Remove Model</button>
          </div>
        ))}
        <button type="button" onClick={addModel}>Add Model</button>
        <label>
          Total:
          <input type="text" name="total" value={formData.total} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          GST:
          <input type="text" name="gst" value={formData.gst} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {showSalesData && (
        <div className="sales-data">
          <h2>Sales Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Total</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale._id}>
                  <td>{sale.name}</td>
                  <td>{sale.phone}</td>
                  <td>{sale.total}</td>
                  <td>{sale.date}</td>
                  <td>
                    <button onClick={() => handleViewFullData(sale)}>See Full Data</button>
                    <button onClick={() => handlePrintPDF(sale)}>Print PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSales;
