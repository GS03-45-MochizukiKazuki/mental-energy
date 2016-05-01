<?php 
require_once(__DIR__ . '/config/config.php');

$app = new MyApp\Controller\Index();

$app->run();

?>


<!DOCTYPE html>
<html lang="ja">

<head>
<?php 
include("assets/html/meta.html");
 ?>
<link rel="stylesheet" href="css/app.css">
<link rel="stylesheet" href="css/archive.css">
<link rel="stylesheet" href="css/graph.css">
</head>

<body>
<div class="wrapper">
<?php 
$user_email = h($app->me()->email);
$user_id = h($app->me()->id);
$token_header = h($_SESSION['token']);
include("assets/html/header.php");
 ?>
<!-- body -->


<?php 

include("assets/pass.php");
include("assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
$qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name, users.id AS user_id, users.email FROM (an INNER JOIN genre ON an.genre_id = genre.id) INNER JOIN users ON an.user_id = users.id AND an.user_id = {$user_id} ORDER BY an.genre_id;";
// $qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id ORDER BY an.genre_id;";
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


<div class="chart-block">
	<div id="piechart" class="piechart"></div>
	<div id="piechart2" class="piechart"></div>
</div>


</div><!-- .wrapper -->
<!-- body -->
<?php 
include("assets/html/footer.html");
 ?>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="js/module/chart.js"></script>
<script src="js/app.js"></script>
<script src="js/archive.js"></script>

</body>
</html>






