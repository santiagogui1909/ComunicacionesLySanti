function uncheck() {
    var checkbox1 = document.getElementById("btn-menu");
    var checkbox2 = document.getElementById("btn-menu2");
    var checkbox3 = document.getElementById("btn-menu3");
    checkbox1.onclick = function () {
        if (checkbox1.checked != false) {
            checkbox2.checked = null;
            checkbox3.checked = null;
        }
    }
    checkbox2.onclick = function () {
        if (checkbox2.checked != false) {
            checkbox1.checked = null;
            checkbox3.checked = null;
        }
    }
    checkbox3.onclick = function(){
        if (checkbox3.checked != false) {  
            checkbox1.checked = null;
            checkbox2.checked = null;
        }
    }
}