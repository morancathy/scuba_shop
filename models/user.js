const{Schema, model} = require('mongoose');

const cartSchema = new Schema({
      product: String,
      originalId: String,     //originalId is code I'm working on to increase qty if user deletes item from cart
      name: String,
      link: String,
      img: String,
      price: Number
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
