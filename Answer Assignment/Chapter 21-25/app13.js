var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var check = prompt('Enter Item: ');
var check = check.toLowerCase();
for (var i = 0; i < 5; i++) {
	if (check === items[i]) {
		alert('Yes! it is available');
		break;
	}
	else {
		alert('Sorry! we dont have it');
		break;
	}
}