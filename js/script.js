$(document).ready(function() {
	$(".management").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	  AOS.init();
	$(".languages").click(function(){
		$(this).toggleClass("active");
	});
	$(".toggle-nav").click(function(){
		$(this).toggleClass("active");
		$(".owerlay").toggleClass("active");
		$("header .section-header .menu ul").toggleClass("active");
	});
	$(".owerlay").click(function(){
		$(this).removeClass("active");
		$("header .section-header .menu ul").removeClass("active");
		$(".toggle-nav").removeClass("active");
	});
	$("header .section-header .menu ul .close-icon").click(function(){
		$("header .section-header .menu ul").removeClass("active");
		$(".toggle-nav").removeClass("active");
		$(".owerlay").removeClass("active");
	});
});