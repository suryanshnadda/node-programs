// it is sync so code after this function is blocked untill the process is done we will try asyn method also
//syn is blocking in nature
var fs = require('fs');
var data = "hi this is nody suryansh nadda";
fs.writeFileSync('demo.txt', data);


