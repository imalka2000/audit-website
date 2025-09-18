const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', blogController.list);
router.get('/:id', blogController.getOne);
router.post('/', protect, blogController.create);
router.put('/:id', protect, blogController.update);
router.delete('/:id', protect, blogController.remove);

module.exports = router;
