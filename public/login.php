<?php

// require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . '/config/config.php');

$app = new MyApp\Controller\Login();

$app->run();


// echo "login screen";
// exit;

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
    <form id="login" action="" method="post">
      <p>
        <input type="email" name="email" placeholder="email / test@gmail.com" autocapitalize="off" required autofocus="on" value="<?= isset($app->getValues()->email) ? h($app->getValues()->email) : ''; ?>">
      </p>
      <p>
        <input type="password" name="password" placeholder="password / test">
      </p>
      <p class="err"><?= h($app->getErrors('login')); ?></p>
      <div class="btn">Log In</div>
      <p class="fs12"><a href="./signup">SIGN UP</a></p>
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
  $('#login').submit();
});


</script>
</html>
