require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const Product = require('./models/product.js');  //will eventually delete
const Mask = require('./models/masks.js');
const Fin = require('./models/fin.js');

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
// app.use('/booties', require('./controllers/bootieRouteController.js'))  //booties routes
// app.use('/bcds', require('./controllers/bcdRouteController.js'))  //bcd routes
// app.use('/regulators', require('./controllers/regulatorRouteController.js'))  //regulator routes

//   try {
//     const seedItems = await Product.create(newProducts)
//     res.send(seedItems)
//   } catch (err) {
//     res.send(err.message)
//   }
app.get('/fins/seed/', (req, res) => {
  console.log('seed')
  Fin.create([
      {
        name: 'Fins',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        qty: 99
      }, {
        name: 'Fins',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Fins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }], (err, data) =>{
          res.redirect('/underthesea');
      });
    });
//Index
app.get('/', (req, res) => {
  res.send('This works')
});

// app.get('/fins', (req, res) => {
//   console.log(Fin)
//   Fin.find({}, (err, allFins)=>{
//   if(err){
//     res.status(404).send({
//         msg: err.message
//     })
//   } else {
//     res.render('FinIndex', {fins: allFins})
//     };
//   });
// });

//new
//deletes
//update
//create
//edit
//show
// app.get('/fins/:id', (req, res) => {
//   Fin.findById(req.params.id, (err, foundFin)=>{
//     if(err){
//       res.status(404).send({
//           msg: err.message
//       })
//     } else {
//       res.render('FinShow', {fin: foundFin});
//     };
//   });
// });


//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
});
