const RESOURCE_PATH = '/bcds';

const bcdViewController = {

  new(req, res, next){
    res.render('BcdNew')
  },

  index(req, res, next){
    res.render('BcdIndex', {bcds: res.locals.data.bcds})
  },

  show(req, res, next){
    res.render('BcdShow', {bcd: res.locals.data.bcd})
  },

  edit(req, res, next){
    res.render('BcdEdit', {bcd: res.locals.data.bcd})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = bcdViewController;
