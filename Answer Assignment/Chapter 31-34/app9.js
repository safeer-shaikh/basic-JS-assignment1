var then = new Date(2015, 0, 1);
var now = then.getMilliseconds();
var then1 = new Date();
var now1 = then1.getMilliseconds();
var value = (now1 - now) * 60;
alert('On reference Date: ' + then);
alert(value + ' seconds has passed since beginning of 2015')