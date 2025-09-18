const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [String],
  publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);
