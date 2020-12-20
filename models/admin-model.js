const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
    required: false,
    minlength: 5,
    maxlength: 32,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  resetToken: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('admins', AdminSchema);
