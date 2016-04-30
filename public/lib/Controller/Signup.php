<?php


namespace MyApp\Controller;

class Signup extends \MyApp\Controller{
	
	public function run(){
		// login
		if ($this->isLoggedIn()) {
			header('Location: ' . SITE_URL);
			exit;
		}

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$this->postProcess();
		}
		
	}

	protected function postProcess() {
		// validate
		try {
			$this->_validate();
		} catch (\MyApp\Exception\InvalidEmail $e) {
			// echo $e->getMessage();
			// exit;
			$this->setErrors('email', $e->getMessage());
		} catch (\MyApp\Exception\InvalidPassword $e) {
			// echo $e->getMessage();
			// exit;
			$this->setErrors('password', $e->getMessage());
		}

		// エラーでもemailを残す
		$this->setValues('email', $_POST['email']); // key, value

		if ($this->hasError()) {
			return;
		} else {
			// create user
			try {
				$userModel = new \MyApp\Model\User();
				$userModel->create([
					'email' => $_POST['email'],
					'password' => $_POST['password']
				]);
			} catch (\MyApp\Exception\DuplicateEmail $e) {
				// email重複
				$this->setErrors('email', $e->getMessage());
				return;
			}

			// redirect to login
			// header('Location: ' . SITE_URL . '/login.php');
			header('Location: ./login.php');
			exit;

		}


	}

	private function _validate(){
		// tokenが一致するか確認
		if (!isset($_POST['token']) || $_POST['token'] !== $_SESSION['token']) {
			echo "Invalid token";
			exit;
		}
		if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			throw new \MyApp\Exception\InvalidEmail();
		}
		if (!preg_match('/\A[a-zA-Z0-9]+\z/', $_POST['password'])) {
			throw new \MyApp\Exception\InvalidPassword();
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

*/

