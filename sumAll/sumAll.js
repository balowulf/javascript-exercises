const sumAll = function(a, b) {
    // (1, 4)
    // 1, 2, 3, 4
    // 1 + 2 + 3 + 4 = 10
    // 4-1 = 3

    // 1 + 4 = 5
    // 4 - 1 = 3
    if (a < 0 || b < 0 || (typeof a != 'number' || typeof b != 'number')) {
        return 'ERROR';
    } else {
        let sumArr = [a, b];
        if (b > a) {
            min = a;
            max = b;
        } else if (a > b) {
            max = a;
            min = b;
        }
        let sumDiff = max - min;
        while (sumDiff > min) {
            sumArr.push(sumDiff);
            sumDiff--;
        }
        return sumArr.reduce((a, b) => a + b, 0);
    }
    
}

module.exports = sumAll