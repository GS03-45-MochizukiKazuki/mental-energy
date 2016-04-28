'use strict';

(function(){
    
var genreAryAll = []; // 重複あり
var genreAry = [];	  // 重複なし
var chartData = [];
var chartData2 = [];
var genreIDAryAll = [];
var genreIDAry = [];
var genreNumAry = [];
var $all_length = $('.genre-item').length;
var flag = true;

// いったんジャンル名をすべて格納
$('.genre_name').each(function(){
	genreAryAll.push( $(this).text() );
});
// 重複を削除
genreAry = genreAryAll.filter(function (x, i, self) {
    return self.indexOf(x) === i;
});
// いったんジャンルIDをすべて格納
$('.genre_id').each(function(){
	genreIDAryAll.push( Number($(this).text()) );
});
genreIDAry = genreIDAryAll.filter(function (x, i, self) {
    return self.indexOf(x) === i;
});

for (var i = 0; i < genreAry.length; i++) {
	genreNumAry.push( $('.item').filter("[data-genre-id="+genreIDAry[i]+"]").length );
}

genData();
function genData(){
	if (flag) {
		chartData.push(['Task', 'genre']);
		flag = false;
	}
	for (var j = 0; j < genreAry.length; j++) {
		// [ジャンル名, 数]
		chartData.push([genreAry[j], genreNumAry[j]]);
	}
}


/* ======================================
 * google chart
 * ====================================== */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable(chartData);

var options = {
  title: 'Percentage of Genres'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}


/* ======================================
 * グラフ２
 * ====================================== */


var $undone = $('.flag0').length;
var $done = $all_length - $undone;
chartData2 = [
	['Task', 'todo'],
	['done', $done],
	['undone', $undone]
];


/* ======================================
 * google chart
 * ====================================== */

google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {

var data = google.visualization.arrayToDataTable(chartData2);

var options = {
  title: 'done / undone'
};

var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));

chart2.draw(data, options);
}





})();


