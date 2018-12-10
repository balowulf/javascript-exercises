const palindromes = function(string) {
    let regex = /[^\w]/g;
    newString = string.replace(regex, '').toLowerCase();
    reverseString = newString.split('').reverse().join('');
    if (reverseString === newString) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
