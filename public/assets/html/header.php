
<header class="section-block">
  <div class="content-block">
    <nav class="cf">
      <h1 class="logo hover-effect"><a href="../app"></a></h1>
      <div class="user-name"><?= $user_email ?></div>
      <div class="btn-sp-menu">
        <i class="fa fa-cog fa-2x fa-fw"></i>
      </div>
      <ul class="menu-list">
        <li class="item"><a href="../archive">アーカイブを見る</a></li>
        <li class="item"><a href="../gallery">一覧を見る</a></li>
        <li class="item"><a href="../graph">グラフを見る</a></li>
        <li class="item pc btn-energy"><a href="../data"></a></li>
        <!-- <li class="item pc"><a href="../data"><i class="fa fa-smile-o" aria-hidden="true"></i></a></li> -->
        <li class="item btn-setting"><i class="fa fa-cog fa-2x fa-fw"></i></li>
      </ul>
      <div class="setting">
        <form action="../logout" method="post" id="logout">
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