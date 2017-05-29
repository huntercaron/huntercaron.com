const mainBox = document.getElementById('main');
const mainInner = document.getElementById('main-inner');

const name = document.getElementById('name');
const infoBox = document.getElementById('info');

let infoBoxShow = false;

mainBox.addEventListener('click', (function (e) {

    infoBoxShow = !infoBoxShow;

    if (infoBoxShow) {
        name.style.display = "block";
        infoBox.style.display = "none";
    } else {
        name.style.display = "none";
        infoBox.style.display = "block";
    }

}));

infoBox.addEventListener('click', (function (e) {
    e.stopPropagation();
}));


if (window.innerWidth > 500) {
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX;
        let y = e.clientY;
        let height = window.innerHeight;
        let width = window.innerWidth;

        mainInner.style.transform = "translate(" + ((x-(width/2))*0.1) + "px, " + ((y-(height/2))*0.1) + "px)";

        //console.log("X coords: " + x + ", Y coords: " + y);

    });

}
