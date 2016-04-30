
<?php
include('../pass.php');
include('../func.php');

//入力チェック
if(
  !isset($_POST["genre"]) || $_POST["genre"]=="" ||
  !isset($_POST["user_id"]) || $_POST["user_id"]==""
){
  exit('ParamError');
}

//POSTデータ取得
$genre   = $_POST["genre"];
$user_id   = $_POST["user_id"];


//**************************************************
// 以下DB（一覧情報取得）
//**************************************************
//1. 接続します
$pdo = db();

//2．データ登録SQL作成
$stmt = $pdo->prepare("INSERT INTO genre(id, name, user_id)VALUES(null, :a1, :a2)");
$stmt->bindValue(':a1', $genre);
$stmt->bindValue(':a2', $user_id);
$status = $stmt->execute();

//3．SQL実行エラーチェック
dbExecError($status,$stmt);

//4．データ登録処理後
//フォームの再送信を防げる
header("Location: ../../app.php");
exit;

?>
