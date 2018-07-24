var express = require('express');

var app = express();
var Router = express.Router();
var path = require('path');
var bodyparser = require('body-parser');
var app = express()

app.use(function (req, res, next) {
    console.log('reloaded');
    next()
})

app.get('/', function (req, res) {

    res.send('this is homepage');
});





app.listen(8080)
console.log("done");