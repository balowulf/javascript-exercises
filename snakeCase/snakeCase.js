const snakeCase = function(str) {
    // preprocess the string
    // // trim everything outside the first and last words
    // // set everything toLowerCase
    // replace the following with underscores:
    // // anything that is between two words
    // // camelCases
    let trim = /\W+$/g;
    let between = /[^\w+.\w+]/g;
    str = str.replace(trim, '').toLowerCase();
    str = str.replace(between, '_');
    console.log(str);

}

module.exports = snakeCase
