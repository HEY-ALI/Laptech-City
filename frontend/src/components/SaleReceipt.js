import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SaleReceipt = ({ match }) => {
  const [sale, setSale] = useState(null);
  const [error, setError] = useState(null);

  const fetchSaleData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/sales/${id}`);
      setSale(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const saleId = match.params.id;  // Ensure this matches the URL parameter
    fetchSaleData(saleId);
  }, [match.params.id]);

  if (error) return <div>Error fetching sale data: {error.message}</div>;
  if (!sale) return <div>Loading...</div>;

  return (
    <div>
      <h1>Sale Receipt</h1>
      <p>Name: {sale.name}</p>
      <p>Phone: {sale.phone}</p>
      <p>Address: {sale.address}</p>
      <p>Total: {sale.total}</p>
      <p>Date: {new Date(sale.date).toLocaleDateString()}</p>
      <p>GST: {sale.gst}</p>
      <h2>Models</h2>
      {sale.models.map((model, index) => (
        <div key={model._id}>
          <p>Model: {model.model}</p>
          <p>Unit Price: {model.unitPrice}</p>
          <p>Quantity: {model.quantity}</p>
          <p>Remarks: {model.remarks}</p>
        </div>
      ))}
    </div>
  );
};

export default SaleReceipt;
