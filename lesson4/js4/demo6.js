(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){
    console.log("the min is",x<y?x:y);
})(2,3);

(function() {
    console.log("111");
})();
(function () {
    console.log("222");
})()

var i = function(){
    return 10;
}(); 

true && function(a,b){
    return a>b?a:b;
}(5,9);

!function(x,y){
    return x==y?true:false;
}("5",5);