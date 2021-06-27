const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

// INDEX
router.get('/', dataController.index, viewController.index);

// NEW
router.get('/new', viewController.new);

// DELETE


// UPDATE


// CREATE
router.post('/', dataController.create, viewController.redirectHome);

// EDIT


// SHOW
router.get('/:id', dataController.show, viewController.show);


module.exports = router;
