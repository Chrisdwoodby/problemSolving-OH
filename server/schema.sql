DROP DATABASE IF EXISTS mydb;

CREATE DATABASE mydb;

USE mydb;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  itemName VARCHAR(100)
);

INSERT INTO items (itemName) VALUES ('banana');