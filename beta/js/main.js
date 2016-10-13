var projects = [
	{name: "turnip", index: 0, open: false, width: "66.666666666%", height: "66.666666666%", left: 0, top: 0, ele: document.getElementById("pro-" + 0)},
	{name: "experiments", index: 1, open: false, width: "33.333333333%", height: "33.333333333%", left: "66.666666666%", top: 0, ele: document.getElementById("pro-" + 1)},
	{name: "big-data", index: 2, open: false, width: "33.333333333%", height: "33.333333333%", left: "66.666666666%", top: "33.333333333%", ele: document.getElementById("pro-" + 2)},
	{name: "sprouted", index: 3, open: false, width: "33.333333333%", height: "33.333333333%", left: 0, top: "66.666666666%", ele: document.getElementById("pro-" + 3)},
	{name: "companion", index: 4, open: false, width: "66.666666666%", height: "33.333333333%", left: "33.333333333%", top: "66.666666666%", ele: document.getElementById("pro-" + 4)}
];

var gridEle = document.querySelector(".grid");
var currentProj = projects[0].ele;

primeGridAnim();

Array.from(projects).forEach(proj => {
	proj.ele.addEventListener('click', function(event) {
        currentProject = event.currentTarget;

        if (projects[event.currentTarget.dataset.project].open == false)
			openProject(event.currentTarget);
		else
			closeProject(event.currentTarget);

	});
});

function primeGridAnim() {
	TweenLite.to(gridEle, 0, {
	    ease: Expo.easeOut,
	    width: "100%",
	    height: "100%"
	});

	TweenLite.to(gridEle, 0, {
	    width: "94%",
	    height: "94%",
	});
}

function openProject(currentEle) {

	projects[currentEle.dataset.project].open = true;
    currentEle.classList.add("active-project");
    currentProj = currentEle.dataset.project;

	TweenLite.to(currentEle, 0, { zIndex: 2 });

	TweenLite.to(gridEle, 0.8, {
		delay: 0.7,
	    ease: Expo.easeOut,
	    width: "100%",
	    height: "100%"
	});

	TweenLite.to(currentEle, 0.7, {
		top: 0,
		left: 0,
		ease: Expo.easeOut,
		opacity: 1,
		scale: 1,
		padding: 0,
		width: "100%",
		height: "100%"
	});

}


function closeProject(currentEle) {

    TweenLite.to(gridEle, 0.4, {
		ease: Expo.easeIn,
        width: "94%",
        height: "94%",
    });

	TweenLite.to(currentEle, 0.6, {
		delay: 0.4,
		zIndex: 2,
		width: projects[currentEle.dataset.project].width,
		height: projects[currentEle.dataset.project].height,
		top: projects[currentEle.dataset.project].top,
		left: projects[currentEle.dataset.project].left,
		ease: Expo.easeOut,
		padding: "6px",
		opacity: 1,
		scale: 1,
		onComplete: function(){TweenLite.to(currentEle, 0, { zIndex: 0 })}
	});

	projects[currentEle.dataset.project].open = false;
    currentEle.classList.remove("active-project");
}
