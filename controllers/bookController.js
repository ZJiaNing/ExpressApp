
var Book = require('../models/book');
var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all books.
exports.book_list = function(req, res, next) {

    Book.find()
        .exec(function (err, list_books) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('book_list', { title: 'Book List', book_list:  list_books});
        });
};