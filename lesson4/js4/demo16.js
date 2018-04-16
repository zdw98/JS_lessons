window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        return function () {
            var li = document.createElement("li");
            li.innerHTML = "xxxxx";
            ol.appendChild(li);
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};