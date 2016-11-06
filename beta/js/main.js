var projects = [
	{name: "turnip", index: 0, open: false, width: "66.666666666", height: "66.666666666", left: 0, top: 0, ele: document.getElementById("proj-" + 0), inner: document.querySelector(".proj-" + 0 + "-inner") },
	{name: "experiments", index: 1, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 0, ele: document.getElementById("proj-" + 1), inner: document.querySelector(".proj-" + 1 + "-inner") },
	{name: "big-data", index: 2, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 1, ele: document.getElementById("proj-" + 2), inner: document.querySelector(".proj-" + 2 + "-inner") },
	{name: "sprouted", index: 3, open: false, width: "33.333333333", height: "33.333333333", left: 0, top: 2, ele: document.getElementById("proj-" + 3), inner: document.querySelector(".proj-" + 3 + "-inner") },
	{name: "companion", index: 4, open: false, width: "66.666666666", height: "33.333333333", left: 1, top: 2, ele: document.getElementById("proj-" + 4), inner: document.querySelector(".proj-" + 4 + "-inner") }
];

var gridEle = document.querySelector(".grid");
var currentProj = 0;
var currentProject = 0;

var currentProjWidth = document.querySelector('.proj-' + currentProj + "-inner").offsetWidth;
var currentProjHeight = document.querySelector('.proj-' + currentProj + "-inner").offsetHeight;

var currentSplashWidth = document.querySelector('.proj-' + currentProj + "-splash").offsetWidth;
var currentSplashHeight = document.querySelector('.proj-' + currentProj + "-splash").offsetHeight;

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

function populateContent(proj) {

	for (let i = 0; i < 5; i++) {
		if (i != proj) {
			document.querySelector('.proj-' + i + "-contents").style.display = "none";
		} else {
			document.querySelector('.proj-' + i + "-contents").style.display = "flex";
		}
	}
}

function openProject(currentEle) {

	projects[currentEle.dataset.project].open = true;
    currentProj = currentEle.dataset.project;

	let ele = document.querySelector('.proj-' + currentProj + "-inner");
	let width = document.querySelector('.proj-' + currentProj + "-inner").offsetWidth;
	let height = document.querySelector('.proj-' + currentProj + "-inner").offsetHeight;

	currentProjHeight = document.querySelector('.proj-' + currentProj + "-inner").offsetHeight;
	currentProjWidth = document.querySelector('.proj-' + currentProj + "-inner").offsetWidth;

	gridWidth = document.querySelector(".grid").offsetWidth;
	gridHeight = document.querySelector(".grid").offsetHeight;

	gridBoxWidth = document.querySelector(".grid-box").offsetWidth;
	gridBoxHeight = document.querySelector(".grid-box").offsetHeight;

	currentSplashWidth = document.querySelector('.proj-' + currentProj + "-splash").offsetWidth;
	currentSplashHeight = document.querySelector('.proj-' + currentProj + "-splash").offsetHeight;

	gridZclear()
	populateContent(currentProj);

	ele.style.zIndex = "2";
	ele.style.transformOrigin = "top left";
	ele.style.transform = 	`scaleX(${(gridBoxWidth)/width})
							scaleY(${(gridBoxHeight)/height})
							translateY(-${((gridBoxHeight-gridHeight)/2 + 6 + (gridHeight/3)*projects[currentProj].top)/((gridBoxHeight)/height)}px)
							translateX(-${((gridBoxWidth-gridWidth)/2 + 6 + (gridWidth/3)*projects[currentProj].left)/((gridBoxWidth)/width)}px)`;


	document.querySelector(".proj-" + currentProj + "-splash").style.transform = `scaleY(${1/(gridBoxHeight/height)}) scaleX(${1/(gridBoxWidth/width)})`;
	document.querySelector(".proj-" + currentProj + "-info").classList.add("hidden-info");

	setTimeout( function(){ document.querySelector(".project-contents").style.transform = "scaleY(1)"; }, 240 );

	setTimeout( function(){
		currentEle.classList.add("active-project");
		document.querySelector(".proj-" + currentProj + "-splash").style.transform = `scaleY(${1/(gridBoxHeight/height)*0.8}) scaleX(${1/(gridBoxWidth/width)*0.8}) translateY(-${gridBoxHeight/10*3}px)`;
		document.querySelector(".project-contents").style.transform = `translateY(-${gridBoxHeight/2}px)`;

		document.querySelector('.proj-' + currentProj + "-contents").classList.add("show-contents");
	}, 500);

}


function closeProject(currentEle) {
	let ele = document.querySelector('.proj-' + currentProj + "-inner");

	document.querySelector(".proj-" + currentProj + "-splash").style.transform = `scaleY(${1/(gridBoxHeight/currentProjHeight)}) scaleX(${1/(gridBoxWidth/currentProjWidth)})`;
	document.querySelector(".project-contents").style.transform = "translateY(0) scaleY(0.0000001)"
	document.querySelector('.proj-' + currentProj + "-contents").classList.remove("show-contents");

	currentEle.classList.remove("active-project");

	setTimeout( function(){
		document.querySelector(".proj-" + currentProj + "-splash").style.transform = "scale(1)";
		ele.style.transform = "";
		document.querySelector(".proj-" + currentProj + "-info").classList.remove("hidden-info");
	}, 500);

	projects[currentEle.dataset.project].open = false;
    currentEle.classList.remove("active-project");
}
