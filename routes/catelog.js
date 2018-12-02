var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for list of all Book.
router.get('/books', book_controller.book_list);

module.exports = router;