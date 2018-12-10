const snakeCase = function(str) {
    let trim = /[^A-Z]/gmi;
    let trailing = /_{2,}$/gmi;
    let multiples = /_{2,}/gmi;
    str = str.replace(trim, '_').toLowerCase();
    str = str.replace(trailing, '');
    str = str.replace(multiples, '_');
    return str;
}

module.exports = snakeCase
