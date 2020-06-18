var store = Math.random();
var newStore = (store * 10) + 1;
var newStore = Math.floor(newStore).toString();
var check = prompt('Enter any number between 1 and 10');
if (newStore === check) {
	alert('Congratulations! :)');
}
else {
	alert('Try Again!...The saved number was: ' + newStore);
}