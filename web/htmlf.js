var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myrea = fs.createReadStream('./demo.html', 'utf8');
    console.log(req.url);
    var don = "suryansh sharma";
    myrea.pipe(res);
}).listen(8080);
console.log("connection done");