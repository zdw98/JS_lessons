{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);

if(true){
    var a = 20;
}
console.log(a);

if(false){
    var b = 30;
}
console.log(b);