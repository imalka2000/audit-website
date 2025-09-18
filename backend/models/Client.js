const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, default: '' },
  logoUrl: { type: String, default: '' },
  testimonial: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);