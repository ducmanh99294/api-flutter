const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    default: "Traveler",
    enum: ["Traveler, Guilder"]
  },
  bio: {
    type: String,
    required: true
  },
  language_spoken: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  updated_at: {
    type: String,
    required: true
  },
});

const userModel = mongoose.model('usermodels', UserSchema)
module.exports = userModel
