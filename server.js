require('dotenv').config();
const express = require('express');
// const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const Product = require('./models/product.js');  //will eventually delete

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
// app.use(methodOverride('_method'));
app.use(express.static('public'));

//eventually put code to reach controllers

// routes for testing
app.get('/', (req, res) => {
  res.send("This works")
})


//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
});
