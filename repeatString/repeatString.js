const repeatString = function(str, times) {
    let newStr = '';
    if (times < 0) {
        return 'ERROR';
    } else {
        for (i = times; i > 0; i--) {
            newStr += str;
        }
        return newStr; 
    }
}

module.exports = repeatString