function test() {
    console.log(arguments);
}
test("a","b","c");

function f(...y){
    console.log(y);
}
f("a","b","c");

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3)
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");
f("a");
f();

function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);
f("a");
f();

function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);