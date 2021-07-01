
const userViewController = {
  show(req, res, next){
    res.render('UserShow', {user: res.locals.data.user})
  }
};

module.exports = userViewController;
