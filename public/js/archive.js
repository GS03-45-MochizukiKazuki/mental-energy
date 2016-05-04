'use strict';

(function(){

$('.btn-undo').on('click', function(){	
	var $archiveID = $(this).parent().attr('value');
	$('.form-undo').find( $('input[name="archiveID"]') ).val($archiveID);
	$('input[name="undo"]').click();
});

$('.btn-delete').on('click', function(){
	var $archiveID = $(this).parent().attr('value');
	$('.form-delete').find( $('input[name="archiveID"]') ).val($archiveID);

	disp();
});
function disp(text){
    if(window.confirm('マイルールを削除しますか？')){
		$('input[name="delete"]').click();
    }
}


// listの高さ
$(window).on('load resize', function(){
	var $windowHeight = $(window).innerHeight();
	$('.table-todo').css('height', $windowHeight * .8);

});





})();
