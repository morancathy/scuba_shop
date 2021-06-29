const RESOURCE_PATH = '/masks';

const maskViewController = {

  new(req, res, next){
    res.render('New')
  },

  index(req, res, next){
    res.render('MaskIndex', {masks: res.locals.data.masks})
  },

  show(req, res, next){
    res.render('MasksShow', {mask: res.locals.data.mask})
  },

  edit(req, res, next){
    res.render('Edit', {mask: res.locals.data.mask})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = maskViewController;
