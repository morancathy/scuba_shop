const express = require('express');
const bootierouter = express.Router();
const bootieViewController = require('./bootieViewController');
const bootieDataController = require('./bootieDataController');
const userDataController = require('./userDataController');
const userViewController = require('./userViewController');

const methodOverride = require('method-override');
bootierouter.use(methodOverride('_method'));

// INDEX
bootierouter.get('/', bootieDataController.index, bootieViewController.index);

// NEW
bootierouter.get('/new', bootieViewController.new);

// DELETE
bootierouter.delete('/:id', bootieDataController.destroy, bootieViewController.redirectHome);

// UPDATE
bootierouter.put('/:id', bootieDataController.update, bootieViewController.redirectShow);

// CREATE
bootierouter.post('/', bootieDataController.create, bootieViewController.redirectHome);

//BUY
bootierouter.get('/:id/buy', bootieDataController.buy, userDataController.show, userViewController.show);

// EDIT
bootierouter.get('/:id/edit', bootieDataController.show, bootieViewController.edit);

// SHOW
bootierouter.get('/:id', bootieDataController.show, bootieViewController.show);

module.exports = bootierouter;
