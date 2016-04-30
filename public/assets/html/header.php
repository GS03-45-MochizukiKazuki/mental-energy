
<header class="section-block">
  <div class="content-block">
    <nav class="cf">
      <h1 class="logo hover-effect"><a href="app.php"></a></h1>
      <div class="user-name"><?= $user_email ?></div>
      <div class="btn-sp-menu">
        <i class="fa fa-cog fa-2x fa-fw"></i>
      </div>
      <ul class="menu-list">
        <li class="item"><a href="archive.php">アーカイブを見る</a></li>
        <li class="item"><a href="gallery.php">一覧を見る</a></li>
        <li class="item"><a href="data.php">メンタルエナジーを見る</a></li>
        <li class="item btn-setting"><i class="fa fa-cog fa-2x fa-fw"></i></li>
      </ul>
      <div class="setting">
        <form action="logout.php" method="post" id="logout">
          <div class="arrow_box btn-logout hover-effect">ログアウト</div>
          <input type="hidden" name="token" value="<?= $token_header ?>">
        </form>
      </div>
      <a href="#" class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </nav>
  </div>
</header>