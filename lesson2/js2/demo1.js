var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);

function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
}
var a = [1,2,3];
foo(a);
console.log(a);

function foo(x) {
    x.push(4);
    x.length = 0;
    x.push(5,6,7,8);
}
var a = [1,2,3];
foo(a);
console.log(a);

var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

var o = {x:1,y:2};
a>b;

var max = function (x,y) {
    return x>y?x:y;
};

{
    foo:max(2,3)
}