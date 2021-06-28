const{Schema, model} = require('mongoose');

const cartSchema = new Schema({
    username: {type: String},
    shopping_cart: {type: Array}
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
