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




})();
