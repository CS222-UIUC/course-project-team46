DROP DATABASE IF EXISTS `restaurant`;
CREATE DATABASE `restaurant`; 
USE `restaurant`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `restaurant_list` (
  `restaurant_id` int NOT NULL,
  `restaurant_name` varchar(45) NOT NULL,
  `restaurant_rating` double NOT NULL,
  `restaurant_type` varchar(20) NOT NULL,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE KEY `id_UNIQUE` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `restaurant_list` VALUES (1,"Subway", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (2,"Taco Bell", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (3,"McDonald's", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (4,"Sushi ichiban", 3.0,"Janpense food");
INSERT INTO `restaurant_list` VALUES (5,"Kung Fu Tea", 3.0,"Chinese food");
INSERT INTO `restaurant_list` VALUES (6,"EVO cafe", 3.0,"Chinese");
INSERT INTO `restaurant_list` VALUES (7,"Jimmy John's", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (8,"Yogi", 3.0,"Korean food");
INSERT INTO `restaurant_list` VALUES (9,"Panda Express", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (10,"Pokelab", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (11,"Signature Grill", 3.0,"Grill");
INSERT INTO `restaurant_list` VALUES (12,"Oozu Ramen", 3.0,"Japenese food");
INSERT INTO `restaurant_list` VALUES (13,"Ambar india Restaurant", 3.0,"India food");
INSERT INTO `restaurant_list` VALUES (14,"Mid-Summer Lounge", 3.0,"Chineses food");
INSERT INTO `restaurant_list` VALUES (15,"Insomnia Cookies", 3.0,"snack");
INSERT INTO `restaurant_list` VALUES (16,"Sakanaya", 3.0,"Japenese food");
INSERT INTO `restaurant_list` VALUES (17,"Bangkok Thai And Pho", 3.0,"Thai food");
INSERT INTO `restaurant_list` VALUES (18,"Jurassic Grill Champaign", 3.0,"Grill");
INSERT INTO `restaurant_list` VALUES (19,"C-U LaLa Noodle", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (20,"Potbelly Sandwich Shop", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (21,"Forage Kitchen", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (22,"Fat Sandwich Company", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (23,"Chipotle Mexican Grill", 3.0,"Grill");
INSERT INTO `restaurant_list` VALUES (24,"Tacool Tacos", 3.0,"Mexican food");
INSERT INTO `restaurant_list` VALUES (25,"Lai Lai Work", 3.0,"Chinese food");
INSERT INTO `restaurant_list` VALUES (26,"Four", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (27,"Jipbap Taste", 3.0,"Korean food");
INSERT INTO `restaurant_list` VALUES (28,"Meatheads", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (29,"Wendy's", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (30,"Chick-fil-A", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (31,"Burger King", 3.0,"fastfood");
INSERT INTO `restaurant_list` VALUES (32,"D.P. Dough", 3.0,"fastfood");


CREATE TABLE `restaurant_dishes` (
  `dish_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `dish_name` varchar(45) NOT NULL,
  `dish_price` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dish_id`),
  UNIQUE KEY `dish_id_UNIQUE` (`dish_id`),
  KEY `restaurant_id_idx` (`restaurant_id`),
  CONSTRAINT `restaurant_id` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant_list` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci





