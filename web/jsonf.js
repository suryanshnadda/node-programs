var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    //var myrea = fs.createReadStream('./demo.html', 'utf8');



var myovj =
    {

        name: 'suryansh',
        job: ' software developer'
    };

    res.end(JSON.stringify(myovj));
    
}).listen(8080);
console.log("connection done");
