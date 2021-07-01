const{Schema, model} = require('mongoose');

const cartSchema = new Schema({
      product: String,
      name: String,
      img: String,
      price: Number
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
