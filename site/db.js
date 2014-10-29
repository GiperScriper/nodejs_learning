var db = require('mongoose');
db.connect('mongodb://localhost/site');

module.exports = db;