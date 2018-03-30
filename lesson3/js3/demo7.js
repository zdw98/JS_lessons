function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(x){return x+1;});
add(2,-3,Math.abs);
add(2,3,Math.sqrt);

var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);

var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}

var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
});

var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r;

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);

clearTimeout(timeOutId);

var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);

document.addEventListener("click", function(){
    console.log("click callback");
});

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
console.log(obj.fun3()());
console.log(obj.fun4());