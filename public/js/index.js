'use strict';

(function(){

/* ======================================
 * slick
 * ====================================== */

$('.photos').slick({
	autoplay:true,
	autoplaySpeed:5000,
	speed:5000,
	infinite:true,
	fade:true
});


/* ======================================
 * gototop
 * ====================================== */

var $gototop = $('#js-gototop');
$gototop.on('click', function(){
	$('body,html').animate({
		scrollTop: 0
	}, 1000);
});

$gototop.css('display','none');
$(window).scroll(function(){
    var $windowHeight = $(window).height(),
        $topWindow = $(window).scrollTop(),
        $targetPosition = $('.sec-movie').offset().top;
    if( $topWindow > $targetPosition - $windowHeight ){
    	$gototop.fadeIn();
    }else{
    	$gototop.fadeOut();
    }
});


/* ======================================
 * BGM
 * ====================================== */
var audio = document.getElementById("bgm");

var musicFlag = true;
var $bgm_on = $('.fa-volume-up');
var $bgm_off = $('.fa-volume-off');

$('.sound').on('click', function(){
	if (musicFlag) {
		$bgm_on.hide();
		$bgm_off.show();
		musicFlag = false;
	} else {
		$bgm_off.hide();
		$bgm_on.show();
		musicFlag = true;
	}

	if(audio.paused){
		audio.play();
		audio.volume = 0.5;
		audio.loop = true;
	}else{
		audio.pause();
	}
	
});

audio.loop = true;

audio.addEventListener("timeupdate", function(e){

var rate = Math.floor(audio.duration / 5);
var i = 1;
var bar = '';
while(i<=5) {
	if ((i*rate) < audio.currentTime) {
		bar = bar + "⭐️";
	} else {
		bar = bar + "☆";
	}
	i++;
}
console.log(audio.currentTime + '%');

}, false);

/* ======================================
 * menu
 * ====================================== */

var $menu = $('.menu-trigger');
var $list = $('.menu-list');
var menu_flag = true;

$menu.on('click', function(){
	if (menu_flag) {
		$(this).addClass('active');
		$list.fadeIn();
		menu_flag = false;
	} else {
		$(this).removeClass('active');
		$list.fadeOut();
		menu_flag = true;
	}
});



})();








	

