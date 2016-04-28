<?php
include('../pass.php');
include('../func.php');

$gid = $_GET['gdelid'];

//DB接続
$pdo = db();

//DB文字コードを指定(固定)
$stmt = $pdo->query('SET NAMES utf8');
if (!$stmt) {
  $error = $pdo->errorInfo();
  exit($error[2]);
}

//UPDATE app_table SET ....; で更新
$stmt = $pdo->prepare("DELETE FROM genre WHERE id=:gid");
$stmt->bindValue(':gid', $gid);
$status = $stmt->execute();

//データ登録処理後
if($status==false){
  //SQL実行時にエラーがある場合
  $error = $stmt->errorInfo();
  exit("QueryError:".$error[2]);
}else{
  header("Location: ../../app.php");
  exit;
}



?>
