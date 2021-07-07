const Cart = require('../models/user.js');
const Fin = require('../models/fin.js');

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



        //############  Below I am attempting to increase the specific product if a user deletes it from his cart.
        //              No such luck, just yet...

        // const item = deletedCartItem.product.charAt(0).toUpperCase() + deletedCartItem.product.slice(1);
        // console.log("items : ", item)
        // item.findByIdAndUpdate(req.params.id, { $inc: {qty: 1} }, (err, updatedQty)=>{
        //   if(err){
        //     res.status(404).send({
        //       msg: err.message
        //     })
        //   } else {
        //     console.log("ID: ", req.params.id)
        //     res.locals.data.qty = updatedQty;
        //     console.log("updatedQty: ", updatedQty)
        //     next();
        //   }
        // })
      }
    })
  }
};

module.exports = userDataController;
