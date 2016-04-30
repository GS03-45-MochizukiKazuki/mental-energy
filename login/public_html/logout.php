<?php 

// require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . './config/config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (!isset($_POST['token']) || $_POST['token'] !== $_SESSION['token']) {
    echo "Invalid Token!";
    exit;
  }

  // セッション削除
  $_SESSION = [];

  // クッキー削除
  if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 86400, '/');
  }

  session_destroy();

}

header('Location: ' . SITE_URL);



/*

 http://d.hatena.ne.jp/Kappuccino/20080726/1217049706

