-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurant_list`
--

DROP TABLE IF EXISTS `restaurant_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_list` (
  `restaurant_id` int NOT NULL,
  `restaurant_name` varchar(45) NOT NULL,
  `restaurant_rating` double NOT NULL,
  `restaurant_type` varchar(20) NOT NULL,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE KEY `id_UNIQUE` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_list`
--

LOCK TABLES `restaurant_list` WRITE;
/*!40000 ALTER TABLE `restaurant_list` DISABLE KEYS */;
INSERT INTO `restaurant_list` VALUES (1,'Subway',3,'fastfood'),(2,'Taco Bell',3,'fastfood'),(3,'McDonald\'s',3,'fastfood'),(4,'Sushi ichiban',3,'Janpense food'),(5,'Kung Fu BBQ',3,'Chinese food'),(6,'EVO cafe',3,'Chinese'),(7,'Jimmy John\'s',3,'fastfood'),(8,'Yogi',3,'Korean food'),(9,'Panda Express',3,'fastfood'),(10,'Pokelab',3,'fastfood'),(11,'Signature Grill',3,'Grill'),(12,'Oozu Ramen',3,'Japenese food'),(13,'Ambar india Restaurant',3,'India food'),(14,'Mid-Summer Lounge',3,'Chineses food'),(15,'Insomnia Cookies',3,'snack'),(16,'Sakanaya',3,'Japenese food'),(17,'Bangkok Thai And Pho',3,'Thai food'),(18,'Jurassic Grill Champaign',3,'Grill'),(19,'C-U LaLa Noodle',3,'fastfood'),(20,'Potbelly Sandwich Shop',3,'fastfood'),(21,'Forage Kitchen',3,'fastfood'),(22,'Fat Sandwich Company',3,'fastfood'),(23,'Chipotle Mexican Grill',3,'Grill'),(24,'Tacool Tacos',3,'Mexican food'),(25,'Lai Lai Work',3,'Chinese food'),(26,'Four',3,'fastfood'),(27,'Jipbap Taste',3,'Korean food'),(28,'Meatheads',3,'fastfood'),(29,'Wendy\'s',3,'fastfood'),(30,'Chick-fil-A',3,'fastfood'),(31,'Burger King',3,'fastfood'),(32,'D.P. Dough',3,'fastfood');
/*!40000 ALTER TABLE `restaurant_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-08 17:42:40
