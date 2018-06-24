var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i);
}
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2);
console.log(Symbol.for("bar") === Symbol.for("bar"));
console.log(Symbol("bar") === Symbol("bar"));
console.log(Symbol.for("bar") === Symbol("bar"));
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1));
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2));
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);