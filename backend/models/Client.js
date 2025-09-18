const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: String,
  industry: String,
  logoUrl: String,
  testimonial: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);
