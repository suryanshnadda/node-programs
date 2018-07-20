var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('1', function(mess)
{
console.log('yes you are in');
});

myEmitter.on('0', function(mess)
{
console.log('dont come here again');
});




function don() {

    var a = 45;
    if (a < 9) {
        myEmitter.emit('1', 'the event emitted');
    }
    else {
        myEmitter.emit('0', 'the event emitted');
    }

}

don();