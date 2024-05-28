const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jsPDF } = require('jspdf');

// Import models
const Sale = require('./models/Sale');
const Admin = require('./models/Admin');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Update with your frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.send('Welcome to Laptech City');
});

// Admin login route
app.post('/api/admin/login', async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(400).send('Username or password is wrong');

  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: admin._id, isAdmin: admin.isAdmin }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

// Sales routes
app.get('/api/sales', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access Denied');
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/sales', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access Denied');

  const { name, phone, address, models, total, date, gst } = req.body;

  // Basic validation
  if (!name || !phone || !address || !models || !total || !date || !gst) {
    return res.status(400).send('All fields are required');
  }

  const sale = new Sale({
    name,
    phone,
    address,
    models,
    total,
    date,
    gst
  });

  try {
    const savedSale = await sale.save();
    generatePDF(savedSale);
    res.status(201).json(savedSale);
  } catch (error) {
    console.error('Error saving sale:', error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/sales/:id', verifyToken, async (req, res) => {
  console.log('Requested Sale ID:', req.params.id);  // Log the ID for debugging
  if (!req.user.isAdmin) return res.status(403).send('Access Denied');

  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.status(404).send('Sale not found');
    res.json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.put('/api/sales/:id', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access Denied');
  try {
    const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/sales/:id', verifyToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access Denied');
  try {
    const removedSale = await Sale.findByIdAndDelete(req.params.id);
    res.json(removedSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const generatePDF = (data) => {
  try {
    const doc = new jsPDF();
    doc.text('Billing Receipt', 20, 20);
    doc.text(`Name: ${data.name}`, 20, 30);
    doc.text(`Phone: ${data.phone}`, 20, 40);
    doc.text(`Address: ${data.address}`, 20, 50);
    data.models.forEach((model, index) => {
      doc.text(`Model: ${model.model}`, 20, 60 + index * 10);
      doc.text(`Unit Price: ${model.unitPrice}`, 20, 70 + index * 10);
      doc.text(`Quantity: ${model.quantity}`, 20, 80 + index * 10);
      doc.text(`Remarks: ${model.remarks}`, 20, 90 + index * 10);
    });
    doc.text(`Total: ${data.total}`, 20, 100);
    doc.text(`Date: ${data.date}`, 20, 110);
    doc.text(`GST: ${data.gst}`, 20, 120);
    doc.save(`Receipt_${data.date}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error.message);
  }
};

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
