var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('fuck you');
}).listen(8080,'127.0.0.1');
