<?php 

// ブラウザにエラー表示
ini_set('display_errors', 1);

define('DSN', 'mysql:dbhost=localhost;dbname=dotinstall_sns_php');
// define('DSN', 'mysql:dbname=dotinstall_sns_php;charset=utf8;host=localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('SITE_URL', 'http://' . $_SERVER['HTTP_HOST']);

require_once(__DIR__ . '/../lib/functions.php');
require_once(__DIR__ . '/autoload.php');

session_start();



/*
$_SERVER
http://www.en-pc.jp/php_server.php


*/