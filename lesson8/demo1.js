window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    div2.onclick = function () {
        console.log("div2 click");
    }
}
function div1click() {
    console.log("div1 click");
}