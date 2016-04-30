mysql -u root;

create database dotinstall_sns_php;

grant all on dotinstall_sns_php.* to dbuser@localhost identified by 'kt11n0m8';

use dotinstall_sns_php

create table users (
	id int not null auto_increment primary key,
	email varchar(255) unique,
	password varchar(255),
	created datetime,
	modified datetime
);

desc users;


php -S 192.168.33.10:8888 -t public_html/
