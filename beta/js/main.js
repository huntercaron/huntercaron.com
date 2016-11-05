var projects = [
	{name: "turnip", index: 0, open: false, width: "66.666666666", height: "66.666666666", left: 0, top: 0, ele: document.getElementById("pro-" + 0), inner: document.querySelector(".pro-" + 0 + "-inner") },
	{name: "experiments", index: 1, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 0, ele: document.getElementById("pro-" + 1), inner: document.querySelector(".pro-" + 1 + "-inner") },
	{name: "big-data", index: 2, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 1, ele: document.getElementById("pro-" + 2), inner: document.querySelector(".pro-" + 2 + "-inner") },
	{name: "sprouted", index: 3, open: false, width: "33.333333333", height: "33.333333333", left: 0, top: 2, ele: document.getElementById("pro-" + 3), inner: document.querySelector(".pro-" + 3 + "-inner") },
	{name: "companion", index: 4, open: false, width: "66.666666666", height: "33.333333333", left: 1, top: 2, ele: document.getElementById("pro-" + 4), inner: document.querySelector(".pro-" + 4 + "-inner") }
];

var gridEle = document.querySelector(".grid");
var currentProj = 0;

var currentProjWidth = document.querySelector('.pro-' + currentProj + "-inner").offsetWidth;
var currentProjHeight = document.querySelector('.pro-' + currentProj + "-inner").offsetHeight;

var gridWidth = document.querySelector(".grid").offsetWidth;
var gridHeight = document.querySelector(".grid").offsetHeight;

var gridBoxWidth = document.querySelector(".grid-box").offsetWidth;
var gridBoxHeight = document.querySelector(".grid-box").offsetHeight;

Array.from(projects).forEach(proj => {
	proj.ele.addEventListener('click', function(event) {
        currentProject = event.currentTarget;

        if (projects[event.currentTarget.dataset.project].open == false)
			openProject(event.currentTarget);
		else
			closeProject(event.currentTarget);

	});
});

function gridZclear() {
	for (let i of projects) {
		i.inner.style.zIndex = 1;
	}
}

function openProject(currentEle) {

	projects[currentEle.dataset.project].open = true;
    currentProj = currentEle.dataset.project;

	let ele = document.querySelector('.pro-' + currentProj + "-inner");
	let width = document.querySelector('.pro-' + currentProj + "-inner").offsetWidth;
	let height = document.querySelector('.pro-' + currentProj + "-inner").offsetHeight;

	currentProjHeight = document.querySelector('.pro-' + currentProj + "-inner").offsetHeight;

	gridWidth = document.querySelector(".grid").offsetWidth;
	gridHeight = document.querySelector(".grid").offsetHeight;

	gridBoxWidth = document.querySelector(".grid-box").offsetWidth;
	gridBoxHeight = document.querySelector(".grid-box").offsetHeight;

	gridZclear()

	ele.style.zIndex = "2";
	ele.style.transformOrigin = "top left";
	ele.style.transform = 	`scaleX(${(gridBoxWidth)/width})
							scaleY(${(gridBoxHeight)/height})
							translateY(-${((gridBoxHeight-gridHeight)/2 + 6 + (gridHeight/3)*projects[currentProj].top)/((gridBoxHeight)/height)}px)
							translateX(-${((gridBoxWidth-gridWidth)/2 + 6 + (gridWidth/3)*projects[currentProj].left)/((gridBoxWidth)/width)}px)`;

	document.querySelector(".turnip").style.transform = `scale(${((gridBoxHeight)/height-1)})`;

	if (currentProj == 4)
		document.querySelector(".pro-" + currentProj + "-info").style.transform = `scaleY(${((gridBoxHeight-6)/height-(Math.floor(gridBoxHeight/height)))}) scaleX(${((gridBoxWidth-6)/width-(Math.floor(gridBoxWidth/width)))})`;
	else
		document.querySelector(".pro-" + currentProj + "-info").style.transform = `scale(${((gridBoxHeight-6)/height-(Math.floor(gridBoxHeight/height)))})`;

	setTimeout( function(){ document.querySelector(".project-contents").style.transform = "scaleY(1)"; }, 240 );
	setTimeout( function(){
		document.querySelector(".turnip").style.transform = `scale(${((gridBoxHeight)/height-1)*0.8}) translateY(-240px)`;
		document.querySelector(".pro-" + currentProj + "-info").style.transform = document.querySelector(".project-info").style.transform + " translateY(-290px)";
		document.querySelector(".project-contents").style.transform = "translateY(-300px)"
	}, 500);


	console.log(`scale(${(gridBoxHeight/height-(gridBoxHeight/height-(Math.floor(gridBoxHeight/height))))})`)

	console.log(`scaleX(${(gridBoxWidth)/width}) scaleY(${(gridBoxHeight)/height}) translateY(-${(gridBoxHeight-gridHeight-12)/2 + (gridHeight/3)*projects[currentProj].top}px) translateX(-${(gridBoxWidth-gridWidth-42)/2}px)`);
}


function closeProject(currentEle) {
	let ele = document.querySelector('.pro-' + currentProj + "-inner");

	document.querySelector(".turnip").style.transform = `scale(${((gridBoxHeight)/currentProjHeight-1)})`;

	document.querySelector(".pro-" + currentProj + "-info").style.transform = `scale(${((gridBoxHeight-6)/currentProjHeight-(Math.floor(gridBoxHeight/currentProjHeight)))})`;

	document.querySelector(".project-contents").style.transform = "translateY(0) scaleY(0.0000001)"



	setTimeout( function(){
		document.querySelector(".turnip").style.transform = "scale(1)";
		ele.style.transform = "";
		document.querySelector(".pro-" + currentProj + "-info").style.transform = "";
	}, 500);

	projects[currentEle.dataset.project].open = false;
    currentEle.classList.remove("active-project");
}
