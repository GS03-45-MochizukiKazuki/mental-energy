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
	lat decimal(9,6),
	lng decimal(9,6),
	indate datetime(6)
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


INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (1, 1, '6:00', '起床', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (1, 1, '12:00', '昼寝', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (1, 1, '15分眠れない', '30分読書', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (2, 1, '13:00（昼食）', '事務所近くの蕎麦屋', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (2, 1, '起床から15:00まで', 'コーヒー', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (3, 1, 'アウター', '黒のジャケット + 白のYシャツ', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (3, 1, 'パンツ', 'Levi’sのジーンズ', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (3, 1, '靴', 'new balance M99X シリーズ', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (4, 1, '通勤（行き）', '英会話リスニング', 0, now());
INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (4, 1, '通勤（帰り）', '読書', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (5, 1, '生放送', '基本見ない。見たい番組は録画する。', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (6, 1, 'DMなし', 'チェックは1時間に1回（3分以内）まで', 0, now());

INSERT INTO an (genre_id, user_id, scene, action, archive_flag, indate) VALUES (7, 1, '煮詰まったとき', 'スタバxxx店でxxxを飲む', 0, now());



desc users;


php -S 192.168.33.10:8888 -t public_html/



SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name FROM an INNER JOIN genre ON an.genre_id = genre.id ORDER BY an.genre_id;


SELECT an.id, an.scene, an.action, an.archive_flag, genre.id AS genre_id, genre.name, users.id AS user_id, users.email FROM (an INNER JOIN genre ON an.genre_id = genre.id) INNER JOIN users ON an.user_id = users.id ORDER BY an.id;


-- 7日以内のデータを取得
SELECT * FROM an WHERE an.user_id = {$user_id} AND (indate > (NOW() - INTERVAL 7 DAY))
