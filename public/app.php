<?php 
require_once(__DIR__ . '/config/config.php');

$app = new MyApp\Controller\Index();

$app->run();

?>


<!DOCTYPE html>
<html lang="ja">

<head>
<?php 
include("assets/html/meta.html");
 ?>
<link rel="stylesheet" href="css/app.css">	
</head>

<body>
<?php 
$user_email = h($app->me()->email);
$user_id = h($app->me()->id);
$token_header = h($_SESSION['token']);
include("assets/html/header.php");
 ?>
<!-- body -->




<!-- <h1>Users <span class="fs12">(<?= count($app->getValues()->users); ?>)</span></h1>
<ul>
  <?php foreach ($app->getValues()->users as $user) : ?>
    <li><?= h($user->email); ?></li>
  <?php endforeach; ?>
</ul> -->


<?php 

include("assets/pass.php");
include("assets/func.php");

$db = db();
$db->query("set names utf8"); // 文字化け対策

// メインテーブル
$qry = "SELECT * FROM an WHERE archive_flag = 0 AND an.user_id = {$user_id}";
$data = $db->query($qry);

// ジャンルテーブル
$qry_genre = "SELECT * FROM genre WHERE genre.user_id = {$user_id}";
// $qry_genre = "SELECT * FROM genre";
$data_genre = $db->query($qry_genre);
?>

<section class="sec-todo section-block cf">
<div class="content-block">

<div class="content-left">
<div class="content-wrapper">

	<div class="rule">
		<ul class="rule__list">
			<li class="rule__item rule__item1">
				<i class="fa fa-inbox fa-fw fa-2x"></i>
				<h2 class="is-active">定期ルール</h2>
			</li>
			<li class="rule__item rule__item2">
				<i class="fa fa-calendar fa-fw fa-2x"></i>
				<h2 class="line-through">不定期ルール</h2>
			</li>
		</ul>
	</div><!-- .rule -->
	
	<div class="genre">
	
		<!-- .genre delete -->
		<form class="genre-delete" action="assets/crud/deleteGenre.php" method="get">
			<!-- .genre select -->
			<h2 class="genre__ttl">ジャンル</h2>
			<ul class="genre__list">
				<?php 
				while($value_genre = $data_genre->fetch()){
					$id = $value_genre["id"];
					$name = $value_genre["name"];
					print "<li class=\"genre__item\" data-genre-id='{$id}'>
								<span class=\"genre__color\"></span><h2 class=\"genre__txt\">{$name}</h2><i class=\"genre__edit fa fa-pencil\" aria-hidden=\"true\"></i><i class=\"genre__delete fa fa-trash-o\" aria-hidden=\"true\"></i>
							</li>";
				}
				$db = null;
				?>
			</ul>
			<input class="btn-negative hover-effect" type="submit" name="deleteGenre" value="削除"/>
		</form>
	
		<!-- .genre insert -->
		<div class="btn-genre">
			<i class="fa fa-plus fa-2x btn-add" aria-hidden="true"></i>
		</div>
		<form class="genre__form genre-insert" action="assets/crud/insertGenre.php" method="post">
			<input type="hidden" name="user_id" value="<?= $user_id ?>" />
			<input class="genre__txt" type="text" name="genre" placeholder="genre"/><br/>
			<input class="genre__submit btn-positive hover-effect" type="submit" name="insertGenre" value="追加"/>
			<input class="genre__cancel btn-negative hover-effect" type='button' name='cancel' class='cancel-btn' value='キャンセル'/>
		</form>
	
	</div><!-- .genre -->

</div>	
</div><!-- .content-left -->



<div class="content-right">
<div class="content-wrapper">

	<h2 class="is-active"></h2>

	<!-- delete -->
	<form action="assets/crud/toArchive.php" method="post">

		<table class="todo__table">
			<tr class="todo__tr">
				<th class="todo__th"></th>
				<!-- <th>ジャンル</th> -->
				<th class="todo__th">シーン - when, where</th>
				<th class="todo__th">アクション - what</th>
			</tr>

			<?php
			while ($value = $data->fetch()) {
				$id = $value["id"];
				$scene = $value["scene"];
				$action = $value["action"];
				$genre_id = $value["genre_id"];

				// 削除ボタンのvalueに行と同じID番号を振る
				print "<tr class=\"editable-tr\" data-genre-id='{$genre_id}'>
							<td><input type=\"radio\" name=\"archive_id\" value=\"{$id}\"/></td>
					        <td class=\"editable-td editable-td1\">{$scene}</td><td class=\"editable-td editable-td2\">{$action}</td>
				    	</tr>\n";
			}
			$db = null;
			?>

		</table><!-- .todo__table -->

		<!-- これをdisplay:none;にしてradiobuttonにcheckがあったら自動的にクリックさせる -->
		<input type="submit" name="archive" value="アーカイブへ"/>
		<input type="hidden" name="archiveID" value=""/>
	</form>

	<!-- insert -->
	<div class="btn-todo">
		<i class="fa fa-plus fa-2x btn-add" aria-hidden="true"></i>
	</div>
	<form class="todo-insert" action="assets/crud/insert.php" method="post">
		<input type="hidden" name="user_id" value="<?= $user_id ?>" />
		<input type="text" name="scene" placeholder="scene" /><br/>
		<input type="text" name="action" placeholder="action"/><br/>
		<input type="hidden" name="genre_id"/>
		<input class="btn-positive hover-effect" type="submit" name="insert" value="追加"/>
		<input class="btn-negative hover-effect" type='button' name='cancel' value='キャンセル'/>
	</form>

</div>
</div><!-- .content-right -->


</div><!-- .content-block -->
</section><!-- .sec-todo -->







<!-- body -->
<?php 
include("assets/html/footer.html");
 ?>
<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
<script src="js/module/textEdit.js"></script>
<script src="js/module/textEditGenre.js"></script>
<script src="js/module/changeGenre.js"></script>
<script src="js/app.js"></script>
<script>
$('.btn-logout').on('click', function(){
  $('#logout').submit();
});

  
</script>
</body>
</html>













