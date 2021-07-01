const RESOURCE_PATH = '/fins';

const finViewController = {

  new(req, res, next){
    res.render('FinNew')
  },

  index(req, res, next){
    res.render('FinIndex', {fins: res.locals.data.fins})
  },

  show(req, res, next){
    res.render('FinShow', {fin: res.locals.data.fin})
  },

  edit(req, res, next){
    res.render('FinEdit', {fin: res.locals.data.fin})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = finViewController;
