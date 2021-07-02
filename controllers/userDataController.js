const Cart = require('../models/user.js');

const userDataController = {
  show(req, res, next){
    Cart.find({}, (err, allCartItems) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.user = allCartItems;
        next();
      }
    })
  },

  destroy(req, res, next){
    Cart.findByIdAndDelete(req.params.id, (err, deletedCartItem) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.user = deletedCartItem;
        next();
      }
    })
  }
};

module.exports = userDataController;
