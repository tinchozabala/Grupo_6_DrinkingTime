CREATE DATABASE IF NOT EXISTS `drinkingtime_db` /*!40100 DEFAULT CHARACTER SET latin1*/;
USE `drinkingtime_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: drinkingtime_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Andes'),(2,'Patagonia'),(3,'Campari'),(4,'Noemia'),(5,'Trumpeter'),(6,'Absolut'),(7,'Smirnoff'),(8,'Beefeater'),(9,'Chivas Regal'),(10,'Gin Bombay'),(11,'Jonhnie Walker');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Promociones'),(2,'Cervezas'),(4,'Vinos'),(5,'Aperitivos'),(6,'Espirituosas');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'admin@admin.com','Administrador','$2b$10$KC7d6CJm7vUgocbrf160rOEw8jAICdEIW9UebHYnd8anrJkwTerWS',NULL,NULL,NULL,'1993-01-02','2021-02-09 16:04:43','2021-02-09 16:04:43',NULL),(2,'crespo@leble.com.ar','Trabajo','$2b$10$ZT/c03zs.Bjs6jID7hcy4OgycSf4wEjRs6JqQNdq9I4jQB/QGTKZC',NULL,NULL,NULL,'1980-02-03','2021-02-09 16:14:54','2021-02-09 16:14:54',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ipa Andina',2,1,'Cerveza Andes - variedad Ipa, por 6 unidades.',560,'andes-ipa.jpg',NULL,NULL,NULL),(2,'24.7',2,2,'Cerveza Patagonia - variedad 24.7, por 6 unidades.',800,'patagonia247.jpg',NULL,NULL,NULL),(3,'Campari',5,3,'Campari, por 6 unidades',1200,'campari-435197_p.jpg',NULL,NULL,NULL),(4,'Chivas',1,9,'Chivas Regal 12 anos',1800,'chivas.jpeg',NULL,NULL,NULL),(5,'Cerveza Negra',2,1,'Cerveza Andes - variedad Negra, por 6 unidades.',580,'andes-negra.jpg',NULL,NULL,NULL),(6,'Absolut',6,6,'Absolut original, por 6 unidades.',2750,'imagen-1611338992757.jpeg',NULL,NULL,NULL),(7,'Beefeater',6,8,'Gin Beefeater, por 6 unidades.',3250,'beefeter.jpeg',NULL,NULL,NULL),(8,'Noemia',4,4,'Noemia - variedad Malbec, por 6 unidades',2650,'vino-noemia3.jpg',NULL,NULL,NULL),(9,'Smirnoff Watermelon',5,7,'Vodka smirnoff sabor sandia',450,'smirnoff-sandia.jpeg',NULL,NULL,NULL),(10,'Trumpeter',4,5,'Trumpeter - variedad Malbec, por 6 unidades',2890,'vino-trumpete5.webp',NULL,NULL,NULL),(11,'Vodka Absolut',6,6,'Vodka Absolut classic 750ml',1300,'imagen-1611338992757.jpeg',NULL,NULL,NULL),(12,'Gin Bombay',5,10,'Gin Bombay Sapphire, 750ml',1200,'gin bombay.jpeg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--  
-- Dumping data for table `sells`
--

LOCK TABLES `sells` WRITE;
/*!40000 ALTER TABLE `sells` DISABLE KEYS */;
/*!40000 ALTER TABLE `sells` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'drinkingtime_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-10 17:09:34
