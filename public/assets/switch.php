<?php
include('pass.php');
include('func.php');

// ジャンルIDで紐付ける
//入力チェック
if(
  !isset($_POST["archive_flag"]) || $_POST["archive_flag"]==""
){
  exit('ParamError');
}

$archive_flag   = $_POST["archive_flag"];

$db = db();
$db->query("set names utf8"); // 文字化け対策

$qry = "SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id AND an.archive_flag = 1 ORDER BY an.id;";
// $qry = "SELECT * FROM an INNER JOIN genre ON an.genre_id = genre.id;";
$data = $db->query($qry);

dbExecError($status,$stmt);

header("Location: ../gallery.php");
exit;

?>
