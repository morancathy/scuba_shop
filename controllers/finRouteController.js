const express = require('express');
const finrouter = express.Router();
const finViewController = require('./finViewController');
const finDataController = require('./finDataController');

const methodOverride = require('method-override');
finrouter.use(methodOverride('_method'));

// INDEX
finrouter.get('/', finDataController.index, finViewController.index);

// NEW
finrouter.get('/new', finViewController.new);

// DELETE
finrouter.delete('/:id', finDataController.destroy, finViewController.redirectHome);

// UPDATE
finrouter.put('/:id', finDataController.update, finViewController.redirectShow);

// CREATE
finrouter.post('/', finDataController.create, finViewController.redirectHome);

//BUY
finrouter.get('/:id/buy', finDataController.buy, finViewController.redirectShow);

// EDIT
finrouter.get('/:id/edit', finDataController.show, finViewController.edit);

// SHOW
finrouter.get('/:id', finDataController.show, finViewController.show);

module.exports = finrouter;
