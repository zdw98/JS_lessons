var name = "Jack";
function echo() {
    console.log(name);
}
echo();

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();