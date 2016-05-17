<?php
require_once(__DIR__ . '/config/config.php');

$app = new MyApp\Controller\Index();

$app->run();

?>


<!DOCTYPE html>
<html lang="ja">

<head>

<link href='https://fonts.googleapis.com/css?family=EB+Garamond|Playfair+Display+SC|Radley' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/data.css">
</head>

<body onload="init();">

<canvas id="particleEmitterCanvas" width="800" height="600"></canvas>
<canvas id="particleEmitterCanvas2" width="800" height="600"></canvas>
<main class="">
	<div class="txt animate_txt">Your Mental Energy is ...</div>
	<div id="percent" class=""></div>
</main>

<?php
$user_email = h($app->me()->email);
$user_id = h($app->me()->id);

include("assets/pass.php");
include("assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
$qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name, users.id AS user_id, users.email FROM (an INNER JOIN genre ON an.genre_id = genre.id) INNER JOIN users ON an.user_id = users.id AND an.user_id = {$user_id} ORDER BY an.genre_id;";
$data = $db->query($qry);

?>

<table style="display: block;">
<?php
while ($value = $data->fetch()) {
	$id = $value["id"];
	$scene = $value["scene"];
	$action = $value["action"];
	$genre_name = $value["name"];
	$genre_id = $value["genre_id"];
	$archive_flag = $value["archive_flag"];
	$all_length = count($value);

	print "<div class=\"hidden genre_id genre_id{$genre_id}\">{$genre_id}</div>
			<div class=\"hidden genre_name genre_id{$genre_id}\" value=\"{$genre_name}\">{$genre_name}</div>
			<tr class=\"hidden genre-item item flag{$archive_flag}\" value=\"{$id}\" data-genre-id='{$genre_id}'>
	    	</tr>\n";
}

$db = null;
?>
</table>
</div><!-- .wrapper -->

<audio id="bgm_am_high">
	<source src="sound/bgm_am_high.mp3" type="audio/mp3"></source>
</audio>
<audio id="bgm_pm_high">
	<source src="sound/bgm_pm_high.mp3" type="audio/mp3"></source>
</audio>
<audio id="bgm_am_low">
	<source src="sound/bgm_am_low.mp3" type="audio/mp3"></source>
</audio>
<audio id="bgm_pm_low">
	<source src="sound/bgm_pm_low.mp3" type="audio/mp3"></source>
</audio>



<script src="//code.jquery.com/jquery-2.2.0.min.js"></script>
<!-- <script src="http://code.jquery.com/jquery-2.2.0.min.js"></script> -->
<script src="js/lib/createjs.min.js"></script>
<script src="js/lib/ColorFilter.js"></script>
<script src="js/lib/particleEmitterJs-0.5.0-custom.js"></script>
<!-- <script src="js/module/dataDefault.js"></script> -->
<script src="js/module/textAnim.js"></script>
<script src="js/data.js"></script>

</body>
</html>
