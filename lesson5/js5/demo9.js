var obj = {
    x:1,
    y:2
};

obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

var obj = {
    x:1,
    y:2
};

obj.z = 3;

Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}