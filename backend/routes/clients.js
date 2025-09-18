const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', clientController.list);
router.get('/:id', clientController.getOne);
router.post('/', protect, clientController.create);
router.put('/:id', protect, clientController.update);
router.delete('/:id', protect, clientController.remove);

module.exports = router;
