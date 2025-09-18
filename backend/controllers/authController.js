const jwt = require('jsonwebtoken');
const User = require('../models/User');

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

    const user = await User.findOne({ email });
    if (user && await user.matchPassword(password)) {
      return res.json({
        token: generateToken(user._id),
        user: { id: user._id, email: user.email }
      });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) {
    next(err);
  }
};

// GET /api/auth/bootstrap
// Ensures an admin user exists using ADMIN_EMAIL & ADMIN_PASSWORD from .env
exports.bootstrapAdmin = async (req, res, next) => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !password) return res.status(500).json({ message: 'Admin credentials not configured in env' });

    let admin = await User.findOne({ email });
    if (!admin) {
      admin = new User({ email, password });
      await admin.save();
      return res.json({ message: 'Admin user created', email });
    }
    return res.json({ message: 'Admin already exists', email });
  } catch (err) {
    next(err);
  }
};