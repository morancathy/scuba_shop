const express = require('express');
const userrouter = express.Router();
const userViewController = require('./userViewController');
const userDataController = require('./userDataController');

const methodOverride = require('method-override');
userrouter.use(methodOverride('_method'));

// INDEX

// NEW

// DELETE
userrouter.delete('/:id', userDataController.destroy, userViewController.redirectCart);

// UPDATE

// CREATE

// EDIT

// SHOW
userrouter.get('/', userDataController.show, userViewController.show);


module.exports = userrouter;
