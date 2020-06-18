var funWeek = ['sun' , 'mon', 'tue', 'wed', 'thu', 'fri', 'sat',];
var d = new Date();
var day = d.getDay();
var today = funWeek[day];
if (today === funWeek[0	] || today === funWeek[6]) {
	alert('Its a Fun day yay!')
}
else {
	alert('Its a working day!')
}