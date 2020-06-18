var age = prompt('Enter your age: ', '28');
var ageOk = Number(age);
var miliSecAge = (ageOk * 1000 * 60 * 60 * 24 * 30 * 12)
var dobmili = 1592148909130 - miliSecAge;
var now = new Date(dobmili);
var year = now.getFullYear();
alert('Your age is: ' + age);
alert('Your Birth Year is: ' + year);