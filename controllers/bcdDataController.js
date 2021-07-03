const Bcd = require('../models/bcd.js');
const Cart = require('../models/user.js');

const bcdDataController = {
  index(req, res, next){
    Bcd.find({}, (err, allBcds) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.bcds = allBcds;
        next();
      }
    })
  },

  show(req, res, next){
    Bcd.findById(req.params.id, (err, foundBcd)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.bcd = foundBcd;
        next();
      }
    })
  },

  create(req, res, next){
    Bcd.create(req.body, (err, createdBcd) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.bcd = createdBcd;
        next();
      };
    });
  },

  destroy(req, res, next){
    Bcd.findByIdAndDelete(req.params.id, (err, deletedBcd) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.bcd = deletedBcd;
        next();
      }
    })
  },

  update(req, res, next){
    Bcd.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBcd) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.bcd = updatedBcd;
        next();
      }
    })
  },

  buy(req, res, next){
      Bcd.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
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

module.exports = bcdDataController;
