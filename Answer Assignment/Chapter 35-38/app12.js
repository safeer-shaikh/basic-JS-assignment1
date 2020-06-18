function counter(){
	var txt = 'Something from javascript book';
	var count = 0;
	for (var i = 0; i < txt.length; i++) {
		if (txt.charAt(i) === 'o') {
			count++;
		};
	}
alert('Number of "o" in txt is: ' + count);
}
counter();