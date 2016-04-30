<?php
/*
全体の名前空間を MyApp にしつつ、Controller とか Model のクラスはサブ名前空間に配置していきます。

MyApp\Controller\Index
-> lib/Controller/Index.php
*/

spl_autoload_register(function($class){
	$prefix = 'MyApp\\';
	if (strpos($class, $prefix) === 0) {
		$className = substr($class, strlen($prefix));
		$classFilePath = __DIR__ . '/../lib/' . str_replace('\\', '/', $className) . '.php';
		if (file_exists($classFilePath)) {
			require $classFilePath;
		}
	}
});



/*
spl_autoload_register
http://php.net/manual/ja/function.spl-autoload-register.php

strpos
http://phpspot.net/php/man/php/function.strpos.html



*/