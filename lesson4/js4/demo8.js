function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();

function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();