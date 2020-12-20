const mongoose = require('mongoose');

const AddressSchema = require('./address').Schema;

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true,
    unique: true
  },
  address: AddressSchema,
  status: {
    type: Number,
    required: true,
    default: 0
  },
  resetToken: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('customers', CustomerSchema);