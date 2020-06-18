var now = new Date();
var before = new Date();
var nowHours = before.getHours() - 1;
var final = before.setHours(nowHours);
alert(now);
alert('1 hour ago ' + nowHours);