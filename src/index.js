module.exports = function reverse(n) {
    const reverseArr = n.toString().split("").reverse();
    return parseInt(reverseArr.join(""));
};
