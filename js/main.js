(function() {

    aboutButton = document.querySelector('.about-more'),
    aboutMore = document.querySelector('.more-about'),
    projects = document.querySelector('.projects');

    aboutButton.addEventListener('click', function() {
	    classie.toggle( aboutMore, 'hide-about' );
        classie.toggle( projects, 'about-room' );
	});


})();
