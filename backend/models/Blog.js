const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, default: '' },
  author: { type: String, default: 'Admin' },
  tags: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);