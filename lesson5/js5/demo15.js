var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));
console.log(Object.getOwnPropertyNames(o3));

console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("a"));

for(var k in o3){ 
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));

var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);
console.log(Object.keys(o5));
console.log(Object.getOwnPropertyNames(o5));