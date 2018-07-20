// it is sync so code after this function is blocked untill the process is done we will try asyn method also
// async is non blocking in nature
var fs = require('fs');
var data = "dsds";
    fs.writeFile('demo1.txt', data);


// to read from one file and write to other
function rewr() {

    fs.readFile('demo.txt', 'utf8', function (err, data) {
        fs.writeFile('demo3', data);

    });

}
rewr();