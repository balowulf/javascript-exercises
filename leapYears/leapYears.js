const leapYears = function(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

module.exports = leapYears

// here is a leap year every year whose number is perfectly divisible by four - except for years which are both divisible by 100 and not divisible by 400
// true: year % 4 === 0
// false: year / 100 % 1 == 0
// flase