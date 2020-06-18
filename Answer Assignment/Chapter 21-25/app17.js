var text = 'the quick brown fox jumps over the lazy dog'
var check = 0;
for (var i = 0; i < text.length; i++) {
	if (text.slice(i, i + 3) === 'the') {
		check++;		
	}
}
alert('There are ' + check + ' occurance of word "the"');
