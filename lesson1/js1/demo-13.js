Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));

console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));