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
<link rel="stylesheet" href="css/map.css">
</head>

<body>
<div class="wrapper">
<?php
$user_email = h($app->me()->email);
$user_id = h($app->me()->id);
$token_header = h($_SESSION['token']);
include("assets/html/header.php");
 ?>


<?php

include("assets/pass.php");
include("assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
$qry = "SELECT * FROM an WHERE an.user_id = {$user_id}";
$data = $db->query($qry);

?>


<div id="map"></div>
<div id="dummy"></div>


<table>
<tbody class="table-todo">

<?php
while ($value = $data->fetch()) {
	$id = $value["id"];
	$scene = $value["scene"];
  $action = $value["action"];
  $lat = $value["lat"];
	$lng = $value["lng"];
	$genre_id = $value["genre_id"];
	$archive_flag = $value["archive_flag"];

	// 削除ボタンのvalueに行と同じID番号を振る
	print "<tr class=\"row-todo flag{$archive_flag}\" value=\"{$id}\" data-genre-id='{$genre_id}'>
		        <td class=\"td-scene\">{$scene}</td>
            <td class=\"td-action\">{$action}</td>
            <td class=\"td-lat\">{$lat}</td>
		        <td class=\"td-lng\">{$lng}</td>
	    	</tr>\n";
}
$db = null;
?>

</tbody>
</table>



</div><!-- .wrapper -->
<!-- body -->
<?php
include("assets/html/footer.html");
 ?>

<!-- <script src="//maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry?key=AIzaSyBV1oDNauJ4OZ1ghKsTL6jZVhhS9lig738"></script> -->
<script src="//maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry"></script>
<!-- <script src="http://maps.google.com/maps/api/js?sensor=false&libraries=geometry?key=AIzaSyBV1oDNauJ4OZ1ghKsTL6jZVhhS9lig738"></script> -->
<script src="//code.jquery.com/jquery-2.2.0.min.js"></script>
<script src="js/module/Notif.js"></script>
<script src="js/module/CreateMap.js"></script>
<script src="js/app.js"></script>
<script src="js/map.js"></script>
<script>

</script>

</body>
</html>
