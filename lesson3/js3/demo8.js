console.log(a);
var a = 1;
console.log(a);

var a;
console.log(a);
a = 1;
console.log(a);

console.log(a,b);
var b = 23;
console.log(a,b);
var a = b;
console.log(a,b);

console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);

foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();

foo();
var foo = function(){
    console.log("foo");
};

console.log(foo);
var foo = function(){
    console.log("foo");
};
foo();

AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();