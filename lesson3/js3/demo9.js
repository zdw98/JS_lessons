var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();

var x = "outside f1";
var f1 = function () {
    console.log(x);
};
f1();
console.log(x);

var f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();
console.log(y);

if(true){
    var z = 23;
}
console.log(z);

if(true){
    (function () { 
        var z = 23;
    }());
}
console.log(z);