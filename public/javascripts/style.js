window.onload = setErrordisplay();

function setErrordisplay(){
    var width = document.getElementById("password").clientWidth;
    var elemt = document.querySelectorAll(".display-err");
    var i;
    for (i = 0; i < elemt.length; i++) {
    elemt[i].style.width = width +"px";
}
};

function elementHasfocus(){

    var display = document.querySelectorAll(".display-err");
    var i;
    for (i = 0; i < display.length; i++) {
        display[i].style.opacity = 0;
   
};
}