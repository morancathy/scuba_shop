const{Schema, model} = require('mongoose');

const cartSchema = new Schema({
      name: {type: String},
      price: Number
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
