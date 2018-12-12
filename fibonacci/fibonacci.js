const fibonacci = (n) => {
    if (n < 0) return "OOPS";
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

module.exports = fibonacci