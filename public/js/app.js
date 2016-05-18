'use strict';

(function(){

/* ======================================
 * ジャンル
 * ====================================== */

// 色
var $genre_color = $('.genre__color');
var colorAry = ["#FF7B7E","#FFCB7B","#E1FF77","#80FFAE","#7FFFFF","#7FACFF","#9775FF","#E372FF"];

$genre_color.each(function(i, val){
	$(this).css('background-color', colorAry[i%8]);
});


// 追加ボタン
var $genre = $('.genre-insert');
var $todo = $('.todo-insert');

$('.btn-genre').on('click', function(){
	$genre.fadeIn();
});
$('.btn-todo').on('click', function(){
	$todo.fadeIn();
});

$genre.find('.btn-negative').on('click', function(){
	$genre.fadeOut();
});
$todo.find('.btn-negative').on('click', function(){
	$todo.fadeOut();
});


/* ======================================
 * アーカイブ
 * ====================================== */

$('input[name="archive_id"]').change(function(){

	$('input[name="archiveID"]').val( $(this).val() );
	$('input[name="archive"]').click();
});


/* ======================================
 * ログアウト
 * ====================================== */

 var flag_setting = true;
 var $setting = $('.setting');

$('.btn-setting').on('click', function(){
	if (flag_setting) {
		$setting.fadeIn();
		flag_setting = false;
	} else {
		$setting.fadeOut();
		flag_setting = true;
	}

});

$('.btn-logout').on('click', function(){
	$('#logout').submit();
});


// sp
var $btn_sp = $('.env-sp .btn-setting');
$btn_sp.children().remove();
$btn_sp.append($setting);

// 設定
$('.menu-list').append('<div class="btn-close"></div>');
var $btn_setting_sp = $('.btn-sp-menu');
var $btn_close = $('.btn-close');
// var flag_setting_sp = true;
var $list = $('.menu-list');


$btn_setting_sp.on('click', function(){
	$list.fadeIn();
});
$btn_close.on('click', function(){
	$list.fadeOut();
});


/* ======================================
 * ジャンル
 * ====================================== */

var $left_block = $('.env-sp .content-left');
var $btn_genre = $('.menu-trigger');
// var overlay = '<div id="overlay"></div>';
var genre_flag = true;

$('body').prepend( $left_block );
// $('body').append( overlay );

// var $overlay = $('#overlay');

$btn_genre.on('click', function(){
	if (genre_flag) {
		$(this).addClass('active');
		$left_block.addClass('slide-genre');
		genre_flag = false;
	} else {
		$(this).removeClass('active');
		$left_block.removeClass('slide-genre');
		genre_flag = true;
	}
});

/* ======================================
 * ラジオボタン
 * ====================================== */

var $inactiveAry = [];

$('.radio-check').each(function(){
	var $inactiveId = $(this).data('radio-id');
	$inactiveAry.push($inactiveId);
});

console.log($inactiveAry);


$('input[type="radio"]').each(function(){
	for (var i = 0; i < $inactiveAry.length; i++) {
		if ( $(this).data('radio-id') == $inactiveAry[i] ) {
			$(this).addClass('is-inactive');
			$(this).attr('disabled', 'true');
		}
	}
});

/* ======================================
 * 位置の取得
 * ====================================== */

$('input[name="scene"]').on('keydown focus', function(){
	GetLatlng.start();
});








})();
