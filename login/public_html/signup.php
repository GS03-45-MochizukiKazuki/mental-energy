<?php

// 新規登録

// require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . './config/config.php');

$app = new MyApp\Controller\Signup();

$app->run();

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Sign Up</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="container">
    <form id="signup" action="" method="post">
      <p>
        <input type="text" name="email" placeholder="email" value="<?= isset($app->getValues()->email) ? h($app->getValues()->email) : ''; ?>">
      </p>
      <p class="err"><?= h($app->getErrors('email')); ?></p>
      <p>
        <input type="password" name="password" placeholder="password">
      </p>
      <p class="err"><?= h($app->getErrors('password')); ?></p>
      <div class="btn">Sign Up</div>
      <p class="fs12"><a href="/login.php">Log In</a></p>
      <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>"></input>
    </form>
  </div>
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
