const removeFromArray = function(array, ...item) {
    for (const each of item) {
        if (!(array.includes(each))) {
            continue
        };
        array.splice(array.indexOf(each), 1);
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
