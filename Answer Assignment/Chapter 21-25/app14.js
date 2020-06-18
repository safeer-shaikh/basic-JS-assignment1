var pass = prompt('Enter Password: ', '');
if (pass.charAt(0) === '0' || pass.charAt(0) === '1' || pass.charAt(0) === '2' || pass.charAt(0) === '3' ||pass.charAt(0) === '4' || pass.charAt(0) === '5' || pass.charAt(0) === '6' || pass.charAt(0) === '7' || pass.charAt(0) === '8' || pass.charAt(0) === '9') {
	alert('Password cannot begin with a number!')
	if (pass.length < 6) {
		alert('Password must be 6 characters long!')
	}
}
else {
	alert('Your Password meets all the requirement');
}