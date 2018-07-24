var express = require('express');

var app = express();
var Router = express.Router();




app.get('/', function (req, res) {
    
    res.send('this is homepage');
});



app.get('/contact', function (req, res) {
   res.send('this is contact page');
    

});


app.get('/profile/:id', function (req, res) {
    var data = { age: 29, job: 'ninja', hobbies: ['sleeping'] };

    res.send("requested id is" + req.params.id);

});

app.listen(8080)
console.log("done");