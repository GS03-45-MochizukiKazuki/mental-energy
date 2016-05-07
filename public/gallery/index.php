<?php 
require_once('../config/config.php');

$app = new MyApp\Controller\Index();

$app->run();

?>


<!DOCTYPE html>
<html lang="ja">

<head>
<?php 
include("../assets/html/meta.html");
 ?>
<link rel="stylesheet" href="../css/app.css">	
<link rel="stylesheet" href="../css/archive.css">
<link rel="stylesheet" href="../css/gallery.css">
</head>

<body>
<div class="wrapper">
<?php 
$user_email = h($app->me()->email);
$user_id = h($app->me()->id);
$token_header = h($_SESSION['token']);
include("../assets/html/header.php");
 ?>


<?php 

include("../assets/pass.php");
include("../assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
// カラム名重複のためasを使用
$qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name, users.id AS user_id, users.email FROM (an INNER JOIN genre ON an.genre_id = genre.id) INNER JOIN users ON an.user_id = users.id AND an.user_id = {$user_id} ORDER BY an.id;";
// $qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id ORDER BY an.id;";
// $qry = "SELECT * FROM an INNER JOIN genre ON an.genre_id = genre.id;";
$data = $db->query($qry);

?>



<div class="sec-archive">
	<!-- join -->

	<div class="swith">
		<div class="btn btn-all">all</div>	
		<div class="btn btn-on">undone</div>	
		<div class="btn btn-off">done</div>	
	</div>

	<div class="row-top">
		<div class="headline column-s"></div>
		<div class="headline column-s"></div>
		<div class="headline column-m">ジャンル</div>
		<div class="headline column-l">シーン</div>
		<div class="headline column-l">アクション</div>
	</div>


	<table>
	<tbody class="table-todo">
		
	<?php
	while ($value = $data->fetch()) {
		$id = $value["id"];
		$scene = $value["scene"];
		$action = $value["action"];
		$genre_name = $value["name"];
		$genre_id = $value["genre_id"];
		$archive_flag = $value["archive_flag"];

		// 削除ボタンのvalueに行と同じID番号を振る
		print "<tr class=\"row-todo flag{$archive_flag}\" value=\"{$id}\" data-genre-id='{$genre_id}'>
					<td class=\"icon-check column-s\"><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i></td>
			        <td class=\"td-genre column-m\">{$genre_name}</td>
			        <td class=\"td-scene column-l\">{$scene}</td>
			        <td class=\"td-action column-l\">{$action}</td>
		    	</tr>\n";
	}
	$db = null;
	?>

	</tbody>
	</table>
</div>

<form class="form-undo" action="../assets/crud/fromArchive.php" method="post">
	<input type="hidden" name="archiveID" value=""/>
	<input type="submit" name="undo"/>
</form>
<form class="form-delete" action="../assets/crud/delete.php" method="post">
	<input type="hidden" name="archiveID" value=""/>
	<input type="submit" name="delete"/>
</form>



</div><!-- .wrapper -->
<!-- body -->
<?php 
include("../assets/html/footer.html");
 ?>
<script src="../js/module/textEdit.js"></script>
<script src="../js/module/changeGenre.js"></script>
<script src="../js/app.js"></script>
<script src="../js/archive.js"></script>
<script src="../js/gallery.js"></script>


</body>
</html>













