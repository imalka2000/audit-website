const Blog = require('../models/Blog');

exports.list = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const b = await Blog.findById(req.params.id);
    if (!b) return res.status(404).json({ message: 'Blog not found' });
    res.json(b);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Blog not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted' });
  } catch (err) { next(err); }
};