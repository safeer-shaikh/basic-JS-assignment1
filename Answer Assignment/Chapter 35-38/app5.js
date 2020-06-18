function factorial(){
	var num = 5;
	var res = 1;
	for (var i = num; i >= 1; i--) {
		res = res * i;
	}
	alert('factorial of 5 is: ' + res)
}

factorial();