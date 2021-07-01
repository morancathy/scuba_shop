const{Schema, model} = require('mongoose');

const masksSchema = new Schema({
  product: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Mask = model('Mask', masksSchema);

module.exports = Mask;
