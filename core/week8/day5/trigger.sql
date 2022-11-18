DELIMITER //
CREATE TRIGGER insertar BEFORE UPDATE 
ON producto
       FOR EACH ROW
       BEGIN
           IF NEW.precio < 100 THEN
               SET NEW.precio = 200;
           END IF;
       END//
       
DELIMITER ; 
DROP TRIGGER insertar;


INSERT INTO producto (codigo, nombre, precio, codigo_fabricante) VALUES (12, "Matasuegras 2000", 300, 6);

SELECT * from producto;

UPDATE producto SET precio = 20 WHERE codigo = 12;