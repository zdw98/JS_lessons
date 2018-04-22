var obj = {_x:1};

Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});

var book={};

Object.defineProperties(book,{
        _year:{
            value:2004,
            writable:true 
        },
        edition:{
            value:1,
            writable:true
        },
        year:{
            get:function(){
                return this._year;
            },
            set:function(newValue){
                if (newValue>2004) {
                    this._year=newValue;
                    this.edition+=newValue-2004;
                }
            }
        }
    });

book.year=2006;

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));