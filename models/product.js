const{Schema, model} = require('mongoose');

const productSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Product = model('Product', productSchema);

module.exports = Product;
