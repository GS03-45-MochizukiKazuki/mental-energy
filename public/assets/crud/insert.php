<?php
include('../pass.php');
include('../func.php');

// ジャンルIDで紐付ける
//入力チェック
if(
  !isset($_POST["genre_id"]) || $_POST["genre_id"]=="" ||
  !isset($_POST["scene"]) || $_POST["scene"]=="" ||
  !isset($_POST["action"]) || $_POST["action"]=="" ||
  !isset($_POST["user_id"]) || $_POST["user_id"]==""
){
  exit('ParamError');
}

//POSTデータ取得
$genre_id   = $_POST["genre_id"];
$user_id  = $_POST["user_id"];
$scene   = $_POST["scene"];
$action  = $_POST["action"];

//**************************************************
// 以下DB（一覧情報取得）
//**************************************************
//1. 接続します
$pdo = db();

//2．データ登録SQL作成
$stmt = $pdo->prepare("INSERT INTO an(genre_id, user_id, scene, action,
indate )VALUES(:a1, :a2, :a3, :a4, now())");
$stmt->bindValue(':a1', $genre_id);
$stmt->bindValue(':a2', $user_id);
$stmt->bindValue(':a3', $scene);
$stmt->bindValue(':a4', $action);
$status = $stmt->execute();

//3．SQL実行エラーチェック
dbExecError($status,$stmt);

//4．データ登録処理後
//フォームの再送信を防げる
header("Location: ../../app.php");
exit;

?>
