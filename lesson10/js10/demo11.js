const [a, b, c, d, e] = 'hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let {length : len} = 'hello';
console.log(len);

let {toString: s1} = 123;
console.log(s1);
let {toString: s2} = true;
console.log(s2);