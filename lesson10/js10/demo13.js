var [x,y] = ["a","b"];
[x, y] = [y, x];
console.log(x,y);

function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();

function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();

function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);

function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});