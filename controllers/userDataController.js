const Cart = require('../models/user.js');

const userDataController = {
  index(req, res, next){
    Cart.find({}, (err, allItems) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.user = allItems;
        next();
      }
    })
  },
};

module.exports = userDataController;
