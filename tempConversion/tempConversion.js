const ftoc = function(temp) {
    rawC = (temp - 32) * 5/9;
    roundedC = Math.round(rawC * 10) / 10;
    return roundedC;
}

const ctof = function(temp) {
    rawF = (temp * 9/5) + 32;
    roundedF = Math.round(rawF * 10) / 10;
    return roundedF;
}

module.exports = {
  ftoc,
  ctof
}