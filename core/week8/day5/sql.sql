# Selecciona base de datos con el comando USE
USE sakila;
USE thebridge;
USE tienda;

# Creamos bases de datos con el comando CREATE DATABASE
CREATE DATABASE perros;

# Consultas de selección 
SELECT * FROM fabricante;
SELECT * FROM producto;

SELECT nombre, precio FROM producto;

# Funciones https://www.w3schools.com/mysql/func_mysql_concat.asp
SELECT UPPER(nombre), precio FROM producto;

SELECT CONCAT(nombre, " ------- " , FLOOR(precio), "€") FROM producto;

# Filtrar con la clausula WHERE
SELECT nombre, precio FROM producto WHERE nombre = "Disco duro SATA3 1TB";
SELECT nombre, precio FROM producto WHERE precio >= 86.99 AND precio <= 202;

# Con el operador BETWEEN
SELECT nombre, precio FROM producto WHERE precio BETWEEN 86.99 AND 202;

# Con la clausula ORDER los ordenamos

SELECT nombre, precio FROM producto WHERE precio BETWEEN 86.99 AND 202 ORDER BY nombre DESC;
SELECT * FROM producto ORDER BY codigo_fabricante ASC, precio DESC;


# FUNCIONES PARA CALCULOS ACUMULATIVOS SOBRE TODOS LOS REGISTROS
SELECT COUNT(*) FROM producto;

SELECT COUNT(*) FROM producto WHERE codigo_fabricante = 2;

SELECT AVG(precio) AS MediaPrecio FROM producto;

SELECT MIN(precio) AS MediaPrecio FROM producto;

# Operador LIKE

SELECT * FROM producto WHERE nombre LIKE "Disco%";
SELECT * FROM producto WHERE nombre LIKE "P% _2_";
SELECT * FROM producto WHERE nombre LIKE "Disco%1%TB";
SELECT * FROM producto WHERE nombre LIKE "Disco%duro%1%TB";
SELECT * FROM producto WHERE nombre LIKE "Monitor 2_ LED Full HD";

# Subconsultas
SELECT * FROM producto WHERE Precio < (SELECT AVG(precio) FROM producto);

# Tipos de conusltas segun lo que devuelven
##  Una fila con más de una columna

SELECT * FROM producto where codigo = 3;
##  un conjunto de registros
SELECT * FROM producto;
##  Una sola columna de una sola fila

SELECT count(*) FROM producto;
SELECT * FROM producto WHERE codigo_fabricante IN (SELECT codigo FROM fabricante WHERE codigo > 3);

## SUbconsultas anidadas
SELECT * FROM producto 
WHERE codigo_fabricante IN (
	SELECT codigo FROM fabricante WHERE codigo IN (
		SELECT codigo FROM fabricante WHERE codigo >= 2)
    ) 
ORDER BY precio ASC;


# SELECT * FROM LISTAS LEFT JOIN TAREAS ON LISTAS.ID = IDLISTA;
SELECT * FROM fabricante WHERE codigo IN (1, 2, 3) UNION SELECT * FROM fabricante WHERE codigo IN (4, 5, 6);

SELECT 
P.nombre AS Producto, 
F.nombre AS Fabricante 
FROM 
producto AS P RIGHT JOIN fabricante AS F 
ON F.codigo = codigo_fabricante;

SELECT 
P.nombre AS Producto, 
F.nombre AS Fabricante 
FROM 
producto AS P INNER JOIN fabricante AS F 
ON F.codigo = codigo_fabricante;


INSERT INTO producto (codigo, nombre, precio, codigo_fabricante) VALUES (12, "Matasuegras 2000", 300, 6);
UPDATE producto SET precio = 20 WHERE codigo = 12;

DELETE FROM producto WHERE codigo > (SELECT  1 + 1);

CREATE TABLE personas
  (
  IDPersona int NOT NULL AUTO_INCREMENT,
  Nombre varchar(255) NOT NULL,
  ciudad varchar(255),
  PRIMARY KEY (IDPersona)
  );
  
  
INSERT INTO personas (Nombre) VALUES ("Carlos");
INSERT INTO personas (Nombre) VALUES ("Ana");

INSERT INTO personas (Nombre) VALUES ("Julio"), ("Ramiro"), ("Ángela");
INSERT INTO personas (ciudad) VALUES ("Badajoz")
