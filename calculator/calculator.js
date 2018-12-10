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

function sum () {
	
}

function multiply (nums) {
	let total;
	for (let i = nums[0]; i < nums.length;) {
		total = i * nums[1];
		nums.splice(i, 1);
	}
	return total;
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}