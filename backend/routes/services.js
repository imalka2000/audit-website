const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', serviceController.list);
router.post('/', protect, serviceController.create);
router.put('/:id', protect, serviceController.update);
router.delete('/:id', protect, serviceController.remove);

module.exports = router;
