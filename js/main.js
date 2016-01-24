(function() {


    var layzr = new Layzr();
    smoothScroll.init();

    var projectOpen = false,
    touchedProject = "",
    turnipButton = document.getElementById("turnip-button"),
    turnipProject = document.getElementById("turnip-project"),
    sproutedButton = document.getElementById("sprouted-button"),
    sproutedProject = document.getElementById("sprouted-project"),
    sproutedVideo = document.getElementById("sprouted-video"),
    exploreProject = document.getElementById("explore-project"),
    exploreButton = document.getElementById("explore-button"),
    grid = document.getElementById("grid"),
    aboutMore = document.querySelector(".about-more"),
    closeProject = document.querySelector(".back-button"),
    projects = document.querySelector(".projects"),
    currentProject = null;


    function OpenProject(project, projectID) {

        if (!projectOpen) {
            smoothScroll.animateScroll( null, projectID );
            classie.add(grid, "hide-grid");
            currentProject = project;

            setTimeout(function(){
                classie.remove(project, "hide-project");
                projectOpen = true;
                classie.remove(grid, "hide-grid");
                classie.remove(closeProject, "hide-button");
            }, 200);
        }
        else {

            setTimeout(function(){
                classie.add(currentProject, "hide-project");
                currentProject = project;
                classie.remove(project, "hide-project");
                smoothScroll.animateScroll( null, projectID );
            }, 300);
        }
    }

    closeProject.addEventListener('click', function() {
        classie.add(grid, "hide-grid");

        setTimeout(function(){
            classie.remove(grid, "hide-grid");
            classie.add(currentProject, "hide-project");
            classie.add(closeProject, "hide-button");
            projectOpen = false;

        }, 500);

    });


    turnipButton.addEventListener('click', function() {
        OpenProject(turnipProject, "#turnip-project");
    });

    sproutedButton.addEventListener('click', function() {
        OpenProject(sproutedProject, "#sprouted-project");
        sproutedVideo.src = "images/sprouted/Sprouted-Recording.mp4";
    });

    exploreButton.addEventListener('click', function() {
        OpenProject(exploreProject, "#explore-project");
    });



    aboutMore.addEventListener('click', function() {
        if (projectOpen) {
            smoothScroll.animateScroll( null, '#about', { offset: -3000});
        }
        else
            smoothScroll.animateScroll( null, '#about' );
    });


})();
