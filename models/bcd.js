const{Schema, model} = require('mongoose');

const bcdsSchema = new Schema({
  product: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Bcd = model('Bcd', bcdsSchema);

module.exports = Bcd;
