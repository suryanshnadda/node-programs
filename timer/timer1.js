// this function will call the function after fix time intervals
var man = setInterval(myTimer, 1000);

var a = 10;

function myTimer() {
    console.log(a);
    a++;
    if (a > 20) {
        clearInterval(man);
    }
}