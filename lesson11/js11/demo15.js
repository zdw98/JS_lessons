var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content');
m.get(o);
m.has(o);
m.delete(o);
m.has(o);
var o = {};
var map = new Map([
    ['name', '张三'],
    [o, 'Author']
]);
map.size;
map.has('name');
map.get('name');
map.has(o);
map.get(o);

var items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map();
items.forEach(([key, value]) => map.set(key, value));

let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1);

new Map().get('asfddfsasadf');

var map = new Map();
map.set(['a'], 555);
map.get(['a']);

var map = new Map();
map.set('a', 555);
map.get('a');

var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1);
map.get(k2);

let map = new Map();
map.set(NaN, 123);
map.get(NaN);
map.set(-0, 123);
map.get(+0);

let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size

var m = new Map();
m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");

let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

var m = new Map();
var hello = function() {console.log("hello");};
m.set(hello, "Hello ES6!");
m.get(hello);

var m = new Map();
m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");
m.has("edition");
m.has("years");
m.has(262);
m.has(undefined);

var m = new Map();
m.set(undefined, "nah");
m.has(undefined);
m.delete(undefined);
m.has(undefined);

let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size
map.clear();
map.size

let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);
console.log(typeof map.keys());
for (let key of map.keys()) {
    console.log(key);
}

console.log(typeof map.values());
for (let value of map.values()) {
    console.log(value);
}

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}

for (let [key, value] of map.entries()) {
    console.log(key, value);
}

for (let [key, value] of map) {
    console.log(key, value);
}

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log([...map.keys()]);

console.log([...map.values()]);

console.log([...map.entries()]);

console.log([...map]);

let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);

let map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
);

map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap]

new Map([[true, 7], [{foo: 3}, ['abc']]]);

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
objToStrMap({yes: true, no: false});