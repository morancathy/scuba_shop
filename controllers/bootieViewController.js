const RESOURCE_PATH = '/booties';

const bootieViewController = {

  new(req, res, next){
    res.render('BootieNew')
  },

  index(req, res, next){
    res.render('BootieIndex', {booties: res.locals.data.booties})
  },

  show(req, res, next){
    res.render('BootieShow', {bootie: res.locals.data.bootie})
  },

  edit(req, res, next){
    res.render('BootieEdit', {bootie: res.locals.data.bootie})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = bootieViewController;
