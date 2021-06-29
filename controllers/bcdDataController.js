const Bcd = require('../models/bcd.js');

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
        res.locals.data.bcd = createdbcd;
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
    req.body.buyButton === 'clicked'
      ? {$inc : {'res.locals.data.bcd.qty' : -1}}
      : console.log("dkfasodfkapsdnfks")

    Bcd.findByIdAndUpdate(req.params.id, {$inc:{'req.params.id.qty' : 1}}, {new: true}, (err, updatedQty) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        req.params.id.qty = req.params.id.qty - 1;
        console.log("This bcd quantity: ", req.params.id);
        //Cart.
      }
    })


    Bcd.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBcd) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.bcd = updatedBcd;
        console.log("This Bin quantity: ", res.locals.data.bcd);
        next();
      }
    })
  }
};

module.exports = bcdDataController;
