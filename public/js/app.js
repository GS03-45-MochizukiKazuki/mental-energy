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
