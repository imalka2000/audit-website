const jwt = require('jsonwebtoken');
const User = require('../models/User');

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// On first run, you can create admin based on .env ADMIN_EMAIL/PASSWORD
exports.bootstrapAdmin = async (req, res) => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const pass = process.env.ADMIN_PASSWORD;
    if (!email || !pass) return res.status(500).json({ message: 'Admin creds missing' });

    let admin = await User.findOne({ email });
    if (!admin) {
      admin = new User({ email, password: pass });
      await admin.save();
    }
    return res.json({ message: 'Admin ensured' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await user.matchPassword(password)) {
      return res.json({ token: generateToken(user._id), user: { email: user.email }});
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
