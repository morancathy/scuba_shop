const RESOURCE_PATH = '/regulators';

const regulatorViewController = {

  new(req, res, next){
    res.render('RegulatorNew')
  },

  index(req, res, next){
    res.render('RegulatorIndex', {regulators: res.locals.data.regulators})
  },

  show(req, res, next){
    res.render('RegulatorShow', {regulator: res.locals.data.regulator})
  },

  edit(req, res, next){
    res.render('RegulatorEdit', {regulator: res.locals.data.regulator})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = regulatorViewController;
