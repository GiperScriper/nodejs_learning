var express = require('express');
var router = express.Router();
var User = require('../schema/user').User;

/* GET users listing. */
router.get('/', function (req, res) {
    User.find({}, function (err, data) {
        if (err) throw err;
        res.render('users', { users: data });
    });
});


/* Test list */
router.get('/test', function (req, res) {
	res.json({message: "from /users/test"});
});


/* POST save user to database */
router.post('/', function (req, res) {	
	var user = new User({
		name: req.param('name'),
		password: req.param('password')
	});	

	user.save(function (err) {
		if (err) throw error;
		res.json({ message: "Added new user." });
	});
});

module.exports = router;
