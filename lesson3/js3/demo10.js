if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);
    var j = 10;
    console.log("j:",j);
}
foo();

console.log("i:",i);
console.log("j:",j);

var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);
    j = 10;
    console.log("j:",j);
}
foo();

console.log("i:",i);
console.log("j:",j);