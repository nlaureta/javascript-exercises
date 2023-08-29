const removeFromArray = function (array, ...argument) {
    for (let i = 0; i < argument.length; i++) {
        let index = array.indexOf(argument[i]);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
