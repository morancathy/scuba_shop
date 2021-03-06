const{Schema, model} = require('mongoose');

const bootiesSchema = new Schema({
  product: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Bootie = model('Bootie', bootiesSchema);

module.exports = Bootie;
