'use strict';

(function(){

var $on = $('.btn-on');
var $off = $('.btn-off');
var $flag0 = $('.flag0');
var $flag1 = $('.flag1');
var flag = true;

$flag1.hide();

$on.on('click', function(){
	$flag1.hide();
	$flag0.fadeIn();
	if (flag) {  }
});
$off.on('click', function(){
	$flag0.hide();
	$flag1.fadeIn();
});


// function ajaxPost(param1){
//     $.post("switch.php", {archive_flag:param});
// }




})();

