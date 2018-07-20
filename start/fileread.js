var fs = require('fs');

var data = fs.readFileSync('demo.txt','utf8');
console.log(data);
console.log("this is how we read files");