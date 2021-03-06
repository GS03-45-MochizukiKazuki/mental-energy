'use strict';

(function(){

// 下
$('.js-scrollTarget').css('visibility','hidden');
$(window).scroll(function(){
    var $windowHeight = $(window).height(),
        $topWindow = $(window).scrollTop();
    $('.js-scrollTarget').each(function(){
        var $targetPosition = $(this).offset().top;
        if( $topWindow > $targetPosition - $windowHeight + 100 ){
            $(this).addClass("js-fadeInDown");
        }
    });
});


// 左右
$('.js-scrollTargetLeft').css('visibility','hidden');
$(window).scroll(function(){
    var $windowHeight = $(window).height(),
        $topWindow = $(window).scrollTop();
    $('.js-scrollTargetLeft').each(function(){
        var $targetPosition = $(this).offset().top;
        if( $topWindow > $targetPosition - $windowHeight + 100 ){
            $(this).addClass("js-fadeInLeft");
        }
    });
});

$('.js-scrollTargetRight').css('visibility','hidden');
$(window).scroll(function(){
    var $windowHeight = $(window).height(),
        $topWindow = $(window).scrollTop();
    $('.js-scrollTargetRight').each(function(){
        var $targetPosition = $(this).offset().top;
        if( $topWindow > $targetPosition - $windowHeight + 100 ){
            $(this).addClass("js-fadeInRight");
        }
    });
});


// sp
$('.env-sp .pc1').remove();
$('.env-sp .pc2').remove();

$('.env-sp .js-scrollTargetLeft').attr('class', 'js-scrollTarget');
$('.env-sp .js-scrollTargetRight').attr('class', 'js-scrollTarget');


})();
