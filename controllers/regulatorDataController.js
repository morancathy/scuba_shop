const Regulator = require('../models/regulator.js');
const Cart = require('../models/user.js');

const regulatorDataController = {
  index(req, res, next){
    Regulator.find({}, (err, allRegulators) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.regulators = allRegulators;
        next();
      }
    })
  },

  show(req, res, next){
    Regulator.findById(req.params.id, (err, foundRegulator)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.regulator = foundRegulator;
        next();
      }
    })
  },

  create(req, res, next){
    Regulator.create(req.body, (err, createdRegulator) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.regulator = createdRegulator;
        next();
      };
    });
  },

  destroy(req, res, next){
    Regulator.findByIdAndDelete(req.params.id, (err, deletedRegulator) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.regulator = deletedRegulator;
        next();
      }
    })
  },

  update(req, res, next){
    Regulator.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRegulator) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.regulator = updatedRegulator;
        next();
      }
    })
  },

  buy(req, res, next){
      Regulator.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.qty = updatedQty;
          
          const boughtProduct = {
            link: `/${updatedQty.product}/${updatedQty._id}`,
            product: updatedQty.product,
            name: updatedQty.name,
            img: updatedQty.img,
            price: updatedQty.price
          };

          Cart.create(boughtProduct, (err, createdCartItem) => {
            if(err){
              res.status(404).send({
                msg: err.message
              })
            } else {
              res.locals.data.user = createdCartItem;
              next();
            }
          })
        }
    })
  }
};

module.exports = regulatorDataController;
