const express = require('express');
const maskrouter = express.Router();
const maskViewController = require('./maskViewController');
const maskDataController = require('./maskDataController');

// INDEX
maskrouter.get('/', maskDataController.index, maskViewController.index);

// NEW
maskrouter.get('/new', maskViewController.new);

// DELETE
maskrouter.delete('/:id', maskDataController.destroy, maskViewController.redirectHome);

// UPDATE
maskrouter.put('/:id', maskDataController.update, maskViewController.redirectShow);

// CREATE
maskrouter.post('/', maskDataController.create, maskViewController.redirectHome);

// EDIT
maskrouter.get('/:id/edit', maskDataController.show, maskViewController.edit);

// SHOW
maskrouter.get('/:id', maskDataController.show, maskViewController.show);

module.exports = maskrouter;
