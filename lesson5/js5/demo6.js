var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);

console.log(obj.toString);

for(var k in obj){
    console.log(k,obj[k]);
}