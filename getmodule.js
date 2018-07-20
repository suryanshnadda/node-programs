// This is the module getting function. it gets its module from moduleexp.js

var stuff = require('./module1.js');// | ./ | is used to search in present directory.


// look here at the counter part, it is actually taking the arguments. and doing everything.
// We need to intialise the 'counter variable first.'
console.log(stuff.sub(1,6));
