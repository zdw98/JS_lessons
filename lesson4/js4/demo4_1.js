console.log("小明回家");
var xx = "小明家中（书桌-书包-铅笔盒-...）";
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = "文具商店中（文具店老板-出售的文具...）";
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = "银行中（银行职员-柜员机...）";
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();
console.log("在家-继续做作业...全局上下文");