var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
newObj.age = 23;
console.log(new.__proto__ ===obj);
console.log(newObj.__proto__.__proto__);
console.log(newObj.__proto__.__proto__.__proto__);