// normal functions

function don()
{
console.log('this is regular function');
}
don();


// style 1
var callFun =function(){
console.log('this is other style function');
};
callFun();


//passing function to function
function callfunction(fun){
fun();
}
callfunction(callFun);