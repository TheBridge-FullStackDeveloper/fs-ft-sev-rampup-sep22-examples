CREATE DATABASE IF NOT EXISTS catedrales;
USE catedrales;
CREATE TABLE catedrales (
  IDCatedral serial NOT NULL PRIMARY KEY, 
  name varchar(255) NOT NULL, 
  city varchar(255) NOT NULL 
);

INSERT INTO catedrales (name, city) VALUES 
("Catedral de Sevilla", "Sevilla"),
("Notre dame", "París"),
("San Pedro", "Vaticano");

