DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,4) NOT NULL,
stock_quantity TINYINT NOT NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (043, "Gray Sweater", "Women's", 29.97, 51);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (042, "Ripped Denim", "Women's", 45.97, 24);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (012, "Satin Pillowcase", "Home", 24.97, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (011, "Floral Pillowcase", "Home", 8.97, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (033, "Blue Sweater", "Men's", 39.97, 45);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (032, "Acid Wash Denim", "Men's", 55.97, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (005, "Gray Blocks Shower Curtain", "Bath", 12.97, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (006, "Tan Rug Set", "Bath", 25.97, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (091, "Chicken Ramen", "Food", 1.97, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (093, "Peach Applesauce", "Food", 3.97, 75);
products