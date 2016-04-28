<?php 

header("Content-Type: text/html; charaset=UTF-8"); // 文字化け対策

//DB接続
function db(){
  try {
    return new PDO('mysql:dbname=me_db;charset=utf8;host=localhost','root','');
  } catch (PDOException $e) {
    exit('DbConnectError:'.$e->getMessage());
  }
}