const express = require('express');
const userrouter = express.Router();
const userViewController = require('./userViewController');
const userDataController = require('./userDataController');

const methodOverride = require('method-override');
userrouter.use(methodOverride('_method'));

// INDEX
// userouter.get('/', inViewController.index);

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW


module.exports = userrouter;
