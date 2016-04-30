<?php 

//HTML XSS対策
function htmlEnc($value) {
    return htmlspecialchars($value,ENT_QUOTES);
}

//SQL実行エラーチェック
function dbExecError($status,$stmt){
  if($status==false){
    $error = $stmt->errorInfo();
    exit("QueryError:".$error[2]);
  }
}

//認証OK時の初期値セット
function loginSessionSet($val){
  $_SESSION["chk_ssid"]  = session_id();
  $_SESSION["kanri_flg"] = $val['kanri_flg'];
  $_SESSION["name"]      = $val['name'];
}

//セッションチェック用関数
function sessionCheck(){
  if( !isset($_SESSION["chk_ssid"]) || ($_SESSION["chk_ssid"] != session_id()) ){
    echo "LOGIN ERROR";
    exit();
  }else{
     session_regenerate_id(true);
     $_SESSION["chk_ssid"] = session_id();
  }
}