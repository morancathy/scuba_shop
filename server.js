require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

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

app.use('/underthesea', require('./controllers/routeController.js'));
app.use('/masks', require('./controllers/maskRouteController.js'))            
app.use('/fins', require('./controllers/finRouteController.js'))
app.use('/booties', require('./controllers/bootieRouteController.js'))
app.use('/bcds', require('./controllers/bcdRouteController.js'))
app.use('/regulators', require('./controllers/regulatorRouteController.js'))
app.use('/cart', require('./controllers/userRouteController.js'))


//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
});
