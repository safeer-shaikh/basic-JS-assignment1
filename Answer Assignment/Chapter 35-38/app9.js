function palindrome(str){
	var reversed = str.split("").reverse().join("");
	if (reversed === str) {
		alert("Yes its a palindrome Word");
	}
	else{
		alert("No its not palindrome word")
	}
}

palindrome('madam');