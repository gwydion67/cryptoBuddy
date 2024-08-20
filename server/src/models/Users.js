const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  owned:[{
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  }],
  watchlist: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
