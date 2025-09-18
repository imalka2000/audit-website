const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String, default: '' },
  longDesc: { type: String, default: '' },
  icon: { type: String, default: '' } // optional class or URL
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);