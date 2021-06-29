const{Schema, model} = require('mongoose');

const bcdsSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Bcd = model('Bcd', bcdsSchema);

module.exports = Bcd;
