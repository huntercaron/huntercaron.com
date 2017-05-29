var mainBox = document.getElementById('main');
var mainInner = document.getElementById('main-inner');

var nameBox = document.getElementById('name');
var infoBox = document.getElementById('info');
var infoBoxShow = false;

mainBox.addEventListener('click', (function (e) {

    infoBoxShow = !infoBoxShow;

    if (infoBoxShow) {
        nameBox.style.display = "none";
        infoBox.style.display = "block";
    } else {
        nameBox.style.display = "block";
        infoBox.style.display = "none";
    }

}));

infoBox.addEventListener('click', (function (e) {
    e.stopPropagation();
}));


if (window.innerWidth > 500) {
    window.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var height = window.innerHeight;
        var width = window.innerWidth;

        mainInner.style.transform = "translate(" + ((x-(width/2))*0.1) + "px, " + ((y-(height/2))*0.1) + "px)";

        //console.log("X coords: " + x + ", Y coords: " + y);

    });

}
