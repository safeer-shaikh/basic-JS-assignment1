var name = prompt('Enter');
for (var i = 0; i < name.length; i++) {
	if (name.slice(i, i + 1) === '@') {
		alert('Enter Valid Please!')
		break;
	}
	if (name.slice(i, i + 1) === '!') {
		alert('Enter Valid Please!')
		break;
	}
	if (name.slice(i, i + 1) === '.') {
		alert('Enter Valid Please!')
		break;
	}
	if (name.slice(i, i + 1) === ',') {
		alert('Enter Valid Please!')
		break;
	}
}