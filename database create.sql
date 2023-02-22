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