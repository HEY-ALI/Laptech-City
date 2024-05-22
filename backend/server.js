const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const Form = require('./models/Form');

// Configure dotenv to load from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.post('/api/form', async (req, res) => {
  const { name, email, message } = req.body;
  const newForm = new Form({ name, email, message });
  try {
    // Save form data
    await newForm.save();

    // Log form data to console
    console.log('Form Data:', { name, email, message });

    // Log success message to console
    console.log('Form data saved successfully');

    // Send response to client
    res.status(201).send('Form data saved');
  } catch (error) {
    // Log error message to console
    console.error('Error saving form data:', error);

    // Send error response to client
    res.status(400).send('Error saving form data');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
    