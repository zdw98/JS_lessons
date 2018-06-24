function foo(x=5){
    let x = 1;
    const x = 2;
    var x = 3;
}
foo();

function f(x = 1,y) {
    return [x,y];
}
f();
f(2);

function f(x,y = 1) {
    return [x,y];
}
f();
f(2);