var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);
[...new Set([1,2,3,3])];
var set = new Set();
set.add({});
console.log(set.size);
set.add({});
console.log(set.size);
s.add(1).add(2).add(2);
s.size
s.has(1);
s.has(2);
s.has(3);
s.delete(2);
s.has(2);
var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);
if (properties.has('width')&&properties.has('height')) {
    console.log("do something!");
}
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
console.log([...(new Set([1, 2, 3, 4, 5]))]);
console.log(...(new Set([1, 2, 3, 4, 5])));
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());
console.log(typeof set.values());
console.log(typeof set.entries());

for (var item of set.keys()) {
    console.log(item);
}
for (var item of set.values()) {
    console.log(item);
}
for (var item of set.entries()) {
    console.log(item);
}
for (var [key,value] of set.entries()) {
    console.log(key,value);
}
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );
var arr = [3, 5, 2, 2, 5, 5];
var unique = [...new Set(arr)];
var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));