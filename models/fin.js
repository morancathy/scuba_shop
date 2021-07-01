const{Schema, model} = require('mongoose');

const finsSchema = new Schema({
  product: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Fin = model('Fin', finsSchema);

module.exports = Fin;
