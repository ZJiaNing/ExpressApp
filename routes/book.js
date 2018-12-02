var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is Book list');
});

module.exports = router;