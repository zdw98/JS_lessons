(function () {
    var str_a = "Hello Word";
    function fn_a(arg) {
        console.log(arg);
        arg = "Hai";
        console.log(str_a,arg);
    };
    fn_a(str_a);
    console.log(str_a);

    var obj_a = {value:1};
    function fn_a(arg) {
        arg.value = 3;
    };
    fn_a(obj_a);
    console.log(obj_a);

    function fn_b(arg) {
        arg = {value:2};
    };
    fn_b(obj_a);
    console.log(obj_a);
}());