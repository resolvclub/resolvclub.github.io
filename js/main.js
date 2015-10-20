$(document).ready(function(){
	$('#hello > *').fadeIn(1000);
	$('.projectPage > *').fadeIn(1000);
	var menuDown = false;
	$('.menuToggle').click(function(){
		if(menuDown == true){
			// $("nav").height("50px");
			$('nav ul').slideUp(300);
			menuDown = false;
		}
		else{
			// $('nav').height("100px");
			$('nav ul').slideDown(300);
			menuDown = true;
		}
	});

	window.addEventListener("scroll",function() { 
		if($(window).width() > 768){
	    if(window.scrollY > $("section#home").height()) {
	      $('nav').animate({backgroundColor: "#ecf0f1"}, {duration: 100});
	    }
	    else {
	      $('nav').animate({backgroundColor: "transparent"}, {duration: 100});
	      $('.menuToggle').animate({backgroundColor: "transparent"}, {duration: 100});
	    }
	  } else {
	  	$('nav').animate({backgroundColor: "#ecf0f1"}, {duration: 100});
	  }
	},false);

	$(window).resize(function(){
		if($(window).width() > 768){
			$('nav ul').slideDown(300);
			menuDown = true;
		}
	});

	$(".projectToggle").click(function(){
		if($(this).siblings(".projectContent").css("display") == "none"){
			$(this).siblings(".projectContent").slideDown();
		}
		else $(this).siblings(".projectContent").slideUp();
	});

});