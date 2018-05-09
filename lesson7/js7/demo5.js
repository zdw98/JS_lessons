const bar = ["a", "b", "c"];
Array.from(bar);
Array.from('foo');
Array.of(7);
Array.of(1, 2, 3);
Array(7);
Array(1, 2, 3);
var arr1 = [1,3,4];
console.log(Array.isArray(arr1));
function foo(){
    console.log(Array.isArray(arguments));
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);

var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();
console.log(shiftElement,arr2);

var newLength = arr2.unshift(1,2);
console.log(newLength,arr2);

var popElement = arr2.pop();
console.log(popElement,arr2);

var newLength = arr2.push(77,88);
console.log(newLength,arr2);

var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");
console.log(spliceElements,arr5);