var express = require('express');
var router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {

   res.render('index', { title: 'Express' });
});

module.exports = router;
