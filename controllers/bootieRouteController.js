const express = require('express');
const bootierouter = express.Router();
const bootieViewController = require('./bootieViewController');
const bootieDataController = require('./bootieDataController');

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

// EDIT
bootierouter.get('/:id/edit', bootieDataController.show, bootieViewController.edit);

// SHOW
bootierouter.get('/:id', bootieDataController.show, bootieViewController.show);

module.exports = bootierouter;
