const Contact = require('../models/Contact');

exports.list = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const c = await Contact.findById(req.params.id);
    if (!c) return res.status(404).json({ message: 'Contact not found' });
    res.json(c);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    // Optionally: send email/notify admins here
    res.status(201).json(contact);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Contact not found' });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) { next(err); }
};
