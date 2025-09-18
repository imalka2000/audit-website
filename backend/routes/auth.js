const express = require('express');
const router = express.Router();
const { login, bootstrapAdmin } = require('../controllers/authController');

// login
router.post('/login', login);

// bootstrap admin (call once after server start to create admin from .env)
router.get('/bootstrap', bootstrapAdmin);

module.exports = router;
