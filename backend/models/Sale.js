const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  models: [
    {
      model: { type: String, required: true },
      unitPrice: { type: Number, required: true },
      quantity: { type: Number, required: true },
      remarks: String,
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, required: true },
  gst: { type: Number, required: true },
});

module.exports = mongoose.model('Sale', SaleSchema);
