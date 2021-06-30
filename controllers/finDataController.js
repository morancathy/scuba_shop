const Fin = require('../models/fin.js');

const finDataController = {
  index(req, res, next){
    Fin.find({}, (err, allFins) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.fins = allFins;
        next();
      }
    })
  },

  show(req, res, next){
    Fin.findById(req.params.id, (err, foundFin)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.fin = foundFin;
        next();
      }
    })
  },

  create(req, res, next){
    Fin.create(req.body, (err, createdFin) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.fin = createdFin;
        next();
      };
    });
  },

  destroy(req, res, next){
    Fin.findByIdAndDelete(req.params.id, (err, deletedFin) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.fin = deletedFin;
        next();
      }
    })
  },

  update(req, res, next){
    Fin.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFin) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.Fin = updatedFin;
        console.log("This Fin quantity: ", res.locals.data.Fin);
        next();
      }
    })
  },

  buy(req, res, next){
      Fin.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
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

module.exports = finDataController;
