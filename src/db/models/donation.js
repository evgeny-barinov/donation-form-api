const mongoose = require('mongoose');
const config = require('config');

const donationScheme = new mongoose.Schema({
  amount: {
    type: Number,
    required: 'Amount is required',
    validate: [{
      validator: (value) => value > 0,
      msg: 'Amount must be greater than 0',
    }],
  },
  currency: {
    type: String,
    required: 'Currency is required',
    enum: config.get('currencies'),
  },
}, {
  timestamps: true,
});

const Donation = mongoose.model('Donation', donationScheme);

module.exports = Donation;
