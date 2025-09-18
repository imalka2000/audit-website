const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// public: create contact inquiry
router.post('/', contactController.create);

// admin: list/manage contacts
router.get('/', protect, contactController.list);
router.get('/:id', protect, contactController.getOne);
router.put('/:id', protect, contactController.update);
router.delete('/:id', protect, contactController.remove);

module.exports = router;
