function add([x, y]){
    return x + y;
}
add([1, 2]);

[[1, 2], [3, 4]].map(function([a, b]){return a + b;});

function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4}));
console.log(move1({x: 3}));
console.log(move1({}));
console.log(move1());

function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8}));
console.log(move2({x: 3}));
console.log(move2({}));
console.log(move2());

[1, undefined, 3].map(function(x = 'yes') {return x;});