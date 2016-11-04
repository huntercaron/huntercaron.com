var projects = [
	{name: "turnip", index: 0, open: false, width: "66.666666666", height: "66.666666666", left: 0, top: 0, ele: document.getElementById("pro-" + 0), inner: document.querySelector(".pro-" + 0 + "-inner") },
	{name: "experiments", index: 1, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 0, ele: document.getElementById("pro-" + 1), inner: document.querySelector(".pro-" + 1 + "-inner") },
	{name: "big-data", index: 2, open: false, width: "33.333333333", height: "33.333333333", left: 2, top: 1, ele: document.getElementById("pro-" + 2), inner: document.querySelector(".pro-" + 2 + "-inner") },
	{name: "sprouted", index: 3, open: false, width: "33.333333333", height: "33.333333333", left: 0, top: 2, ele: document.getElementById("pro-" + 3), inner: document.querySelector(".pro-" + 3 + "-inner") },
	{name: "companion", index: 4, open: false, width: "66.666666666", height: "33.333333333", left: 1, top: 2, ele: document.getElementById("pro-" + 4), inner: document.querySelector(".pro-" + 4 + "-inner") }
];

var gridEle = document.querySelector(".grid");
var currentProj = projects[0].ele;

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

	let gridWidth = document.querySelector(".grid").offsetWidth;
	let gridHeight = document.querySelector(".grid").offsetHeight;

	let gridBoxWidth = document.querySelector(".grid-box").offsetWidth;
	let gridBoxHeight = document.querySelector(".grid-box").offsetHeight;

	gridZclear()

	ele.style.zIndex = "2";
	ele.style.transformOrigin = "top left";
	ele.style.transform = `scaleX(${(gridBoxWidth)/width}) scaleY(${(gridBoxHeight)/height})
							translateY(-${((gridBoxHeight-gridHeight)/2 + 6 + (gridHeight/3)*projects[currentProj].top)/((gridBoxHeight)/height)}px) translateX(-${((gridBoxWidth-gridWidth)/2 + 6 + (gridWidth/3)*projects[currentProj].left)/((gridBoxWidth)/width)}px)`;

	console.log(`scaleX(${(gridBoxWidth)/width}) scaleY(${(gridBoxHeight)/height}) translateY(-${(gridBoxHeight-gridHeight-12)/2 + (gridHeight/3)*projects[currentProj].top}px) translateX(-${(gridBoxWidth-gridWidth-42)/2}px)`);
}


function closeProject(currentEle) {
	let ele = document.querySelector('.pro-' + currentProj + "-inner");

	ele.style.transform = `scaleX(1) scaleY(1) `;

	projects[currentEle.dataset.project].open = false;
    currentEle.classList.remove("active-project");
}
