const removeFromArray = function(array, vals) {
    let args = Array.prototype.slice.call(arguments, 1);
    let i = args.length;
    while (i > 0) {
        array = array.filter(function(item) {
            return item != vals;
        });
        args.splice(0, 1);
        i--;
    }
    return array;
}

module.exports = removeFromArray


/**
 *  Removing multile items
 * 
 *  let forDeletion = [2, 3, 5]

    let arr = [1, 2, 3, 4, 5, 3]

    arr = arr.filter(item => !forDeletion.includes(item))
    

    console.log(arr)
    // [ 1, 4 ]
 */