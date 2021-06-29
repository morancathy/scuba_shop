const Bootie = require('../models/bootie.js');

const bootieDataController = {
  index(req, res, next){
    Bootie.find({}, (err, allBooties) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.booties = allBooties;
        next();
      }
    })
  },

  show(req, res, next){
    Bootie.findById(req.params.id, (err, foundBootie)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.bootie = foundBootie;
        next();
      }
    })
  },

  create(req, res, next){
    Bootie.create(req.body, (err, createdBootie) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.bootie = createdBootie;
        next();
      };
    });
  },

  destroy(req, res, next){
    Bootie.findByIdAndDelete(req.params.id, (err, deletedBootie) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.bootie = deletedBootie;
        next();
      }
    })
  },

  update(req, res, next){
    req.body.buyButton === 'clicked'
      ? {$inc : {'res.locals.data.bootie.qty' : -1}}
      : console.log("dkfasodfkapsdnfks")

    Bootie.findByIdAndUpdate(req.params.id, {$inc:{'req.params.id.qty' : 1}}, {new: true}, (err, updatedQty) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        req.params.id.qty = req.params.id.qty - 1;
        console.log("This Bootie quantity: ", req.params.id);
        //Cart.
      }
    })


    Bootie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBootie) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Bootie = updatedBootie;
        console.log("This Bin quantity: ", res.locals.data.Bootie);
        next();
      }
    })
  }
};

module.exports = bootieDataController;