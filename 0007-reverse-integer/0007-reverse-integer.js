
var reverse = function (x) {
    let lefted = Math.abs(x)
    let reversed = 0
    while (lefted > 0) {
        reversed = reversed * 10 + lefted % 10
        lefted = Math.floor(lefted / 10)
    }
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    if (x < 0) {
        return reversed = - reversed
    }
    return reversed


};
