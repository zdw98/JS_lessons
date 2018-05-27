window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click--red");
        console.log("target:",e.target);
        console.log("this:",this);
        console.log(e.bubbles,e.cancelable,e.cancelBubble);
    },false);

    div2.addEventListener("click",function (e) {
        console.log("div2 click--yellow");
    },true);

    div3.addEventListener("click",function (e) {
        console.log("div3 click--blue");
    },false);
    document.getElementById("aId").addEventListener("click",function (e) {
        e.preventDefault();
        console.log("a click");
    });
}