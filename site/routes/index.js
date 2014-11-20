var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');  
});

/* GET events page. */
router.get('/events', function(req, res) {
  res.render('events');  
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');  
});

module.exports = router;