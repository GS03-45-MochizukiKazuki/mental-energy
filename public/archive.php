<!DOCTYPE html>
<html lang="ja">

<head>
<?php 
include("assets/html/meta.html");
 ?>
<!-- <link rel="stylesheet" href="css/app.css">	 -->
<link rel="stylesheet" href="css/archive.css">
</head>

<body>
<div class="wrapper">
<?php 
include("assets/html/header.html");
 ?>
<!-- body -->



<?php 
session_start(); 

include("assets/pass.php");
include("assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
// カラム名重複のためasを使用
$qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id AND an.archive_flag = 1 ORDER BY an.id;";
// $qry = "SELECT * FROM an INNER JOIN genre ON an.genre_id = genre.id;";
$data = $db->query($qry);

?>



<div class="sec-archive">
	<!-- join -->
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
					<td class=\"btn-undo column-s\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i></td>
					<td class=\"btn-delete column-s\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>
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

<form class="form-undo" action="assets/crud/fromArchive.php" method="post">
	<input type="hidden" name="archiveID" value=""/>
	<input type="submit" name="undo"/>
</form>
<form class="form-delete" action="assets/crud/delete.php" method="post">
	<input type="hidden" name="archiveID" value=""/>
	<input type="submit" name="delete"/>
</form>



</div><!-- .wrapper -->
<!-- body -->
<?php 
include("assets/html/footer.html");
 ?>
<script src="js/module/textEdit.js"></script>
<script src="js/module/changeGenre.js"></script>
<script src="js/app.js"></script>
<script src="js/archive.js"></script>

</body>
</html>













