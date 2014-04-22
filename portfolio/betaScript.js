$(document).ready(function() {

	$('#squareOne').click(function() {
		$('#squareTwo').fadeIn();
		$('#squareThree').fadeIn();
	});

	$('#squareThree').click(function() {
		$('#squareFour').fadeIn();
		$('#squareFive').fadeIn();
	});

	$('#squareTwo').click(function() {
		$('#squareFour').fadeIn();
		$('#squareFive').fadeIn();
	});

	$('#squareFour').click(function() {
		$('#squareSeven').fadeIn();
		$('#squareSix').fadeIn();
	});

	$('#squareFive').click(function() {
		$('#squareSeven').fadeIn();
		$('#squareSix').fadeIn();
	});

	$('#squareSix').click(function() {
		$('#squareEight').fadeIn();
	});

	$('#squareSeven').click(function() {
		$('#squareEight').fadeIn();
	});

	$('#squareEight').click(function() {
		$('#squareNine').css({"margin-top": "90px", "margin-left": "-140px"});
		$('#squareNine').fadeIn();
	});

	$('#squareNine').click(function() {
		$('#squareEight').fadeOut();
		$('#squareSeven').fadeOut();
		$('#squareSix').fadeOut();
		$('#squareFive').fadeOut();
		$('#squareFour').fadeOut();
		$('#squareThree').fadeOut();
		$('#squareTwo').fadeOut();
		$('#squareOne').fadeOut();
		$('#squareNine').delay(500).animate({"margin-top": "30px", "margin-left": "-80px"}, 500);
		$('#squareNine').delay(0).fadeOut();
		$('#squareOne').delay(500).fadeIn();
	});

	//Buttons that sends to section

	$('#homeButton').click(function() {
		$('html, body').animate({
			scrollTop: $("#home").offset().top-52
		});
	});
	$('#aboutButton').click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top-52
		});
	});
	$('#skillsButton').click(function() {
		$('html, body').animate({
			scrollTop: $("#skills").offset().top-52
		});
	});
	$('#portfolioButton').click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top-52
		});
	});
	$('#contactButton').click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top-52
		});
	});

	//vector buttons
	$('#pencil').mouseenter(function() {
		$('#pencil').animate({backgroundColor: "#262626" }, 400 );
	});
	$('#pencil').mouseleave(function() {
		$('#pencil').animate({backgroundColor: "#009B74" }, 400 );
	});

	$('#folder').mouseenter(function() {
		$('#folder').animate({backgroundColor: "#009B74" }, 400 );
	});
	$('#folder').mouseleave(function() {
		$('#folder').animate({backgroundColor: "#262626" }, 400 );
	});

	//portfolio Stuff

	$('#itemOne').mouseenter(function() {
		$('#itemOne').fadeTo(200, 0.70);
	});
	$('#itemOne').mouseleave(function() {
		$('#itemOne').fadeTo('fast', 1);
	});

	$('#itemTwo').mouseenter(function() {
		$('#itemTwo').fadeTo(200, 0.70);
	});
	$('#itemTwo').mouseleave(function() {
		$('#itemTwo').fadeTo('fast', 1);
	});

	$('#itemThree').mouseenter(function() {
		$('#itemThree').fadeTo(200, 0.70);
	});
	$('#itemThree').mouseleave(function() {
		$('#itemThree').fadeTo('fast', 1);
	});

	//portfolio moving

	var bigOne = false;
	var bigTwo = false;
	var video = false;

	$('#itemOne').click(function() {
		if(bigOne === false) {
			$('#itemTwo').fadeOut();
			$('#itemThree').fadeOut();
			$('#portfolio').animate({"height": "1200px"}, 500);
			$('#portfolio #line').animate({"height": "1100px"}, 500);
			$('#itemOne').delay(500).animate({"width": "100%"}, 500);
			bigOne = true;
		}
		else {
			$('#itemOne').animate({"width": "25%"}, 500);
			$('#portfolio').delay(200).animate({"height": "500px"}, 500);
			$('#portfolio #line').animate({"height": "400px"}, 500);
			$('#itemTwo').delay(500).fadeIn();
			$('#itemThree').delay(500).fadeIn();
			bigOne = false;
		}
	});

	$('#itemTwo').click(function() {
		if(bigTwo === false) {
			$('#itemOne').fadeOut();
			$('#itemThree').fadeOut();
			$('#portfolio').animate({"height": "1200px"}, 500);
			$('#portfolio #line').animate({"height": "1100px"}, 500);
			$('#itemTwo').delay(500).animate({"width": "40%"}, 500);
			$('html, body').animate({
			scrollTop: $("#itemTwo").offset().top-100
		});
			bigTwo = true;
		}
		else {
			$('#itemTwo').animate({"width": "11.75%"}, 500);
			$('#portfolio').delay(200).animate({"height": "500px"}, 500);
			$('#portfolio #line').animate({"height": "400px"}, 500);
			$('#itemOne').delay(500).fadeIn();
			$('#itemThree').delay(500).fadeIn();
			bigTwo = false;
		}
	});

	$('#itemThree').click(function() {
		if (video === false) {
		$('#thumbnail').remove();
		$('#itemThree').append('<iframe src="//www.youtube.com/embed/8-XuboqD4Ng?rel=0" frameborder="0" allowfullscreen></iframe>');
		video = true;
	}
	});
	
});

