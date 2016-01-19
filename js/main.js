(function() {

    //var isTouchDevice = 'ontouchstart' in document.documentElement;
    smoothScroll.init();

    var projectOpen = false,
    turnipButton = document.getElementById("turnip-button"),
    turnipProject = document.getElementById("turnip-project"),
    turnipBack = document.getElementById("turnip-back"),
    grid = document.getElementById("grid"),
    aboutMore = document.querySelector(".about-more");


    turnipButton.addEventListener('click', function() {
        smoothScroll.animateScroll( null, '#turnip-project' );

        if (!projectOpen) {
            classie.add(grid, "hide-grid");

            console.log('poop');
            setTimeout(function(){
                classie.remove(turnipProject, "hide-project");
                projectOpen = true;
                classie.remove(grid, "hide-grid");
            }, 200);
        }
    });


    turnipBack.addEventListener('click', function() {
        classie.add(grid, "hide-grid");

        setTimeout(function(){
            console.log('poop');
            classie.remove(grid, "hide-grid");
            classie.add(turnipProject, "hide-project");
            projectOpen = false;

        }, 500);

    });

    aboutMore.addEventListener('click', function() {
        smoothScroll.init();
        if (projectOpen) {
            smoothScroll.animateScroll( null, '#about', { offset: -3000});
        }
        else
            smoothScroll.animateScroll( null, '#about' );
    });


})();
