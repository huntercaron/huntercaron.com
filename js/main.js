(function() {

    //var isTouchDevice = 'ontouchstart' in document.documentElement;

    var layzr = new Layzr();
    smoothScroll.init();

    var projectOpen = false,
    turnipButton = document.getElementById("turnip-button"),
    turnipProject = document.getElementById("turnip-project"),
    sproutedButton = document.getElementById("sprouted-button"),
    sproutedProject = document.getElementById("sprouted-project"),
    grid = document.getElementById("grid"),
    aboutMore = document.querySelector(".about-more"),
    closeProject = document.querySelector(".back-button"),
    projects = document.querySelector(".projects"),
    currentProject = null;


    function OpenProject(project, projectID) {
        smoothScroll.animateScroll( null, projectID );

        if (!projectOpen) {
            classie.add(grid, "hide-grid");
            currentProject = project;

            setTimeout(function(){
                classie.remove(project, "hide-project");
                projectOpen = true;
                classie.remove(grid, "hide-grid");
            }, 200);
        }
    }

    closeProject.addEventListener('click', function() {
        classie.add(grid, "hide-grid");

        setTimeout(function(){
            console.log(currentProject);
            classie.remove(grid, "hide-grid");
            classie.add(currentProject, "hide-project");
            projectOpen = false;

        }, 500);

    });


    turnipButton.addEventListener('click', function() {
        OpenProject(turnipProject, "#turnip-project");
    });

    turnipButton.addEventListener('click', function() {
        OpenProject(turnipProject, "#turnip-project");
    });



    aboutMore.addEventListener('click', function() {
        if (projectOpen) {
            smoothScroll.animateScroll( null, '#about', { offset: -3000});
        }
        else
            smoothScroll.animateScroll( null, '#about' );
    });


})();
