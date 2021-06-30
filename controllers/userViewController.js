const RESOURCE_PATH = '/underthesea/user';

const userViewController = {

  // show(req, res, next){
  //   res.render('UserShow', {user: res.locals.data.user})
  // },

  cart(req, res, next){
    res.render('UserShow')
  }

  // redirectHome(req, res, next){
  //   res.redirect(RESOURCE_PATH)
  // },
  //
  // redirectShow(req, res, next){
  //   res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  // }
};

module.exports = userViewController;
