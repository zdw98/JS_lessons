console.log("A" > "a");
console.log("B".localeCompare("A"));
console.log("A".localeCompare("A"));
console.log("A".localeCompare("B"));

var a = "abc";
var b = "def";
var c = a+b;

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var str6 = "abcdef".split("c");
var str7 = "abcdef".split("c",1);
var str8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str13,str14);

var str15 = str13.substring(2,5);
console.log(str13,str15);

var str16 = "aaa".concat("bbb");
var str17 = "    abc def     \r\n  ".trim();
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");