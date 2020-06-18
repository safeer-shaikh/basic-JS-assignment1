var d = new Date();
var mili = d.getTime();
var mins = d.getTime()/3600;
alert('Current Date: ' + d);
alert('Elapsed milliseconds sice January 1, 1970: ' + mili);
alert('Elapsed minutes since January 1, 1970: ' + mins);