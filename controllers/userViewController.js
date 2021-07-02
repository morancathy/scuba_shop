
const userViewController = {
  show(req, res, next){
    res.render('UserShow', {user: res.locals.data.user})
  },
  redirectCart(req, res, next){
    res.redirect('/cart')
  }
};

module.exports = userViewController;
