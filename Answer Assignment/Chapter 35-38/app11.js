function findLongestWord(str){
	var words = str.split(" ");
	var longest = "";
	for (var word of words) {
		if (word.length > longest.length) {
			longest = word;
		}
	}
	alert('Longest word is: ' + longest);
}

findLongestWord("Web Development Course");