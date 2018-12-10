function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	if (x > y) {
		return x - y;
	} else {
		return y - x;
	}
}

function sum (nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total = total + nums[i];
	}
	return total;
}

function multiply (nums) {
	let total = 1;
	for (let i = 0; i < nums.length; i++) {
		total = total * nums[i];
	}
	return total;
}

function power(num, power) {
	let total = num;
	for (let i = power; i > 1; i--) {
		total *= num;
	}
	return total;
}

function factorial(num) {

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}