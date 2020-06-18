var toss = Math.random();
var tossForTwo = (toss * 2) + 1;
var final = Math.floor(tossForTwo).toString();
if (final === '1') {
	alert('Its Heads');
}
else {
	alert('Its Tails');
}