<?php

// Controller共通の処理

namespace MyApp;

class Controller {

	private $_errors;
	private $_values; // エラーが出た時 emailが消えないようにする

	public function __construct() {
		// CSRF　推測されにくい文字列を生成
		if (!isset($_SESSION['token'])) {
			$_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(16));
		}
		$this->_errors = new \stdClass();
		$this->_values = new \stdClass();
	}

	protected function setValues($key, $value) {
		$this->_values->$key = $value;
	}

	public function getValues() {
		return $this->_values;
	}

	protected function setErrors($key, $error) {
		$this->_errors->$key = $error;
	}

	public function getErrors($key) {
		return isset($this->_errors->$key) ?  $this->_errors->$key : '';
	}

	protected function hasError() {
		return !empty(get_object_vars($this->_errors));
	}

	protected function isLoggedIn() {
	// $_SESSION['me']
		return isset($_SESSION['me']) && !empty($_SESSION['me']);
	}

	public function me() {
		return $this->isLoggedIn() ? $_SESSION['me'] : null;
	}


}


/*
stdClass()
http://phpspot.net/php/pgPHP%E6%A8%99%E6%BA%96%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AEstdClass%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.html

bin2hex(openssl_random_pseudo_bytes(16))
http://php.net/manual/ja/function.openssl-random-pseudo-bytes.php


*/