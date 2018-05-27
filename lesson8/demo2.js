window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.type);
        console.log(e.target);
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;
}