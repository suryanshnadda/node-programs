// it is sync so code after this function is blocked untill the process is done we will try asyn method also
// async is non blocking in nature
var fs = require('fs');
fs.readFile('demo.txt', 'utf8', function (err, data) {
    console.log(data);

});

console.log('test, this will be executed because that one is heavy');