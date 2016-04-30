<?php 

// require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . './config/config.php');

$app = new MyApp\Controller\Login();

$app->run();


// echo "login screen";
// exit;

?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Log In</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="container">
    <form id="login" action="" method="post">
      <p>
        <input type="text" name="email" placeholder="email" value="<?= isset($app->getValues()->email) ? h($app->getValues()->email) : ''; ?>">
      </p>
      <p>
        <input type="password" name="password" placeholder="password">
      </p>
      <p class="err"><?= h($app->getErrors('login')); ?></p>
      <div class="btn">Log In</div>
      <p class="fs12"><a href="./signup.php">SIGN UP</a></p>
      <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>"></input>
    </form>
  </div>
</body>
<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
<script>
$('.btn').on('click', function(){
  $('#login').submit();
});

  
</script>
</html>