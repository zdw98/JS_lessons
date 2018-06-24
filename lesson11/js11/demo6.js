var f = function (v) {
    return v + 1;
};
f(2);

var f = v => v + 1;
f(2);

var f = () => 5;
var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
var foo = function (num1, num2) {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};

var max = function (a, b) {
    return a > b ? a : b;
};

const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

function full({ first, last }) {
  return last + ' ' + first;
}
full({first:"Ming",last:"Li"});