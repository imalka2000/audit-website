const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', serviceController.list);
router.get('/:id', serviceController.getOne);
router.post('/', protect, serviceController.create);
router.put('/:id', protect, serviceController.update);
router.delete('/:id', protect, serviceController.remove);

module.exports = router;
