var projects = [
	{name: "turnip", index: 0, open: false, width: "66.666666666%", height: "66.666666666%", left: 0, top: 0, ele: document.getElementById("pro-" + 0)},
	{name: "experiments", index: 1, open: false, width: "33.333333333%", height: "33.333333333%", left: "66.666666666%", top: 0, ele: document.getElementById("pro-" + 1)},
	{name: "big-data", index: 2, open: false, width: "33.333333333%", height: "33.333333333%", left: "66.666666666%", top: "33.333333333%", ele: document.getElementById("pro-" + 2)},
	{name: "sprouted", index: 3, open: false, width: "33.333333333%", height: "33.333333333%", left: 0, top: "66.666666666%", ele: document.getElementById("pro-" + 3)},
	{name: "companion", index: 4, open: false, width: "66.666666666%", height: "33.333333333%", left: "33.333333333%", top: "66.666666666%", ele: document.getElementById("pro-" + 4)}
];

var gridEle = document.querySelector(".grid");
var currentProject;

var gridGrow = TweenLite.to(gridEle, 2, {
    ease: Expo.easeOut,
    width: "100%",
    height: "100%",
    paused: true
});

TweenLite.to(gridEle, 0, {
    width: "94%",
    height: "94%",
});

Array.from(projects).forEach(proj => {
	proj.ele.addEventListener('click', function(event) {
        currentProject = event.currentTarget;

        if (projects[event.currentTarget.dataset.project].open == false)
			openProject(event.currentTarget);
		else
			closeProject(event.currentTarget);

	});
});


function openProject(currentEle) {

	projects[currentEle.dataset.project].open = true;
    currentEle.classList.add("active-project");

    gridGrow.play();

	for (var i of projects) {
		if (i.index == currentEle.dataset.project) {
            TweenLite.to(i.ele, 0, { zIndex: 2 });

			TweenLite.to(i.ele, 1.2, {
				top: 0,
				left: 0,
				ease: Expo.easeOut,
				opacity: 1,
				scale: 1,
				padding: 0,
				width: "100%",
				height: "100%"
			});
		} else {
            TweenLite.to(i.ele, 0, { zIndex: 0 });
		}
	}
}


function closeProject(currentEle) {

    gridGrow.restart().pause();

    TweenLite.to(gridEle, 4, {
        width: "94%",
        height: "94%",
    });

	for (var i of projects) {
		if (i.open) {
			TweenLite.to(i.ele, 1, {
				zIndex: 2,
				width: i.width,
				height: i.height,
				top: i.top,
				left: i.left,
				ease: Expo.easeOut,
				padding: "6px",
				opacity: 1,
				scale: 1,
			});
		} else {
			TweenLite.to(i.ele, 0, {
				zIndex: 0,
				ease: Expo.easeOut,
				opacity: 1,
				scale: 1,
			});
		}
	}

	projects[currentEle.dataset.project].open = false;
    currentEle.classList.remove("active-project");
}
