var text = 'hyderabad';
for (var i = 0; i < text.length; i++) {
	if (text.slice(i, i + 5) === "hyder") {
		text = text.slice(0, i) + "islam" + text.slice(i + 5);
	}
}
alert(text);