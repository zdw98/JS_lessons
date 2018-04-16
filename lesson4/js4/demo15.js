function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();

function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 500);

var db = (function() {
    var data = {};
    return function(key, val) {
        if (val === undefined) { return data[key] } 
        else { return data[key] = val } 
    };
})();

db('x');
db('x', 1);
db('x');

var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());

var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()());

(function () {
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();

function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
    }
    return result;
}
console.log(f()[1]());