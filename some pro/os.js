// os provides some  basic operating system related utility functions
var os = require('os');
console.log(os.uptime());
console.log("user home directory" + os.homedir());
console.log("platform user using "+ os.platform);

