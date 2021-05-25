$(document).ready(function() {
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */
 now = new Date();
 var tomorrow = new Date().setHours(24, 0, 0);
 var now = new Date();
 var seconds = parseInt(tomorrow - now) / 1000;
 $(".el-timer").attr("data-timer", seconds);
 $(".el-timer").TimeCircles({
    "animation": "smooth",
    "bg_width": 0.5,
    "fg_width": 0.03,
    "circle_bg_color": "#f3f5f7",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#f8e174",
            "show": false
        },
        "Hours": {
            "text": "часов",
            "color": "#f8e174",
            "show": true
        },
        "Minutes": {
            "text": "минут",
            "color": "#f8e174",
            "show": true
        },
        "Seconds": {
            "text": "секунд",
            "color": "#f8e174",
            "show": true
        }
    }
});


 /* sliders */

 $('.reviews_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear'
});
 $('.reviews').slick({
    dots: false,
    infinite: true,
    speed: 200,
    fade: false,
    cssEase: 'linear',
    adaptiveHeight: true
});    


});