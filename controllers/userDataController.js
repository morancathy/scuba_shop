const Cart = require('../models/user.js');

const userDataController = {
  show(req, res, next){
    Product.findById(req.params.id, (err, foundProduct)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.user = foundProduct;
        next();
      }
    })
  }
};


//
// Cart.create(req.body, (err, createdCartItem) => {
//   if(err){
//     res.status(404).send({
//       msg: err.message
//     })
//   } else {
//     res.locals.data.cart = createdCartItem;
//     next();
//   }
// })
module.exports = userDataController;
