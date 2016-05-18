import Sample from './lib/Sample';
import Console from './lib/Console';
import $ from 'jquery';

const sample = new Sample({
    name: 'world'
});

// $('.wrapper').on('click', () => {
//     console.log(`hello, ${sample.name}.`);
// });

const myConsole = new Console();
// myConsole.start();


// 端末判定
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	$('body').addClass('env-sp');
} else {
	$('body').addClass('env-pc');
}


// 指定位置まで移動
$(function(){
	$('a').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


// ga
$('.btn-facebook').on('click', function(){
    ga('send', 'event', 'share', 'click', 'facebook');
});
$('.btn-twitter').on('click', function(){
    ga('send', 'event', 'share', 'click', 'twitter');
});
$('.btn-line').on('click', function(){
    ga('send', 'event', 'share', 'click', 'line');
});
