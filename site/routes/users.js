var express = require('express');
var router = express.Router();
var User = require('../models/user').User;


/* GET users listing. */
router.get('/', function (req, res) {
    User.find({}, function (err, data) {
        if (err) throw err;
        res.render('users', { users: data });
    });
});


/* GET get user. */
router.get('/:id', function (req, res) {
    
    User.findById(req.params.id, function (err, data) {
        if (err) throw err;
        res.json(data);
    });
});


/* POST create user */
router.post('/', function (req, res) {	
    if (req.body.name && req.body.password) {
        var user = new User(req.body);    
    	user.save(function (err) {
    		if (err) throw error;
    		res.json( { message: "Added new user." } );
    	});
    } else {
        res.json( { message: 'Not enough data to save new user.' } );
    }
});


/* PUT update user */
router.put('/:id', function (req, res) {
    // User.findByIdAndUpdate(req.params.id, req.body, function (err) {
    //     if (err) throw err;
    //     res.json({ message: 'User updated' });
    // });
    User.findById(req.params.id, function (err, user) {        
        if (req.body.name) user.name = req.body.name;
        if (req.body.password) user.password = req.body.password;        
        
        user.save(function (err) {
            if (err) throw error;
            res.json( { message: "User updated" } );
        });
   });
});


/* DELETE user */
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;
        //res.redirect('/');
        res.json({ message: 'User was deleted' });
    });
});




/* Test list */
router.get('/test', function (req, res) {
    res.json({message: "from /users/test"});
});


module.exports = router;