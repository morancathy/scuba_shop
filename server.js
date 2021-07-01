require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const Product = require('./models/product.js');  //will eventually delete these
const Mask = require('./models/masks.js');
const Fin = require('./models/fin.js');
const Bootie = require('./models/bootie.js');
const Bcd = require('./models/bcd.js');
const Regulator = require('./models/regulator.js');
const User = require('./models/user.js')

// Set Up Data
const db = require('./models/db');
db.once('connected', () => {
  console.log('Connected to Mongo')
});

// Set up Views Engine (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Set Up Middleware and Controllers (app.use)
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/underthesea', require('./controllers/routeController.js')); //main routes
app.use('/underthesea/user', require('./controllers/userRouteController.js'))   //shopping cart routes
app.use('/masks', require('./controllers/maskRouteController.js'))  //mask routes
app.use('/fins', require('./controllers/finRouteController.js'))  //fins routes
app.use('/booties', require('./controllers/bootieRouteController.js'))  //booties routes
app.use('/bcds', require('./controllers/bcdRouteController.js'))  //bcd routes
app.use('/regulators', require('./controllers/regulatorRouteController.js'))  //regulator routes
// app.use('/cart', require('./controllers/userRouteController.js'))

// SEED route

app.get('/cart/seed/', (req, res) => {
  User.create([
      {
        username: 'Cathy',
        shopping_cart: {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1 }
      }], (err, data) =>{
          res.redirect('/underthesea');
      });
    });

//Index
app.get('/', (req, res) => {
  res.send('This works')
});

app.get('/cart', (req, res) => {
  res.send('This works and is my cart baby bAYba')
});
//
// app.get('/regulators', (req, res) => {
//   Regulator.find({}, (err, allRegulators)=>{
//   if(err){
//     res.status(404).send({
//         msg: err.message
//     })
//   } else {
//     res.render('RegulatorIndex', {regulators: allRegulators})
//     };
//   });
// });

//new
//deletes
//update
//create
//edit
//show
// app.get('/regulators/:id', (req, res) => {
//   Regulator.findById(req.params.id, (err, foundRegulator)=>{
//     if(err){
//       res.status(404).send({
//           msg: err.message
//       })
//     } else {
//       res.render('RegulatorShow', {regulator: foundRegulator});
//     };
//   });
// });


//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
});
