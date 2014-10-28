var express = require('express');
var router = express.Router();
var User = require('../schema/user').User;

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find({}, function (err, data) {
        if (err) throw err;
        res.render('users', { users: data });
    });
    next();
});


/* POST save user to database */
router.post('/', function (req, res) {
	var user = new User({
		name: req.param.name,
		password: req.param.password
	});

	console.log('POST request');

	user.save(function (err) {
		if (err) throw error;
		res.json({ message: "Added new user." });
	});
});

module.exports = router;
