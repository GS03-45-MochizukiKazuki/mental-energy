<?php


namespace MyApp\Controller;

class Index extends \MyApp\Controller{
	
	public function run(){
		// not login
		if (!$this->isLoggedIn()) {
			header('Location: ' . SITE_URL . '/login.php');
			// header('Location: ./login.php');
			exit;
		}

		// get users info
	    $userModel = new \MyApp\Model\User();
	    $this->setValues('users', $userModel->findAll());
		
	}
}