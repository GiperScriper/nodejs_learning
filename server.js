var http = require('http');

var server = new http.Server(); // EventEmitter

server.listen(1337, 'localhost');

var counter = 0;

server.on('request', function(req, res){
    res.end('hello, world! ' + ++counter);
});