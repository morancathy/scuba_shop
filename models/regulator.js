const{Schema, model} = require('mongoose');

const regulatorsSchema = new Schema({
  product: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Regulator = model('Regulator', regulatorsSchema);

module.exports = Regulator;
