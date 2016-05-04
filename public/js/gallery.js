'use strict';

(function(){

var $all = $('.btn-all');
var $on = $('.btn-on');
var $off = $('.btn-off');
var $flag0 = $('.flag0');
var $flag1 = $('.flag1');
var flag = true;

$flag1.hide();

$all.on('click', function(){
	switch1();
});
$on.on('click', function(){
	switch2();
});
$off.on('click', function(){
	switch3();
});

switch1();
function switch1(){
	$flag1.hide();
	$flag0.hide();
	$flag1.fadeIn();
	$flag0.fadeIn();
	$all.attr('id', 'all_on');
	$on.attr('id', '');
	$off.attr('id', '');
}
function switch2(){
	$flag1.hide();
	$flag0.fadeIn();
	$on.attr('id', 'flag0_on');
	$all.attr('id', '');
	$off.attr('id', '');
}
function switch3(){
	$flag0.hide();
	$flag1.fadeIn();
	$off.attr('id', 'flag1_on');
	$all.attr('id', '');
	$on.attr('id', '');
}


// listの高さ
$(window).on('load resize', function(){
	var $windowHeight = $(window).innerHeight();
	$('.table-todo').css('height', $windowHeight * .7);

});




})();

