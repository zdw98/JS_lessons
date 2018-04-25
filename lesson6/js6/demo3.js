var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
console.log("z" in obj);
console.log(obj.hasOwnProperty("z"));
obj.z = 5;
console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);
obj.z = 8;
console.log(obj.z);
delete obj.z;
console.log(obj.z);
delete obj.z;
console.log(obj.z);
delete  obj.__proto__.z;
console.log(obj.z);