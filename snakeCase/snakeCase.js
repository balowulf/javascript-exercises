const snakeCase = function(str) {
    let trailing = /_{2,}$/gmi;
    let multiples = /_{2,}/gmi;
    str = str.split(/[^\b\w+\b]/gmi).join('_').toLowerCase();
    str = str.replace(trailing, '');
    str = str.replace(multiples, '_');
    return str;
}

module.exports = snakeCase
