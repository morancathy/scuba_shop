const express = require('express');
const regulatorrouter = express.Router();
const regulatorViewController = require('./regulatorViewController');
const regulatorDataController = require('./regulatorDataController');

const methodOverride = require('method-override');
regulatorrouter.use(methodOverride('_method'));

// INDEX
regulatorrouter.get('/', regulatorDataController.index, regulatorViewController.index);

// NEW
regulatorrouter.get('/new', regulatorViewController.new);

// DELETE
regulatorrouter.delete('/:id', regulatorDataController.destroy, regulatorViewController.redirectHome);

// UPDATE
regulatorrouter.put('/:id', regulatorDataController.update, regulatorViewController.redirectShow);

// CREATE
regulatorrouter.post('/', regulatorDataController.create, regulatorViewController.redirectHome);

//BUY
regulatorrouter.get('/:id/buy', regulatorDataController.buy, regulatorViewController.redirectShow);

// EDIT
regulatorrouter.get('/:id/edit', regulatorDataController.show, regulatorViewController.edit);

// SHOW
regulatorrouter.get('/:id', regulatorDataController.show, regulatorViewController.show);

module.exports = regulatorrouter;
