const Mask = require('../models/masks.js');
const Cart = require('../models/user.js');

const maskDataController = {
  index(req, res, next){
    Mask.find({}, (err, allMasks) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.masks = allMasks;
        next();
      }
    })
  },

  show(req, res, next){
    Mask.findById(req.params.id, (err, foundMask)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.mask = foundMask;
        next();
      }
    })
  },

  create(req, res, next){
    Mask.create(req.body, (err, createdMask) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.mask = createdMask;
        next();
      };
    });
  },

  destroy(req, res, next){
    Mask.findByIdAndDelete(req.params.id, (err, deletedMask) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.mask = deletedMask;
        next();
      }
    })
  },

  update(req, res, next){
    Mask.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMask) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.mask = updatedMask;
        next();
      }
    })
  },

  buy(req, res, next){
      Mask.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.qty = updatedQty;

          const boughtProduct = {
            link: `/${updatedQty.product}s/${updatedQty._id}`,
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

module.exports = maskDataController;
