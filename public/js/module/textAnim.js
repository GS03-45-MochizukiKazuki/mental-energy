$(function(){

	var STEP = 150; //1文字づつ表示する間隔
	var TYPING_LINE = '<span class="line">_</span>'; //タイピングライン要素

	function setTextAnimate(target){

		var str = target.text(); //対象セレクタのテキスト
		var num = 0; //現在表示されている文字列のインデックス
		var typingLine; //タイピングラインのセレクタを格納した変数

		target.text('').append(TYPING_LINE);
		typingLine = target.find('.line');

		for( var i=0; i<str.length; i++ ){
			setTimeout(function(){
				typingLine.remove();
				target.append( str.charAt(num) ).append(typingLine);
				num++;
			}, i*STEP);
		};

		// アニメーション終了時
		setTimeout( function(){
			setTimeout(function(){
				typingLine.remove();
				$('main').addClass('blur');
				$('#percent').addClass('blur');
			}, 3000);
		}, str.length*STEP );

	};

	$.each( $('.animate_txt'), function(){
		setTextAnimate($(this));
	} );

});