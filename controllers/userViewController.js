
const userViewController = {

    show(req, res, next){
      console.log("view cotroler ",res.locals.data.user)
    res.render('UserShow', {user: res.locals.data.user})
  }
};

module.exports = userViewController;
