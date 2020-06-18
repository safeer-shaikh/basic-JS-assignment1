var message = 'Ali and Sami are best friends. They play cricket and football together.';
for (var i = 0; i < message.length; i++) {
	if (message.slice(i, i + 3) === 'and') {
		message = message.slice(0, i) + '&' + message.slice(i + 3);
	}
}
alert(message);