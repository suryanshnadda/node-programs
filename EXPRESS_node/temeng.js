var express= require('express');
var app = express();




app.get('/', function (req, res) {
	
res.sendFile(__dirname + '/one.html');
});


app.listen(8080);

console.log("done");
