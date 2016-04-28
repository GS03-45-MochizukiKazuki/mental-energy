// 最初をactive
var $genreItem_first = $('.genre__item').eq(0);
$genreItem_first.addClass('is-active');
$genreItem_first.find('h2').addClass('is-active');

var $currentGenre = $genreItem_first.find('h2').text();
$('.content-right h2').text($currentGenre);

var firstID = $('.genre__item').eq(0).data('genre-id');
$('.editable-tr').filter('[data-genre-id='+firstID+']').show();

// 切り替え
$('.genre__item').on('click', function(){
	var $genre_list = $('.genre__list');
	$('.editable-tr').hide();
	$genre_list.find($('.is-active')).removeClass('is-active');
	$(this).addClass('is-active');
	$genre_list.find($('.is-active')).find('h2').addClass('is-active');

	// tr表示
	var id = $(this).data('genre-id');
	var active_tr = $('.editable-tr').filter('[data-genre-id='+id+']');
	active_tr.show();

	$currentGenre = $('.genre__item').find('h2.is-active').text();
	if (!$currentGenre) { return; }
	$('.content-right h2').text($currentGenre);
});

// insertの際のジャンルid挿入
$('input[name="scene"]').on("focus", function(){
	var id = $('.genre__list').find('.is-active').data('genre-id');
	$('input[name="genre_id"]').val(id);
});
