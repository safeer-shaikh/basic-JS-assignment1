function Calculator(){
	var num1 = prompt('ENter first number')
	var operator = prompt('Enter operator')
	var num2 = prompt('Enter second number')
	var num11 = Number(num1)
	var num22 = Number(num2)
	if (operator === "+") {
		alert(num11 + num22)
	};	
	if (operator === "-") {
		alert(num11 - num22);
	};
	if (operator === "*"){
		alert(num11 * num22);
	};
	if (operator === "/"){
		alert(num11 / num22);
	};
}

Calculator();