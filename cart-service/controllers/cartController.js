const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const { userId } = req.params;
  const { bookId, quantity } = req.body;
  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });
  const index = cart.items.findIndex(item => item.bookId === bookId);
  if (index !== -1) {
    cart.items[index].quantity += quantity;
  } else {
    cart.items.push({ bookId, quantity });
  }
  await cart.save();
  res.json(cart);
};

exports.getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  res.json(cart || { userId, items: [] });
};

exports.removeFromCart = async (req, res) => {
  const { userId, bookId } = req.params;
  const cart = await Cart.findOneAndUpdate(
    { userId },
    { $pull: { items: { bookId } } },
    { new: true }
  );
  res.json(cart);
};

exports.clearCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOneAndUpdate(
    { userId },
    { items: [] },
    { new: true }
  );
  res.json(cart);
};