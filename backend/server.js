require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const serviceRoutes = require('./routes/services');
const blogRoutes = require('./routes/blogs');
const clientRoutes = require('./routes/clients');
const contactRoutes = require('./routes/contacts');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect db
connectDB(process.env.MONGO_URI);

// basic root
app.get('/', (req, res) => res.json({ message: 'Audit backend running' }));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);

// error handler (simple)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));