<?php
include('../pass.php');
include('../func.php');

// 入力チェック
if(
  !isset($_POST["genre"]) || $_POST["genre"]==""
){
  exit('ParamError');
}

// POSTデータ取得
$id      = $_POST["genre_id"];
$genre_name   = $_POST["genre"];

// db接続
$pdo = db();

// DB文字コードを指定(固定)
$update = $pdo->query('SET NAMES utf8');
if (!$update) {
  $error = $pdo->errorInfo();
  exit($error[2]);
}

$update = $pdo->prepare("UPDATE genre SET name=:a1 WHERE id=:id");
$update->bindValue(':a1', $genre_name);
$update->bindValue(':id', $id);
$status = $update->execute();

// SQL実行エラーチェック
dbExecError($status,$update);

// データ登録処理後
//フォームの再送信を防げる
header("Location: ../../app");
exit;



?>
