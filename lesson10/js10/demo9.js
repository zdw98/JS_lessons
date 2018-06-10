var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);

let [x, , y] = [1, 2, 3];
console.log(x,y);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);

let [d, e, ...f] = ['a'];
console.log(d,e,f);

var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);

let [x2, y2] = [1, 2, 3];
console.log(x2, y2);

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);

var [foo3 = true] = [];
[x3, y3 = 'b'] = ['a'];
[x4, y4 = 'b'] = ['a',undefined];

var [x5 = 1] = [undefined];
var [x6 = 1] = [null];

function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);

let [m1 = 1, n1 = m1] = [];
let [m2 = 1, n2 = m2] = [2];
let [m3 = 1, n3 = m3] = [1, 2];
console.log(m1,n1,m2,n2,m3,n3);

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);

let [x8, y8, z8] = new Set(["a", "b", "c"]);

function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);
