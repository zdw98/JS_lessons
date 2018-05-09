var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);

var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);

arr3.sort(function (a,b) {return a-b;});

var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);

var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);

var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);

var arr7 = [3,4,5];
var joinReturn = arr7.join("--");
console.log(joinReturn,arr7);
console.log(typeof joinReturn);
console.log([3,,,,,,5].join("*"));

var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));
console.log(arr8.indexOf(5,3));
console.log(arr8.indexOf(5,5));
console.log(arr8.lastIndexOf(5));
console.log(arr8.lastIndexOf(5,3));
console.log(arr8.lastIndexOf(5,5));