const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/:userId/add', cartController.addToCart);
router.get('/:userId', cartController.getCart);
router.delete('/:userId/remove/:bookId', cartController.removeFromCart);
router.delete('/:userId/clear', cartController.clearCart);

module.exports = router;