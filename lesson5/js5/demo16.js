var empty1 = {a:1};
console.log(Object.isExtensible(empty1));

empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,
        enumerable : true,
        writable : true
    }
});
console.log(Object.isExtensible(empty2));

(function () {
    var obj = {};
    var obj2 = Object.preventExtensions(obj);
    console.log(obj === obj2);
    var empty = {};
    console.log(Object.isExtensible(empty));
    empty.a = 1;
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));
    empty.b = 2;
    empty["c"] = 3;
    (function fail(){
        "use strict";
        empty.d = "4";
    })();
    Object.defineProperty(empty,"e",{value : 5});
    Object.defineProperty(empty,"a",{value : 2});
    console.log(empty.a);
})();

(function () {
    var empty = {};
    console.log(Object.isSealed(empty));
    Object.preventExtensions(empty);
    console.log(Object.isSealed(empty));
    var hasProp = {fee : "fie foe fum"};
    Object.preventExtensions(hasProp);
    console.log(Object.isSealed(hasProp));
    Object.defineProperty(hasProp,"fee",{configurable : false});
    console.log(Object.isSealed(hasProp));
})();

(function () {
    var obj = {
        prop:function(){},
        foo:"bar"
    };
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;
    var o = Object.seal(obj);
    console.log(o === obj);
    console.log(Object.isSealed(obj));
    obj.foo = "quux";
    obj.quaxxor = "the friendly duck";
    delete obj.foo;
    (function fail(){
        "use strict";
    })();
    Object.defineProperty(obj,"foo",{value : "eit"});
    console.log(obj.foo);
})();

(function () {
    console.log(Object.isFrozen({}));
    var vacuouslyFrozen = Object.preventExtensions({});
    console.log(Object.isFrozen(vacuouslyFrozen) === true);
    console.log(Object.isSealed(vacuouslyFrozen) === true);
    var oneProp = { p:42 };
    console.log(Object.isFrozen(oneProp));
    Object.preventExtensions( oneProp );
    console.log(Object.isFrozen(oneProp));
    delete oneProp.p;
    console.log(Object.isFrozen(oneProp));
    var nonWritable = { e : "plep" };
    Object.preventExtensions(nonWritable);
    Object.defineProperty(nonWritable,"e",{writable : false});
    console.log(Object.isFrozen(nonWritable));
    Object.defineProperty(nonWritable,"e",{configurable : false});
    console.log(Object.isFrozen(nonWritable));
    var accessor = {get food(){return "yum";}};
    Object.preventExtensions(accessor);
    console.log(Object.isFrozen(accessor));
    Object.defineProperty(accessor,"food",{configurable:false});
    console.log(Object.isFrozen(accessor));
    var frozen = {1:81};
    console.log(Object.isFrozen(frozen));
    Object.freeze(frozen);
    console.log(Object.isFrozen(frozen));
    console.log(Object.isSealed(frozen));
    console.log(Object.isExtensible(frozen));
})();

(function () {
    var obj = {
        prop:function(){},
        foo:"bar"
    };
    obj.foo = "baz";
    obj.lumpy = "woof";
    delete obj.prop;
    Object.freeze(obj);
    console.log(Object.isFrozen(obj));
    obj.foo = "quux";
    obj.quaxxor = "the friendly duck";
    (function () {
        "use strict";
    })();
})();

var str = "xxx";
console.log(Object.isFrozen(str));
(function () {
    obj = {
        internal :{}
    };
    Object.freeze(obj);
    obj.internal.a = "aValue";
    console.log(obj.internal.a);
    function deepFreeze(o){
        var prop,propKey;
        Object.freeze(o);
        for(propKey in o){
            prop = o[propKey];
            if(!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)){
                continue;
            }
            deepFreeze(prop);
        }
    }
    deepFreeze(obj);
    obj.internal.b = "bValue";
    console.log(obj.internal.b);
})();