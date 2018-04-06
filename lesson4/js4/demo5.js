console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");
    var y = "文具店A环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");
    }
    goToBank_C();
    console.log("goToStore_A 上下文-end");
}

function goToStore_B(){
    console.log("goToStore_B 上下文-start");
    var y = "文具店B环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");
    }
    goToBank_C();
    console.log("goToStore_B 上下文-end");
}

goToStore_A();
console.log("全局上下文-end");