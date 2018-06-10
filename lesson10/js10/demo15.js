var [(a)] = [1];
var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};
var { o: ({ p: p }) } = { o: { p: 2 } };

function f([(z)]) { return z; }

({ p: a }) = { p: 42 };
([a]) = [5];

[({ p: a }), { x: c }] = [{}, {}];

[(b)] = [3];
({ p: (d) } = {});
[(parseInt.prop)] = [3];