<?php


namespace MyApp\Controller;

class Login extends \MyApp\Controller{
	
	public function run(){
		// login
		if ($this->isLoggedIn()) {
			// header('Location: ' . SITE_URL);
			header('Location: ./app');
			exit;
		}

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$this->postProcess();
		}
		
	}

	protected function postProcess() {

		try {
			$this->_validate();
		} catch (\MyApp\Exception\EmptyPost $e) {
			$this->setErrors('login', $e->getMessage());
		}

		// エラーでもemailを残す
		$this->setValues('email', $_POST['email']); // key, value

		if ($this->hasError()) {
			return;
		} else {
			// user login
			try {
				$userModel = new \MyApp\Model\User();
				$user = $userModel->login([
					'email' => $_POST['email'],
					'password' => $_POST['password']
				]);
			} catch (\MyApp\Exception\UnmatchEmailOrPassword $e) {
				// email重複
				$this->setErrors('login', $e->getMessage());
				return;
			}

			// login処理
			session_regenerate_id(true); // セッションハイジャック対策
			$_SESSION['me'] = $user;


			// redirect to home
			// header('Location: ' . SITE_URL);
			// header('Location: ' . SITE_URL . '/app');
			header('Location: ./login'); // mentalenergy
			exit;

		}


	}

	private function _validate(){
		// tokenが一致するか確認
		if (!isset($_POST['token']) || $_POST['token'] !== $_SESSION['token']) {
			echo "Invalid Token";
			exit;
		}
		if (!isset($_POST['email']) || !isset($_POST['password'])) {
			echo "Invalid Form";
			exit;
		}

		if ($_POST['email'] === '' || $_POST['password'] === '') {
			throw new \MyApp\Exception\EmptyPost();
		}

	}


}



/*
プライベートメソッド　_validate()

filter_var
http://php.net/manual/ja/function.filter-var.php

preg_match
http://php.net/manual/ja/function.preg-match.php

正規表現チェッカー
http://okumocchi.jp/php/re.php

$e->getMessage();
http://php.net/manual/ja/exception.getmessage.php

session_regenerate_id
http://php.net/manual/ja/function.session-regenerate-id.php


*/

