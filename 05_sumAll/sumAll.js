const sumAll = function (start, end) {
    let sum = 0;
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) return "ERROR";
    if (start < end) {
        while (start <= end) {
            sum += start;
            ++start;
        }
    } else {
        while (end <= start) {
            sum += end;
            ++end;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
