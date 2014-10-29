var express = require('express');
var router = express.Router();
var User = require('../schema/user').User;

/* GET users listing. */
router.get('/', function (req, res) {
    User.find({}, function (err, data) {
        if (err) throw err;
        res.json(data);
    });  
});

module.exports = router;
