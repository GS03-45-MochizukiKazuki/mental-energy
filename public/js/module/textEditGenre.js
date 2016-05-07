'use strict';

(function(){


/* ======================================
 * テキスト編集
 * ====================================== */

// tr > td > input
$(document).ready(function(){
    $('.genre__edit').click(edit_toggle());

});

function edit_toggle(){

    var flag = false;

    return function(){

        if (flag) return;

        var $txt_box = $(this).parent().find($('.genre__txt'));
        var $old_val = $txt_box.text();
        var $edit = $(this);
        var $delete = $(this).parent().find('.genre__delete');

        var $input = $("<input>").attr("type","text").val($old_val); // <input type="text" value="sample"></input>
        $input.addClass('is-editing');
        $input.attr('name', 'genre');

        var $added = $("<div class='js-added'></div>");

        var $selected_id = $(this).parent().data('genre-id');

        var $form = $("<form action='../assets/crud/updateGenre.php' method='post'></form>");
        var $submit = $("<input type='submit' name='update' class='genre-submit-btn btn-positive hover-effect' value='保存'/>");
        var $cancel = $("<input type='button' name='cancel' class='genre-cancel-btn btn-negative hover-effect' value='キャンセル'/>");
        var $id_hidden = $("<input type='hidden' name='genre_id' value='"+$selected_id+"'/>");

        $('.genre__list').wrap($form);
        $added.append($submit);
        $added.append($cancel);
        $added.append($id_hidden);

        $txt_box.html($input);
        $txt_box.parent().after($added);

        $txt_box.find('input').focus();
        $edit.hide();
        $delete.hide();

        // キャンセルボタン
        $('.genre-cancel-btn').on('click', function(){

            // formの後ろ 値を戻す
            $('.js-added').prev().find('.genre__txt input').after($old_val);
            $('.js-added').prev().find('.genre__txt input').remove();
            $('.js-added').remove();

            $edit.show();
            $delete.show();

            flag = false;
        });

        // $('.content-right h2').text($old_val);


        flag = true;
    };
}


/* ======================================
 * ジャンル削除
 * ====================================== */

$('.genre__delete').on('click', function(){
    
    var $genre_id = $(this).parent().data('genre-id');
    var $genre_txt = $(this).parent().find('.genre__txt').text();
    var $genre_hidden = $("<input type='hidden' name='gdelid' value='"+$genre_id+"'/>");

    $('.genre-delete').append($genre_hidden);

    disp($genre_txt);

});

function disp(text){
    if(window.confirm('ジャンル「'+ text +'」を削除しますか？')){
        $('input[name="deleteGenre"]').click();
    }else{
        $('input[name="gdelid"]').remove();
    }
}




})();