var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);

var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);