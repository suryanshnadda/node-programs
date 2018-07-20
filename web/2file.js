var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var aa=fs.readFile('demo.txt', 'utf8', function (err, data) {
      

    });

    
    res.end("connection done");
}).listen(8080);
console.log("connection done");