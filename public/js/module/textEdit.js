// 'use strict';

$(function() {

/* ======================================
 * テキスト編集
 * ====================================== */

// tr > td > input
$(document).ready(function(){
    $('.editable-td').click(edit_toggle());

});

function edit_toggle(){

    var flag = false;

    return function(){

        if (flag) return;

        // $(this) -> クリックしたtd
        // console.log($(this).text());
        var $input = $("<input>").attr("type","text").val($(this).text()); // <input type="text" value="sample"></input>
        $input.addClass('is-editing');
        // console.log($(this).attr('class'));
        var $old_val = $(this).text();
        console.log($old_val);
        var $tr = $("<tr class='js-added_tr'><td></td></tr>");
        var $tr_colspan = $("<td colspan=\"2\"></td>");

        var $selected_id = $(this).parent().find('input[name="archive_id"]').val();
        console.log($selected_id);

        var editing_td;

        if ($(this).hasClass('editable-td1')) {
            editing_td = 1;
            $input.attr('name', 'scene');
            var $next_text = $(this).parent().find('.editable-td2').text();
            var $next_td = $(this).parent().find('.editable-td2');
            var $next_input = $('<input type="hidden" name="action">');
            $next_td.append( $next_input );
            $next_input.val($next_text);

        }else if($(this).hasClass('editable-td2')){
            editing_td = 2;
            $input.attr('name', 'action');
            var $next_text1 = $(this).parent().find('.editable-td1').text();
            var $next_td1 = $(this).parent().find('.editable-td1');
            var $next_input1 = $('<input type="hidden" name="scene">');
            $next_td1.append( $next_input1 );
            $next_input1.val($next_text1);
        }
        var $form = $("<form action='assets/crud/update.php' method='post'></form>");
        var $submit = $("<input type='submit' name='update' class='todo__submit-btn btn-positive hover-effect' value='保存'/>");
        var $cancel = $("<input type='button' name='cancel' class='todo__cancel-btn btn-negative hover-effect' value='キャンセル'/>");
        var $id_hidden = $("<input type='hidden' name='id' value='"+$selected_id+"'/>");

        $('table').wrap($form);
        $tr.append($tr_colspan);
        $tr_colspan.append($submit);
        $tr_colspan.append($cancel);
        $tr_colspan.append($id_hidden);

        $(this).html($input); // tdの中にinput
        $(this).parent().after($tr); // trの後ろに新たなtr

        $(this).find('input').focus();

        // キャンセルボタン
        $('.todo__cancel-btn').on('click', function(){

            // formの後ろ 値を戻す
            if (editing_td == 1) {
                $('.js-added_tr').prev().find('.editable-td1 input').after($old_val);
            } else if(editing_td == 2){
                $('.js-added_tr').prev().find('.editable-td2 input').after($old_val);
            }

            $('.js-added_tr').prev().find('.editable-td input').remove();

            $('.js-added_tr').remove();

            flag = false;
        });


        flag = true;
    };
}




/* ======================================
 * テーブルハイライト
 * ====================================== */
// セルをマウスオーバー
$(".editable-td").hover(function(){
    // 横
    // 親要素（tr要素）にtargetクラスを追加
    $(this).parent().find(".editable-td").addClass("js-highlight");
   
}, function(){
    // マウスアウト時にjs-highlightクラスを削除
    $(".js-highlight").removeClass("js-highlight");
});







});


