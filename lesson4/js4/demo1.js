var a = 10,
    b = 20;
function fn(){
    var a = 100,
        c = 200;
    function bar(){
        var a = 500,
            b = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();