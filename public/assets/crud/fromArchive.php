<?php
include('../pass.php');
include('../func.php');

//入力チェック
if(
  !isset($_POST["archiveID"]) || $_POST["archiveID"]==""
){
  exit('ParamError');
}

//POSTデータ取得
$archiveID = $_POST["archiveID"];
// $archive_flag   = $_POST["archive_flag"];
$archive_flag = 0;



// db接続
$pdo = db();

$update = $pdo->query('SET NAMES utf8');
if (!$update) {
  $error = $pdo->errorInfo();
  exit($error[2]);
}

$update = $pdo->prepare("UPDATE an SET archive_flag=:archive_flag WHERE id=:archiveID");
$update->bindValue(':archive_flag', $archive_flag);
$update->bindValue(':archiveID', $archiveID);
$status = $update->execute();

dbExecError($status,$update);

header("Location: ../../archive.php");
exit;




?>
