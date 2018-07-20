var http = require('http');
var server = http.createServer(function (req, res)
{    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("server is created);
}).listen(8080);
console.log("connection done");