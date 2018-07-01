$(document).ready(function(){

$('#slides').superslides({
	animation: 'fade',
	play: 2000
})

var typed = new Typed(".typed",  {
	strings:["Software Developer.", "Computer Science Student."],
	typeSpeed: 70,
	loop:true,
	startDelay: 1000,
	showCursor: false
})

$('.owl-theme').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
})



var skills = $(".skillsSection").offset().top;

$(window).scroll(function(){

	if(window.pageYOffset > skills - $(window).height() + 200){

		 $('.chart').easyPieChart({

	easing: 'easeInOut',
	barColor: '#fff',
	trackColor: false,
	scaleColor: false,
	lineWidth: 4,
	size: 152

        });


	}
})

/*
$("#navigation li a").click(function(e){
   e.preventDefault();

   var target = $(this).attr("href");
   var targetPos = $(target).offset().top;
   $("html", "body").animate({ scrollTop: targetPos - 50}, "slow");
})
*/
const nav = $("#navigation");
const navTop = nav.offset().top;
$(window).on("scroll", stickyNavigation);

function stickyNavigation(){
 
 var body = $("body");

 if($(window).scrollTop() >= navTop){
 	body.css("padding-top", nav.outerHeight() + "px");
 	body.addClass("fixedNav");
 }
 else {

 	body.css("padding-top", nav.outerHeight() + "px");

 	body.removeClass("fixedNav");
 }


}


})



