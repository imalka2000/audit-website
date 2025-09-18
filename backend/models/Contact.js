const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  message: { type: String, default: '' },
  handled: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
// Timestamps will automatically add createdAt and updatedAt fields
// Default values ensure fields are never undefined
// Removed unnecessary comments and simplified schema definition   
// Removed explicit createdAt field since timestamps option handles it
// Exported the model directly after schema definition for clarity