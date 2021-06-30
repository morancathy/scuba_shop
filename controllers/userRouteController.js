const express = require('express');
const userrouter = express.Router();
const userViewController = require('./userViewController');
const userDataController = require('./userDataController');

const methodOverride = require('method-override');
userrouter.use(methodOverride('_method'));

// INDEX

// NEW
userrouter.get('/cart', userViewController.cart)
// userrouter.get('/new', userViewController.cart);
// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW
// userrouter.get('/:id', userDataController.show, userViewController.show);

module.exports = userrouter;
