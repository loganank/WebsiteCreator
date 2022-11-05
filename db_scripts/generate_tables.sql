#CREATE DATABASE IF NOT EXISTS cs354;
USE cs354;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pdfs;
DROP TABLE IF EXISTS mp3s;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS stats;

CREATE TABLE IF NOT EXISTS users(
 user_id INT AUTO_INCREMENT,
 actualname VARCHAR(100) NOT NULL,
 username VARCHAR(50) NOT NULL,
 pass VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL,
 about_me VARCHAR(1000),
 PRIMARY KEY(user_id)
);
CREATE TABLE IF NOT EXISTS resumes(
 resume_id INT AUTO_INCREMENT,
 resume_location VARCHAR(100) NOT NULL,
 user_id INT NOT NULL,
 date_added DATE,
 PRIMARY KEY (resume_id),
 FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS videos(
 vid_id INT AUTO_INCREMENT,
 vid_location VARCHAR(100) NOT NULL,
 user_id INT NOT NULL,
 date_added DATE,
 PRIMARY KEY (vid_id),
 FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE IF NOT EXISTS pics(
 pic_id INT AUTO_INCREMENT,
 pic_name VARCHAR(80) NOT NULL,
 user_id INT NOT NULL,
 date_added DATE,
 PRIMARY KEY (pic_id),
 FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS skills(
skill_id INT AUTO_INCREMENT,
user_id INT NOT NULL,
skill_description VARCHAR(1000),
PRIMARY KEY (skill_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);