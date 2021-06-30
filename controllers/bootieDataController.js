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
    Bootie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBootie) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Bootie = updatedBootie;
        next();
      }
    })
  },

  buy(req, res, next){
      Bootie.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.qty = updatedQty
          next();
        }
      })
    }
};

module.exports = bootieDataController;
