const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    if (!uri) throw new Error('MONGO_URI not provided');
    await mongoose.connect(uri, {
      // mongoose 6+ does not require useNewUrlParser/useUnifiedTopology flags but harmless
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;