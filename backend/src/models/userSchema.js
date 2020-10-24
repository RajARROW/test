const { Schema, model } = require('mongoose');

const userSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number
  },
  profileImage: {
    type: String
  }
})

module.exports = model('user', userSchema);