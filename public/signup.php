<?php

// 新規登録

// require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . '/config/config.php');

$app = new MyApp\Controller\Signup();

$app->run();

?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <?php 
  include("assets/html/meta.html");
  ?>
  <link rel="stylesheet" href="css/app.css"> 
  <link rel="stylesheet" href="css/login.css">
</head>
<body>
  <?php 
  include("assets/html/header.html");
   ?>
  <div id="container">
    <form id="signup" action="" method="post">
      <p>
        <input type="email" name="email" placeholder="email" autocapitalize="off" autofocus="on" required value="<?= isset($app->getValues()->email) ? h($app->getValues()->email) : ''; ?>">
      </p>
      <p class="err"><?= h($app->getErrors('email')); ?></p>
      <p>
        <input type="password" name="password" placeholder="password">
      </p>
      <p class="err"><?= h($app->getErrors('password')); ?></p>
      <div class="btn">Sign Up</div>
      <p class="fs12"><a href="./login">Log In</a></p>
      <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>"></input>
    </form>
  </div>
<?php 
include("assets/html/footer.html");
 ?>
</body>
<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
<script>
$('.btn').on('click', function(){
  $('#signup').submit();
});

  
</script>
</html>

<!-- 
CSRF
http://qiita.com/singlestroke/items/b38f9f9f9b62f2522539
 -->
