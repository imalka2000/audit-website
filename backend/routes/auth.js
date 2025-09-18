const express = require('express');
const router = express.Router();
const { login, bootstrapAdmin } = require('../controllers/authController');

router.post('/login', login);
router.get('/bootstrap', bootstrapAdmin); // call once to ensure admin exists

module.exports = router;