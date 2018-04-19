var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();

var objStr = new Object("xxx");
console.log(typeof objStr);
console.log(objStr instanceof String);

var objNum = new Object(23);
console.log(typeof objNum);
console.log(objNum instanceof Number);

var objBoolean = new Object(true);
console.log(typeof objBoolean);
console.log(objBoolean instanceof Boolean);