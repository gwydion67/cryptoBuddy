const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  watchlist: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
