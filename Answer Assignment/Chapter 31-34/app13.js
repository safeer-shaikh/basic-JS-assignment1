var name = prompt('Enter your Name: ', '');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'Novermber', 'December']
var d = new Date();
var month = months[d.getMonth()]
var units = 410
var charges = 16
var netAmount = units * charges;
var lateAmount = netAmount + 350;
document.write('<h1>K-Electric Bill</h1>')
document.write('Name: ' + name + '<br>');
document.write('Month: ' + month + '<br>');
document.write('Number of Units: ' + units + '<br>');
document.write('Charges per Unit: ' + charges + '<br><br>');
document.write('Net Amount payable (within Due Date): ' + netAmount + '<br>');
document.write('Late Amount Surcharges: ' + '350 <br>');
document.write('Gross Amount payable (After Due Date): ' + lateAmount);