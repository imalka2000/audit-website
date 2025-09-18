const Service = require('../models/Service');

exports.list = async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.json(services);
};

exports.create = async (req, res) => {
  const s = new Service(req.body);
  await s.save();
  res.json(s);
};

exports.update = async (req, res) => {
  const s = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(s);
};

exports.remove = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};