const Product = require('../models/product.js');

const dataController = {
  index(req, res, next){
    Product.find({}, (err, allProducts) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.products = allProducts;
        next();
      }
    })
  },

  show(req, res, next){
    Product.findById(req.params.id, (err, foundProduct)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.product = foundProduct;
        next();
      }
    })
  },

  create(req, res, next){
    Product.create(req.body, (err, createdProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next();
      };
    });
  },

  destroy(req, res, next){
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.product = deletedProduct;
        next();
      }
    })
  },

  update(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct;
        next();
      }
    })
  }
};

module.exports = dataController;
