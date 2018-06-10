var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);

var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);

let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);

let { first, last } = obj1;
console.log(first,last);

var { foo5: foo5, bar5: bar5 } = { foo5: "aaa", bar5: "bbb" };

var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x);
console.log(y);

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line 

let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);
console.log(arr);

var {x2 = 3} = {};
console.log(x2);

var {x3, y3 = 5} = {x3: 1};
console.log(x3);
console.log(y3);

var {x4:y4 = 3} = {};
console.log(y4);

var {x5:y5 = 3} = {x5: 5};
console.log(y5);
var { message: msg = 'Something went wrong' } = {};
console.log(msg);