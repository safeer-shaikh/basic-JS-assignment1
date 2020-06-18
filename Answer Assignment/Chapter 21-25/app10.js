var language = prompt('Enter language: ');
var check = language.slice(0, 1).toUpperCase();
var also = language.slice(1, language.length);
alert(check + also);