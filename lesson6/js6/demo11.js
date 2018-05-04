function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor);
console.log(Father.prototype.constructor);
Father.prototype.constructor = Father;
console.log(Father.prototype.constructor);
var one = new Father(25);

function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
a.getId();

function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__ === p.constructor.prototype);
console.log(Object.prototype === p.constructor.prototype);
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);