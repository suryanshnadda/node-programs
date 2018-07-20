var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.url === '/home' || req.url == '/') {

        res.writeHead(200, { 'Content-Head': 'text/html' });
        var myrea = fs.createReadStream('./demo.html', 'utf8');
        myrea.pipe(res);
    }
    else if (req.url === '/contact') {

        res.writeHead(200, { 'Content-Head': 'text/html' });
        var myrea = fs.createReadStream('./democ.html', 'utf8');
        myrea.pipe(res);




    }

    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        var myrea = fs.createReadStream('./404.html', 'utf8').pipe(res);
        console.log("don");
    }

}).listen(8080);
console.log("connection done");
console.log("don");