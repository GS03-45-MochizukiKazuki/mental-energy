mysql -u root;

create database dotinstall_sns_php;

grant all on dotinstall_sns_php.* to dbuser@localhost identified by 'aaa';

use dotinstall_sns_php


create table an (
	id int not null auto_increment primary key,
	genre_id int(255),
	user_id int(255),
	scene varchar(255),
	action varchar(255),
	archive_flag int(1) not null,
	indate int(255)
)

create table genre (
	id int not null auto_increment primary key,
	name varchar(255),
	user_id int(255)
)

create table users (
	id int not null auto_increment primary key,
	email varchar(255) unique,
	password varchar(255),
	created datetime,
	modified datetime
)

desc users;


php -S 192.168.33.10:8888 -t public_html/



SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id ORDER BY an.genre_id;


SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name, users.id AS user_id, users.email FROM (an INNER JOIN genre ON an.genre_id = genre.id) INNER JOIN users ON an.user_id = users.id ORDER BY an.id;