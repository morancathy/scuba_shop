const Cart = require('../models/user.js');

const userDataController = {
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
  }
};

module.exports = userDataController;
