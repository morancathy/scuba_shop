const express = require('express');
const bcdrouter = express.Router();
const bcdViewController = require('./bcdViewController');
const bcdDataController = require('./bcdDataController');
const userDataController = require('./userDataController');
const userViewController = require('./userViewController');

const methodOverride = require('method-override');
bcdrouter.use(methodOverride('_method'));

// INDEX
bcdrouter.get('/', bcdDataController.index, bcdViewController.index);

// NEW
bcdrouter.get('/new', bcdViewController.new);

// DELETE
bcdrouter.delete('/:id', bcdDataController.destroy, bcdViewController.redirectHome);

// UPDATE
bcdrouter.put('/:id', bcdDataController.update, bcdViewController.redirectShow);

// CREATE
bcdrouter.post('/', bcdDataController.create, bcdViewController.redirectHome);

//BUY
bcdrouter.get('/:id/buy', bcdDataController.buy, userDataController.show, userViewController.show);

// EDIT
bcdrouter.get('/:id/edit', bcdDataController.show, bcdViewController.edit);

// SHOW
bcdrouter.get('/:id', bcdDataController.show, bcdViewController.show);

module.exports = bcdrouter;
