const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      bookId: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
});
module.exports = mongoose.model('Cart', CartSchema);