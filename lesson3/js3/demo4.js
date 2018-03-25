var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;
    console.trace("a:",a," x:",x);
}

console.trace("a:",a);
foo(a);
console.trace("a:",a);

var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);
}

console.trace("obj.x :",obj.x);
fee(obj);
console.trace("obj.x :",obj.x);
document.onclick = function () {
    alert("click");
};