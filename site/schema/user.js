var db = require('../db');
var crypto = require('crypto');

var schemaUser = new db.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

    hash: {
        type: String,
        require: true
    },

    salt: {
        type: String
    },

    created: {
        type: Date,
        default: Date.now()
    }

});

function createHash(password, salt) {
    return crypto.createHmac('sha1', salt).update(password).digest('hex');
}

var salt = 'salt';
var pass = 'password2';
console.log(createHash(pass, salt));