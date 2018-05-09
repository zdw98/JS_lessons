var a = ["hello"];
a[1] = 3.14;
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];
console.log("删除a[2]后的数组a",a);
a[0] = "XX";
console.log(a[0]);

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);

var a = [];
a[-1.23] = true;
a["100"] = 0;
a[1.00] = "Hi";
console.log(a.length);
console.log(a);