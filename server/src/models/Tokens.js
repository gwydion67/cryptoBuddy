const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  decimals: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Token', tokenSchema);
