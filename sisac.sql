-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: sisac
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `armamentos`
--

DROP TABLE IF EXISTS `armamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serial` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `data_validade` date DEFAULT NULL,
  `data_baixa` date DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `modeloId` int DEFAULT NULL,
  `armamentoTipoId` int DEFAULT NULL,
  `armamentoCalibreId` int DEFAULT NULL,
  `armamentoTamanhoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `quantidade_disponivel` int NOT NULL,
  `observacoes` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_62a6232cae661da6d78e35a5d2` (`serial`,`subunidadeId`),
  KEY `FK_2d37ad56fba78c6f0f3934405ce` (`subunidadeId`),
  KEY `FK_026eb721c1d2273ef0457de1745` (`modeloId`),
  KEY `FK_116270ab73dab61ada682dc2d49` (`armamentoTipoId`),
  KEY `FK_16b49a3e9eebd81942f14123fd7` (`armamentoCalibreId`),
  KEY `FK_b00e7cc081b5962b75073487f22` (`armamentoTamanhoId`),
  KEY `FK_a053b9e483a8a67d93f0f320f1b` (`createdById`),
  KEY `FK_2acde3a0de8c947f70bed5cb6c9` (`updatedById`),
  CONSTRAINT `FK_026eb721c1d2273ef0457de1745` FOREIGN KEY (`modeloId`) REFERENCES `modelos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_116270ab73dab61ada682dc2d49` FOREIGN KEY (`armamentoTipoId`) REFERENCES `armamentos_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_16b49a3e9eebd81942f14123fd7` FOREIGN KEY (`armamentoCalibreId`) REFERENCES `armamentos_calibres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_2acde3a0de8c947f70bed5cb6c9` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_2d37ad56fba78c6f0f3934405ce` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_a053b9e483a8a67d93f0f320f1b` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b00e7cc081b5962b75073487f22` FOREIGN KEY (`armamentoTamanhoId`) REFERENCES `armamentos_tamanhos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos`
--

LOCK TABLES `armamentos` WRITE;
/*!40000 ALTER TABLE `armamentos` DISABLE KEYS */;
INSERT INTO `armamentos` VALUES (1,'SIG0001',1,NULL,NULL,'2024-04-22 08:59:39.951000','2024-05-12 21:03:54.000000',1,1,1,1,NULL,7,7,1,NULL),(2,'SIG0002',1,NULL,NULL,'2024-04-22 09:08:56.392000','2024-04-24 15:52:33.983000',1,1,1,1,NULL,7,NULL,1,NULL),(3,'SIG0003',1,NULL,NULL,'2024-04-22 09:10:43.470000','2024-04-24 15:52:33.986000',1,1,2,5,NULL,7,NULL,1,NULL),(4,'SIG0004',1,NULL,'2024-04-26','2024-04-22 09:13:32.186946','2024-05-12 11:41:47.000000',1,1,1,1,NULL,7,7,1,NULL),(6,'CBC0001',900,'2024-04-16',NULL,'2024-04-25 23:48:34.470000','2024-04-30 09:20:28.000000',1,2,6,1,NULL,7,7,900,NULL),(7,'COL001',1,NULL,NULL,'2024-04-30 10:27:04.888830','2024-04-30 10:27:04.888830',1,1,3,NULL,3,7,NULL,1,NULL),(8,'CBC0001',1,NULL,NULL,'2024-05-01 13:40:51.412000','2024-05-07 09:07:34.000000',2,1,1,1,NULL,17,7,1,NULL);
/*!40000 ALTER TABLE `armamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armamentos_calibres`
--

DROP TABLE IF EXISTS `armamentos_calibres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos_calibres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_690628aedfb1e40e46d5a46af2f` (`createdById`),
  KEY `FK_ac55a3c7a04a4ffe1facf9fc496` (`updatedById`),
  CONSTRAINT `FK_690628aedfb1e40e46d5a46af2f` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ac55a3c7a04a4ffe1facf9fc496` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos_calibres`
--

LOCK TABLES `armamentos_calibres` WRITE;
/*!40000 ALTER TABLE `armamentos_calibres` DISABLE KEYS */;
INSERT INTO `armamentos_calibres` VALUES (1,'Cal. .40','2024-04-22 07:40:06.656159','2024-04-22 15:31:12.000000',7,7),(2,'Cal. 9mm  ','2024-04-22 07:40:15.143809','2024-04-22 07:51:49.000000',7,7),(3,'Cal. 12','2024-04-22 07:40:27.551916','2024-04-22 07:40:27.551916',7,NULL),(4,'Cal. 762','2024-04-22 07:52:03.877256','2024-04-22 16:15:47.000000',7,7),(5,'Cal. 38','2024-04-22 07:52:12.052753','2024-04-22 07:52:12.052753',7,NULL);
/*!40000 ALTER TABLE `armamentos_calibres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armamentos_emprestimos`
--

DROP TABLE IF EXISTS `armamentos_emprestimos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos_emprestimos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_emprestimo` datetime DEFAULT NULL,
  `data_devolucao` datetime DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `policialId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `cautela` tinyint DEFAULT NULL,
  `observacoes` text,
  PRIMARY KEY (`id`),
  KEY `FK_d41877057882c08e25975ceb44a` (`subunidadeId`),
  KEY `FK_38cd02267e5dd68957db21376b4` (`policialId`),
  KEY `FK_06ba33aed2cac1edfecefde3c32` (`createdById`),
  KEY `FK_356f2a0ca644a6b899126b80a7d` (`updatedById`),
  CONSTRAINT `FK_06ba33aed2cac1edfecefde3c32` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_356f2a0ca644a6b899126b80a7d` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_38cd02267e5dd68957db21376b4` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_d41877057882c08e25975ceb44a` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos_emprestimos`
--

LOCK TABLES `armamentos_emprestimos` WRITE;
/*!40000 ALTER TABLE `armamentos_emprestimos` DISABLE KEYS */;
INSERT INTO `armamentos_emprestimos` VALUES (30,'2024-04-25 10:15:04','2024-04-25 15:21:41','2024-04-25 10:15:03.747000','2024-04-25 15:21:23.737000',1,1,7,7,NULL,NULL),(31,'2024-04-25 10:57:59','2024-04-25 15:27:35','2024-04-25 10:57:58.784000','2024-04-25 10:57:58.784000',1,3,7,7,NULL,NULL),(32,'2024-04-25 15:30:33','2024-04-25 15:31:59','2024-04-25 15:30:32.618000','2024-04-25 15:30:32.618000',1,1,7,7,NULL,NULL),(33,'2024-04-25 15:33:08','2024-04-25 16:52:13','2024-04-25 15:33:08.182000','2024-04-25 16:24:18.000000',1,1,7,7,NULL,NULL),(34,'2024-04-25 18:08:31','2024-04-25 20:47:47','2024-04-25 18:08:30.736000','2024-04-25 18:08:30.736000',1,1,7,7,NULL,NULL),(36,'2024-04-25 23:49:03','2024-04-26 09:46:08','2024-04-25 23:49:03.245000','2024-04-25 23:49:03.245000',1,1,7,7,NULL,NULL),(37,'2024-04-26 16:02:03','2024-04-26 18:53:39','2024-04-26 16:02:02.895000','2024-04-26 16:02:02.895000',1,6,7,7,NULL,NULL),(38,'2024-04-29 09:54:13','2024-04-29 09:54:38','2024-04-29 09:54:13.195000','2024-04-29 09:54:13.195000',1,1,7,7,NULL,NULL),(39,'2024-04-29 23:21:38','2024-04-29 23:22:03','2024-04-29 23:21:37.753000','2024-04-29 23:21:37.753000',1,1,7,7,NULL,NULL),(40,'2024-05-03 19:14:15','2024-05-03 20:01:52','2024-05-03 19:14:14.562000','2024-05-03 19:14:14.562000',1,1,7,7,NULL,NULL),(41,'2024-05-03 19:15:32','2024-05-03 20:46:54','2024-05-03 19:15:32.119000','2024-05-03 19:46:28.000000',1,1,7,7,1,NULL),(42,'2024-05-03 20:27:04','2024-05-03 20:46:58','2024-05-03 20:27:03.889000','2024-05-03 20:27:03.889000',1,3,7,7,NULL,NULL),(43,'2024-05-03 20:47:31','2024-05-04 16:32:55','2024-05-03 20:47:31.168000','2024-05-03 20:47:47.000000',1,1,7,7,NULL,NULL),(44,'2024-05-05 20:11:22','2024-05-06 09:53:33','2024-05-05 20:11:22.310000','2024-05-05 20:11:22.310000',1,1,7,7,NULL,NULL),(45,'2024-05-06 10:42:08','2024-05-06 10:42:51','2024-05-06 10:42:07.987000','2024-05-06 10:42:07.987000',1,1,7,7,1,NULL),(46,'2024-05-11 23:47:53','2024-05-12 11:11:32','2024-05-11 23:47:52.517000','2024-05-12 00:29:44.000000',1,1,7,7,NULL,NULL),(47,'2024-05-12 11:12:03','2024-05-12 20:04:19','2024-05-12 11:12:03.446000','2024-05-12 11:12:03.446000',1,1,7,7,NULL,NULL),(49,'2024-05-13 10:49:42','2024-05-13 10:50:16','2024-05-13 10:49:42.401000','2024-05-13 10:49:42.401000',1,1,7,7,NULL,NULL),(50,'2024-05-29 14:18:19','2024-05-29 21:48:15','2024-05-29 14:18:18.960000','2024-05-29 14:18:18.960000',1,1,7,7,NULL,NULL),(51,'2024-05-29 14:47:21','2024-05-29 14:47:41','2024-05-29 14:47:20.899000','2024-05-29 14:47:20.899000',2,7,24,24,NULL,NULL);
/*!40000 ALTER TABLE `armamentos_emprestimos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armamentos_emprestimos_itens`
--

DROP TABLE IF EXISTS `armamentos_emprestimos_itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos_emprestimos_itens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `quantidade_devolucao` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `armamentoId` int DEFAULT NULL,
  `armamentoEmprestimoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_b75fbea93a963f4bed781d164b` (`armamentoId`,`armamentoEmprestimoId`),
  KEY `FK_6929321d50844994234e483cf10` (`createdById`),
  KEY `FK_f35b22c9b3009a35cd46502fadc` (`updatedById`),
  KEY `FK_7fb9b6f40ad26caf70f0c55be81` (`armamentoEmprestimoId`),
  CONSTRAINT `FK_6929321d50844994234e483cf10` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_7c04f6307d564cda9985f09abdb` FOREIGN KEY (`armamentoId`) REFERENCES `armamentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7fb9b6f40ad26caf70f0c55be81` FOREIGN KEY (`armamentoEmprestimoId`) REFERENCES `armamentos_emprestimos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_f35b22c9b3009a35cd46502fadc` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos_emprestimos_itens`
--

LOCK TABLES `armamentos_emprestimos_itens` WRITE;
/*!40000 ALTER TABLE `armamentos_emprestimos_itens` DISABLE KEYS */;
INSERT INTO `armamentos_emprestimos_itens` VALUES (29,1,1,'2024-04-25 10:15:03.756000','2024-04-25 10:15:03.756000',1,30,7,7),(31,1,1,'2024-04-25 10:57:58.804000','2024-04-25 10:57:58.804000',2,31,7,7),(32,1,1,'2024-04-25 14:48:45.687000','2024-04-25 14:48:45.687000',3,31,7,7),(33,1,1,'2024-04-25 15:30:32.629000','2024-04-25 15:30:32.629000',1,32,7,7),(35,1,1,'2024-04-25 15:30:32.632000','2024-04-25 15:30:32.632000',2,32,7,7),(36,1,1,'2024-04-25 15:33:08.195000','2024-04-25 15:33:08.195000',1,33,7,7),(38,1,1,'2024-04-25 18:08:30.745000','2024-04-25 18:08:30.745000',1,34,7,7),(43,1,1,'2024-04-25 23:49:03.260000','2024-04-25 23:49:03.260000',1,36,7,7),(44,30,30,'2024-04-25 23:49:03.263000','2024-04-25 23:49:03.263000',6,36,7,7),(45,1,1,'2024-04-26 16:02:02.908000','2024-04-26 16:02:02.908000',1,37,7,7),(46,30,30,'2024-04-26 16:02:02.909000','2024-04-26 16:02:02.909000',6,37,7,7),(47,1,1,'2024-04-29 09:54:13.218000','2024-04-29 09:54:13.218000',1,38,7,7),(48,60,59,'2024-04-29 09:54:13.220000','2024-04-29 09:54:13.220000',6,38,7,7),(50,1,1,'2024-04-29 23:21:37.776000','2024-04-29 23:21:37.776000',1,39,7,7),(51,1,1,'2024-05-03 19:14:14.602000','2024-05-03 19:14:14.602000',1,40,7,7),(52,30,30,'2024-05-03 19:14:14.605000','2024-05-03 19:14:14.605000',6,40,7,7),(53,1,1,'2024-05-03 19:15:32.139000','2024-05-03 19:15:32.139000',2,41,7,7),(54,45,45,'2024-05-03 19:15:32.142000','2024-05-03 19:15:32.142000',6,41,7,7),(55,5,5,'2024-05-03 20:27:03.914000','2024-05-03 20:27:03.914000',6,42,7,7),(56,1,1,'2024-05-03 20:47:31.180000','2024-05-03 20:47:31.180000',1,43,7,7),(57,45,45,'2024-05-03 20:47:31.181000','2024-05-03 20:47:31.181000',6,43,7,7),(58,1,1,'2024-05-05 20:11:22.341000','2024-05-05 20:11:22.341000',1,44,7,7),(59,40,40,'2024-05-05 20:11:22.346000','2024-05-05 20:11:22.346000',6,44,7,7),(60,1,1,'2024-05-06 10:42:08.020000','2024-05-06 10:42:08.020000',1,45,7,7),(61,30,29,'2024-05-06 10:42:08.023000','2024-05-06 10:42:08.023000',6,45,7,7),(62,1,1,'2024-05-11 23:47:52.536000','2024-05-11 23:47:52.536000',1,46,7,7),(63,1,1,'2024-05-12 11:12:03.458000','2024-05-12 11:12:03.458000',1,47,7,7),(64,1,1,'2024-05-12 11:12:03.461000','2024-05-12 11:12:03.461000',2,47,7,7),(66,1,1,'2024-05-13 10:49:42.424000','2024-05-13 10:49:42.424000',1,49,7,7),(67,99,0,'2024-05-13 10:49:42.428000','2024-05-13 10:49:42.428000',6,49,7,7),(68,30,30,'2024-05-29 14:18:18.978000','2024-05-29 14:18:18.978000',6,50,7,7),(69,1,1,'2024-05-29 14:18:18.979000','2024-05-29 14:18:18.979000',1,50,7,7),(71,1,1,'2024-05-29 14:47:35.650000','2024-05-29 14:47:35.650000',8,51,24,24);
/*!40000 ALTER TABLE `armamentos_emprestimos_itens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armamentos_tamanhos`
--

DROP TABLE IF EXISTS `armamentos_tamanhos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos_tamanhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_21ee1feb58a418ff5fb1ddfd2a5` (`createdById`),
  KEY `FK_4072ace9cc3a8d41d5443e8260d` (`updatedById`),
  CONSTRAINT `FK_21ee1feb58a418ff5fb1ddfd2a5` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_4072ace9cc3a8d41d5443e8260d` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos_tamanhos`
--

LOCK TABLES `armamentos_tamanhos` WRITE;
/*!40000 ALTER TABLE `armamentos_tamanhos` DISABLE KEYS */;
INSERT INTO `armamentos_tamanhos` VALUES (1,'2024-04-22 07:50:42.026442','2024-04-22 08:05:14.000000',7,7,'Tam. PP'),(2,'2024-04-22 07:51:01.944019','2024-04-22 08:05:22.000000',7,7,'Tam. P'),(3,'2024-04-22 07:51:07.446643','2024-04-22 08:05:30.000000',7,7,'Tam. M'),(4,'2024-04-22 07:51:12.959796','2024-04-22 08:05:39.000000',7,7,'Tam. G'),(5,'2024-04-22 07:51:19.587653','2024-04-22 08:05:48.000000',7,7,'Tam. GG');
/*!40000 ALTER TABLE `armamentos_tamanhos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armamentos_tipos`
--

DROP TABLE IF EXISTS `armamentos_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armamentos_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `calibres` tinyint DEFAULT NULL,
  `tamanhos` tinyint DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_289ca4e6f050ffbe7a05f7d350` (`nome`),
  KEY `FK_889626a204e6391a7a2fe0218e1` (`createdById`),
  KEY `FK_827b83771f1786f78e746bed257` (`updatedById`),
  CONSTRAINT `FK_827b83771f1786f78e746bed257` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_889626a204e6391a7a2fe0218e1` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armamentos_tipos`
--

LOCK TABLES `armamentos_tipos` WRITE;
/*!40000 ALTER TABLE `armamentos_tipos` DISABLE KEYS */;
INSERT INTO `armamentos_tipos` VALUES (1,'Pistola',1,NULL,'2024-04-22 07:52:34.900497','2024-04-22 07:52:34.900497',7,NULL),(2,'Revolver',1,NULL,'2024-04-22 07:52:43.412472','2024-04-22 07:52:43.412472',7,NULL),(3,'Colete Balístico',NULL,1,'2024-04-22 07:52:53.006625','2024-04-22 07:52:53.006625',7,NULL),(4,'Algema',NULL,NULL,'2024-04-22 07:53:00.953572','2024-04-22 07:53:00.953572',7,NULL),(5,'Tonfa',NULL,NULL,'2024-04-22 07:53:07.297895','2024-04-22 07:53:07.297895',7,NULL),(6,'Munição',1,NULL,'2024-04-24 16:25:47.447128','2024-04-24 16:25:47.447128',7,NULL);
/*!40000 ALTER TABLE `armamentos_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `estadoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_1e8a181414bd407c1490da96e9` (`nome`,`estadoId`),
  KEY `FK_3b2e818c7f3b7ff67878432bd14` (`estadoId`),
  KEY `FK_bee95eb967b93ec275add5f40da` (`createdById`),
  KEY `FK_653f46f7ad22ac5416065f41bec` (`updatedById`),
  CONSTRAINT `FK_3b2e818c7f3b7ff67878432bd14` FOREIGN KEY (`estadoId`) REFERENCES `estados` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_653f46f7ad22ac5416065f41bec` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_bee95eb967b93ec275add5f40da` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidades`
--

LOCK TABLES `cidades` WRITE;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` VALUES (1,'Fortaleza','','2024-04-15 23:10:48.984226','2024-04-15 23:10:48.984226',1,7,NULL),(2,'12323','123','2024-04-16 14:13:36.236916','2024-04-16 14:13:36.236916',3,7,NULL);
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cores`
--

DROP TABLE IF EXISTS `cores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_1e691209d64db79e049fcd9540` (`nome`),
  KEY `FK_4826a5e4abd81139195d4c7be5c` (`createdById`),
  KEY `FK_5fe7c86d76b696b0f3ca0b73c68` (`updatedById`),
  CONSTRAINT `FK_4826a5e4abd81139195d4c7be5c` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_5fe7c86d76b696b0f3ca0b73c68` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cores`
--

LOCK TABLES `cores` WRITE;
/*!40000 ALTER TABLE `cores` DISABLE KEYS */;
INSERT INTO `cores` VALUES (1,'2024-04-26 16:34:42.917458','2024-04-27 01:00:38.000000',7,7,'Preto'),(2,'2024-04-26 16:34:51.914217','2024-04-27 01:00:27.000000',7,7,'Branco');
/*!40000 ALTER TABLE `cores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crusos`
--

DROP TABLE IF EXISTS `crusos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crusos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(10) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_5328e506a558c24d96e987a7a4` (`nome`),
  UNIQUE KEY `IDX_cd8cb3ed7b19e3b70b2c33c7ba` (`abreviatura`),
  KEY `FK_4ec4471ab79c9f7454dc44c57dd` (`createdById`),
  KEY `FK_b5a2cdc3c7cf15401255ada5251` (`updatedById`),
  CONSTRAINT `FK_4ec4471ab79c9f7454dc44c57dd` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b5a2cdc3c7cf15401255ada5251` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crusos`
--

LOCK TABLES `crusos` WRITE;
/*!40000 ALTER TABLE `crusos` DISABLE KEYS */;
INSERT INTO `crusos` VALUES (1,'Curso de Segurança de Autoridades','CSAG','2024-05-06 13:55:55.488135','2024-05-06 13:56:03.000000',7,7);
/*!40000 ALTER TABLE `crusos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `paisId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9b527c28d68d286799cb0e1719` (`nome`),
  KEY `FK_1998661e2b9fef6c80eef5ecaf3` (`paisId`),
  KEY `FK_288046d0636799ef5cb65f3975b` (`createdById`),
  KEY `FK_9aea27487d100f6eac95611943c` (`updatedById`),
  CONSTRAINT `FK_1998661e2b9fef6c80eef5ecaf3` FOREIGN KEY (`paisId`) REFERENCES `paises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_288046d0636799ef5cb65f3975b` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9aea27487d100f6eac95611943c` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Ceará','CE','2024-04-15 22:49:18.605513','2024-04-15 22:49:18.605513',1,7,NULL),(2,'Piauí','PI','2024-04-15 22:52:38.984597','2024-04-15 22:52:38.984597',1,7,NULL),(3,'213123','123','2024-04-16 14:13:21.949824','2024-04-16 14:13:21.949824',2,7,NULL);
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `graduacoes`
--

DROP TABLE IF EXISTS `graduacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `graduacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a31e2a453f0fd077cf49fb0c73` (`nome`),
  KEY `FK_5c8107bc41d818319f7365b6db6` (`createdById`),
  KEY `FK_6b54799458d24572c15ca6679d3` (`updatedById`),
  CONSTRAINT `FK_5c8107bc41d818319f7365b6db6` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_6b54799458d24572c15ca6679d3` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graduacoes`
--

LOCK TABLES `graduacoes` WRITE;
/*!40000 ALTER TABLE `graduacoes` DISABLE KEYS */;
INSERT INTO `graduacoes` VALUES (1,'Soldado','SD','2024-04-15 13:33:42.017826','2024-04-15 13:33:42.017826',7,NULL),(2,'Cabo ','CB','2024-04-15 13:34:02.897392','2024-04-15 13:34:45.000000',7,7);
/*!40000 ALTER TABLE `graduacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` int NOT NULL,
  `table` varchar(50) NOT NULL,
  `fk` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `object_old` text,
  `object` text NOT NULL,
  `mensagem` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a1196a1956403417fe3a0343390` (`userId`),
  CONSTRAINT `FK_a1196a1956403417fe3a0343390` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manutencoes_tipos`
--

DROP TABLE IF EXISTS `manutencoes_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manutencoes_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2e97f360d7365e6419d6a5b0759` (`createdById`),
  KEY `FK_489c34a34a965e0f799d2504737` (`updatedById`),
  CONSTRAINT `FK_2e97f360d7365e6419d6a5b0759` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_489c34a34a965e0f799d2504737` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manutencoes_tipos`
--

LOCK TABLES `manutencoes_tipos` WRITE;
/*!40000 ALTER TABLE `manutencoes_tipos` DISABLE KEYS */;
INSERT INTO `manutencoes_tipos` VALUES (1,'Suspenção','2024-04-26 18:44:57.505080','2024-04-26 18:44:57.505080',7,NULL),(2,'Elétrica','2024-04-26 18:45:07.979512','2024-04-26 18:45:07.979512',7,NULL);
/*!40000 ALTER TABLE `manutencoes_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `armamento` tinyint DEFAULT NULL,
  `logistica` tinyint DEFAULT NULL,
  `transporte` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_5ee9bb385014f1635b709c1507` (`nome`),
  KEY `FK_2bda74cc630181ae56001500385` (`createdById`),
  KEY `FK_3c4b7288acbf94bbdc5d332df02` (`updatedById`),
  CONSTRAINT `FK_2bda74cc630181ae56001500385` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_3c4b7288acbf94bbdc5d332df02` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Honda','HND','2024-04-18 11:49:07.794004','2024-04-18 20:38:09.000000',7,7,NULL,NULL,1),(2,'Sigsauer','SIG','2024-04-22 07:53:40.086358','2024-04-22 07:53:40.086358',7,NULL,1,NULL,NULL),(3,'CBC  ','CBC','2024-04-24 16:25:02.088700','2024-04-24 16:25:02.088700',7,NULL,1,NULL,NULL),(4,'Marca',NULL,'2024-05-07 16:02:47.666334','2024-05-07 16:02:47.666334',7,NULL,NULL,1,NULL),(5,'MArca 2',NULL,'2024-05-07 16:02:55.097055','2024-05-07 16:02:55.097055',7,NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais`
--

DROP TABLE IF EXISTS `materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serial` varchar(100) DEFAULT NULL,
  `quantidade` int NOT NULL,
  `quantidade_disponivel` int NOT NULL,
  `data_validade` date DEFAULT NULL,
  `data_baixa` date DEFAULT NULL,
  `observacoes` text,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `modeloId` int DEFAULT NULL,
  `materialTipoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_faff882c692a84bf714129fb1a` (`serial`,`subunidadeId`),
  KEY `FK_91c56609f0e61fac542d11aba7f` (`subunidadeId`),
  KEY `FK_4548643493a4b3c3e21b0aa8ac5` (`modeloId`),
  KEY `FK_ac54a0466e6ee376e6c24ec0081` (`materialTipoId`),
  KEY `FK_156f2c8b1407b82bb3ad78440b9` (`createdById`),
  KEY `FK_be44a3891959d302d493a9351d9` (`updatedById`),
  CONSTRAINT `FK_156f2c8b1407b82bb3ad78440b9` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_4548643493a4b3c3e21b0aa8ac5` FOREIGN KEY (`modeloId`) REFERENCES `modelos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_91c56609f0e61fac542d11aba7f` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ac54a0466e6ee376e6c24ec0081` FOREIGN KEY (`materialTipoId`) REFERENCES `materiais_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_be44a3891959d302d493a9351d9` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais`
--

LOCK TABLES `materiais` WRITE;
/*!40000 ALTER TABLE `materiais` DISABLE KEYS */;
INSERT INTO `materiais` VALUES (1,'basdib',1,1,'2024-05-12','2024-05-11',NULL,'2024-05-11 20:32:49.866000','2024-05-12 21:04:11.000000',1,4,1,7,7),(2,NULL,40,40,'2024-05-16',NULL,NULL,'2024-05-11 20:33:04.404000','2024-05-12 19:56:22.647000',1,5,2,7,7);
/*!40000 ALTER TABLE `materiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo`
--

DROP TABLE IF EXISTS `materiais_consumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serial` varchar(100) DEFAULT NULL,
  `quantidade` int NOT NULL,
  `quantidade_alerta` int DEFAULT NULL,
  `data_validade` date DEFAULT NULL,
  `data_baixa` date DEFAULT NULL,
  `observacoes` text,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `modeloId` int DEFAULT NULL,
  `materialConsumoTipoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_1dc180c2025e420ea394d40aaf` (`serial`,`subunidadeId`),
  KEY `FK_9e18beccd9fa6410c7b56319f77` (`subunidadeId`),
  KEY `FK_a88d4ac4f8b1397c8bbc547a6ef` (`modeloId`),
  KEY `FK_af326199cee28438921aca6618f` (`materialConsumoTipoId`),
  KEY `FK_9b6f0ea1eb241a28c1deda30f64` (`createdById`),
  KEY `FK_b6d9e36e9af5b16c5c4868b810b` (`updatedById`),
  CONSTRAINT `FK_9b6f0ea1eb241a28c1deda30f64` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9e18beccd9fa6410c7b56319f77` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_a88d4ac4f8b1397c8bbc547a6ef` FOREIGN KEY (`modeloId`) REFERENCES `modelos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_af326199cee28438921aca6618f` FOREIGN KEY (`materialConsumoTipoId`) REFERENCES `materiais_consumo_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b6d9e36e9af5b16c5c4868b810b` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo`
--

LOCK TABLES `materiais_consumo` WRITE;
/*!40000 ALTER TABLE `materiais_consumo` DISABLE KEYS */;
INSERT INTO `materiais_consumo` VALUES (1,'jknasa',170,20,NULL,NULL,NULL,'2024-05-07 16:03:38.707000','2024-05-12 21:47:45.000000',1,4,1,7,7),(2,'snqjw',100,160,NULL,NULL,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nisi eros. Integer auctor lacus finibus sagittis elementum. Ut iaculis est nec imperdiet tempus. Vestibulum mattis dui at enim volutpat interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pulvinar felis vitae eros fringilla, et convallis purus bibendum. Vestibulum tempus eget quam ut rutrum. Cras luctus, felis id semper maximus, eros mi mattis lacus, quis facilisis nisi lorem non eros. Cras tempor, enim ut luctus hendrerit, ex risus dictum lacus, in molestie metus nibh ac odio. Duis scelerisque nulla fermentum arcu maximus imperdiet. Donec venenatis libero eu tellus aliquet vehicula. Aliquam porttitor suscipit risus, vitae sollicitudin est posuere sit amet. Donec placerat nisl sit amet odio elementum aliquet.</p><p>Donec id urna metus. Integer porttitor risus sit amet turpis convallis, quis porta eros imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam egestas consectetur commodo. Vivamus imperdiet consequat ex, id dictum est pharetra quis. Aliquam sit amet blandit elit. Sed iaculis lectus vitae nisl venenatis, ut mattis elit blandit. Ut urna nulla, viverra eu aliquam id, volutpat in lorem. Phasellus at est ex.</p>','2024-05-07 21:42:52.647000','2024-05-13 09:48:51.000000',1,5,1,7,7);
/*!40000 ALTER TABLE `materiais_consumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo_entradas`
--

DROP TABLE IF EXISTS `materiais_consumo_entradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo_entradas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_entrada` datetime DEFAULT NULL,
  `observacoes` text,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_9a1adeaeee8b3b800fa85211d6d` (`subunidadeId`),
  KEY `FK_36833e8166f8cbdc3c196004d19` (`userId`),
  KEY `FK_9340cf36ed6559d332f0d69b22f` (`createdById`),
  KEY `FK_e2b1279904dd068d056f83f2aaa` (`updatedById`),
  CONSTRAINT `FK_36833e8166f8cbdc3c196004d19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9340cf36ed6559d332f0d69b22f` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9a1adeaeee8b3b800fa85211d6d` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_e2b1279904dd068d056f83f2aaa` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo_entradas`
--

LOCK TABLES `materiais_consumo_entradas` WRITE;
/*!40000 ALTER TABLE `materiais_consumo_entradas` DISABLE KEYS */;
INSERT INTO `materiais_consumo_entradas` VALUES (3,'2024-05-09 22:33:09',NULL,'2024-05-09 22:33:09.201526','2024-05-09 22:33:09.201526',1,7,7,NULL),(4,'2024-05-12 20:06:34',NULL,'2024-05-12 20:06:34.318512','2024-05-12 20:06:34.318512',1,7,7,NULL);
/*!40000 ALTER TABLE `materiais_consumo_entradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo_entradas_itens`
--

DROP TABLE IF EXISTS `materiais_consumo_entradas_itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo_entradas_itens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `materialConsumoId` int DEFAULT NULL,
  `materialConsumoEntradaId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9ab07979dcc8d1baa0d2360e0b` (`materialConsumoId`,`materialConsumoEntradaId`),
  KEY `FK_df5bb6bee7a5714cc26eae9e90f` (`createdById`),
  KEY `FK_5ef3920fa47fc301001283f387e` (`updatedById`),
  KEY `FK_2d312ae12202a740b6bf2bac2a8` (`materialConsumoEntradaId`),
  CONSTRAINT `FK_2d312ae12202a740b6bf2bac2a8` FOREIGN KEY (`materialConsumoEntradaId`) REFERENCES `materiais_consumo_entradas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_5ef3920fa47fc301001283f387e` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_82cc46ecf2b482e6c80100d38ec` FOREIGN KEY (`materialConsumoId`) REFERENCES `materiais_consumo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_df5bb6bee7a5714cc26eae9e90f` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo_entradas_itens`
--

LOCK TABLES `materiais_consumo_entradas_itens` WRITE;
/*!40000 ALTER TABLE `materiais_consumo_entradas_itens` DISABLE KEYS */;
INSERT INTO `materiais_consumo_entradas_itens` VALUES (8,30,'2024-05-09 22:33:09.224932','2024-05-09 22:33:09.224932',2,3,7,NULL),(9,50,'2024-05-12 20:06:34.343743','2024-05-12 20:06:34.343743',1,4,7,NULL),(10,50,'2024-05-12 20:06:34.344604','2024-05-12 20:06:34.344604',2,4,7,NULL);
/*!40000 ALTER TABLE `materiais_consumo_entradas_itens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo_saidas`
--

DROP TABLE IF EXISTS `materiais_consumo_saidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo_saidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_saida` datetime DEFAULT NULL,
  `observacoes` text,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_06d87882fcab3447431bfa5b5e6` (`subunidadeId`),
  KEY `FK_a84bf10b3abfbe2f6eacd7b24a2` (`userId`),
  KEY `FK_358ceeb1eb3ea5e6d2d4a6aafb1` (`createdById`),
  KEY `FK_1e9555f8994f4c7474800a7774f` (`updatedById`),
  CONSTRAINT `FK_06d87882fcab3447431bfa5b5e6` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_1e9555f8994f4c7474800a7774f` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_358ceeb1eb3ea5e6d2d4a6aafb1` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_a84bf10b3abfbe2f6eacd7b24a2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo_saidas`
--

LOCK TABLES `materiais_consumo_saidas` WRITE;
/*!40000 ALTER TABLE `materiais_consumo_saidas` DISABLE KEYS */;
INSERT INTO `materiais_consumo_saidas` VALUES (7,'2024-05-09 20:12:17',NULL,'2024-05-09 20:12:17.472859','2024-05-09 20:12:17.472859',1,7,7,NULL),(8,'2024-05-12 20:02:25',NULL,'2024-05-12 20:02:25.277208','2024-05-12 20:02:25.277208',1,22,7,NULL),(9,'2024-05-12 20:31:41',NULL,'2024-05-12 20:31:40.955852','2024-05-12 20:31:40.955852',1,7,7,NULL),(10,'2024-05-12 20:31:55',NULL,'2024-05-12 20:31:54.787398','2024-05-12 20:31:54.787398',1,7,7,NULL),(11,'2024-05-12 20:32:08',NULL,'2024-05-12 20:32:07.700745','2024-05-12 20:32:07.700745',1,7,7,NULL);
/*!40000 ALTER TABLE `materiais_consumo_saidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo_saidas_itens`
--

DROP TABLE IF EXISTS `materiais_consumo_saidas_itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo_saidas_itens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `materialConsumoId` int DEFAULT NULL,
  `materialConsumoSaidaId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_71b3f7263cdb1aa3c001f2527f` (`materialConsumoId`,`materialConsumoSaidaId`),
  KEY `FK_f42ae0aa411f13719609f25f685` (`materialConsumoSaidaId`),
  KEY `FK_848af0c9da69fd120f6969aa523` (`createdById`),
  KEY `FK_a3a657920edbeb12fe19650013a` (`updatedById`),
  CONSTRAINT `FK_126fc18f004f91bfbed049fe94c` FOREIGN KEY (`materialConsumoId`) REFERENCES `materiais_consumo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_848af0c9da69fd120f6969aa523` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_a3a657920edbeb12fe19650013a` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_f42ae0aa411f13719609f25f685` FOREIGN KEY (`materialConsumoSaidaId`) REFERENCES `materiais_consumo_saidas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo_saidas_itens`
--

LOCK TABLES `materiais_consumo_saidas_itens` WRITE;
/*!40000 ALTER TABLE `materiais_consumo_saidas_itens` DISABLE KEYS */;
INSERT INTO `materiais_consumo_saidas_itens` VALUES (11,10,'2024-05-09 20:12:17.492515','2024-05-09 20:12:17.492515',2,7,7,NULL),(12,2,'2024-05-09 20:15:05.160164','2024-05-09 20:15:05.160164',1,7,7,NULL),(13,20,'2024-05-12 20:02:25.296532','2024-05-12 20:02:25.296532',1,8,7,NULL),(14,30,'2024-05-12 20:31:40.975591','2024-05-12 20:31:40.975591',1,9,7,NULL),(15,10,'2024-05-12 20:31:54.803804','2024-05-12 20:31:54.803804',2,10,7,NULL),(16,90,'2024-05-12 20:32:07.715484','2024-05-12 20:32:07.715484',2,11,7,NULL);
/*!40000 ALTER TABLE `materiais_consumo_saidas_itens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_consumo_tipos`
--

DROP TABLE IF EXISTS `materiais_consumo_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_consumo_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6179c912fe1f46d2a2f464b7097` (`createdById`),
  KEY `FK_5134776466be72a69d0ad4e9ae8` (`updatedById`),
  CONSTRAINT `FK_5134776466be72a69d0ad4e9ae8` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_6179c912fe1f46d2a2f464b7097` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_consumo_tipos`
--

LOCK TABLES `materiais_consumo_tipos` WRITE;
/*!40000 ALTER TABLE `materiais_consumo_tipos` DISABLE KEYS */;
INSERT INTO `materiais_consumo_tipos` VALUES (1,'Resma A4','2024-05-07 15:58:00.373270','2024-05-07 15:58:10.000000',7,7);
/*!40000 ALTER TABLE `materiais_consumo_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_policiais`
--

DROP TABLE IF EXISTS `materiais_policiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_policiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_emprestimo` datetime DEFAULT NULL,
  `data_devolucao` datetime DEFAULT NULL,
  `observacoes` text,
  `cautela` tinyint DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `policialId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6d7e2ab46b17e741b73dca3cac9` (`subunidadeId`),
  KEY `FK_343b73eb6926b3ea100c8f59edf` (`policialId`),
  KEY `FK_492cd79e029c2a933676656f47b` (`createdById`),
  KEY `FK_84163624b884df9a531938b01a6` (`updatedById`),
  CONSTRAINT `FK_343b73eb6926b3ea100c8f59edf` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_492cd79e029c2a933676656f47b` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_6d7e2ab46b17e741b73dca3cac9` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_84163624b884df9a531938b01a6` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_policiais`
--

LOCK TABLES `materiais_policiais` WRITE;
/*!40000 ALTER TABLE `materiais_policiais` DISABLE KEYS */;
INSERT INTO `materiais_policiais` VALUES (5,'2024-05-11 23:08:57','2024-05-11 23:09:10',NULL,NULL,'2024-05-11 23:08:57.318000','2024-05-11 23:08:57.318000',1,1,7,7),(6,'2024-05-11 23:11:15','2024-05-11 23:11:45',NULL,1,'2024-05-11 23:11:14.726000','2024-05-11 23:11:14.726000',1,1,7,7),(7,'2024-05-11 23:19:47','2024-05-11 23:20:12','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus euismod sem posuere euismod. Donec quis pretium arcu, ac sollicitudin nibh. Ut scelerisque semper mi, non accumsan augue dictum laoreet. Donec quis mattis dolor. Sed et quam sit amet turpis posuere ullamcorper. Nam tristique posuere tellus a faucibus. Aenean velit eros, varius sit amet rutrum efficitur, facilisis quis velit. Phasellus egestas elementum convallis. Phasellus nec metus ac ante eleifend tempor at vel erat. Ut a mollis nisi.</p><p>Pellentesque vel enim et urna imperdiet molestie. Nunc vestibulum eros sit amet justo fringilla ultrices. Vestibulum a urna vitae nulla scelerisque laoreet vel eget nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras purus nunc, efficitur quis metus tempus, ornare vestibulum erat. Vestibulum accumsan eros at leo lobortis, vel ultrices neque laoreet. Aenean sit amet vehicula enim. Integer efficitur orci sit amet est varius pharetra. Nullam nisl leo, efficitur a vulputate quis, volutpat at nunc. Duis imperdiet turpis velit, in vehicula nunc euismod eget.</p><div><br></div><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus euismod sem posuere euismod. Donec quis pretium arcu, ac sollicitudin nibh. Ut scelerisque semper mi, non accumsan augue dictum laoreet. Donec quis mattis dolor. Sed et quam sit amet turpis posuere ullamcorper. Nam tristique posuere tellus a faucibus. Aenean velit eros, varius sit amet rutrum efficitur, facilisis quis velit. Phasellus egestas elementum convallis. Phasellus nec metus ac ante eleifend tempor at vel erat. Ut a mollis nisi.</p><p>Pellentesque vel enim et urna imperdiet molestie. Nunc vestibulum eros sit amet justo fringilla ultrices. Vestibulum a urna vitae nulla scelerisque laoreet vel eget nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras purus nunc, efficitur quis metus tempus, ornare vestibulum erat. Vestibulum accumsan eros at leo lobortis, vel ultrices neque laoreet. Aenean sit amet vehicula enim. Integer efficitur orci sit amet est varius pharetra. Nullam nisl leo, efficitur a vulputate quis, volutpat at nunc. Duis imperdiet turpis velit, in vehicula nunc euismod eget.</p></div><div><br></div>',1,'2024-05-11 23:19:46.845000','2024-05-11 23:19:46.845000',1,1,7,7),(8,'2024-05-11 23:55:14','2024-05-11 23:55:35',NULL,NULL,'2024-05-11 23:55:13.587000','2024-05-11 23:55:13.587000',1,1,7,7),(9,'2024-05-12 10:51:33','2024-05-12 19:55:36',NULL,NULL,'2024-05-12 10:51:33.017000','2024-05-12 10:51:33.017000',1,1,7,7),(10,'2024-05-12 19:56:47','2024-05-12 19:57:00',NULL,NULL,'2024-05-12 19:56:46.572000','2024-05-12 19:56:46.572000',1,1,7,7),(11,'2024-05-12 19:57:29','2024-05-12 19:57:44',NULL,NULL,'2024-05-12 19:57:28.726000','2024-05-12 19:57:28.726000',1,1,7,7);
/*!40000 ALTER TABLE `materiais_policiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_policiais_itens`
--

DROP TABLE IF EXISTS `materiais_policiais_itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_policiais_itens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `quantidade_devolucao` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `materialId` int DEFAULT NULL,
  `materialPolicialId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_151d32ee02905208dc4efc3368` (`materialId`,`materialPolicialId`),
  KEY `FK_af965370e499faa29fcb50c315f` (`materialPolicialId`),
  KEY `FK_193bb54757f34f2ce5228c4e499` (`createdById`),
  KEY `FK_74a0b8af9aa0f3955b576ba0ad5` (`updatedById`),
  CONSTRAINT `FK_193bb54757f34f2ce5228c4e499` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_5de24b5905b584e2a871d3ff9a9` FOREIGN KEY (`materialId`) REFERENCES `materiais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_74a0b8af9aa0f3955b576ba0ad5` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_af965370e499faa29fcb50c315f` FOREIGN KEY (`materialPolicialId`) REFERENCES `materiais_policiais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_policiais_itens`
--

LOCK TABLES `materiais_policiais_itens` WRITE;
/*!40000 ALTER TABLE `materiais_policiais_itens` DISABLE KEYS */;
INSERT INTO `materiais_policiais_itens` VALUES (6,1,NULL,'2024-05-11 23:08:57.324343','2024-05-11 23:08:57.324343',1,5,7,NULL),(7,10,NULL,'2024-05-11 23:08:57.324775','2024-05-11 23:08:57.324775',2,5,7,NULL),(8,1,1,'2024-05-11 23:11:14.738000','2024-05-11 23:11:14.738000',1,6,7,7),(9,10,9,'2024-05-11 23:11:24.658000','2024-05-11 23:11:24.658000',2,6,7,7),(10,9,8,'2024-05-11 23:19:46.859000','2024-05-11 23:19:46.859000',2,7,7,7),(11,8,8,'2024-05-11 23:55:13.597000','2024-05-11 23:55:13.597000',2,8,7,7),(12,8,8,'2024-05-12 10:51:33.037000','2024-05-12 10:51:33.037000',2,9,7,7),(13,8,8,'2024-05-12 19:56:46.588000','2024-05-12 19:56:46.588000',2,10,7,7),(14,8,0,'2024-05-12 19:57:28.742000','2024-05-12 19:57:28.742000',2,11,7,7);
/*!40000 ALTER TABLE `materiais_policiais_itens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiais_tipos`
--

DROP TABLE IF EXISTS `materiais_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3e872353c34088bfaf07c0b431c` (`createdById`),
  KEY `FK_9f4733850cd97efc8eea98ae21a` (`updatedById`),
  CONSTRAINT `FK_3e872353c34088bfaf07c0b431c` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9f4733850cd97efc8eea98ae21a` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiais_tipos`
--

LOCK TABLES `materiais_tipos` WRITE;
/*!40000 ALTER TABLE `materiais_tipos` DISABLE KEYS */;
INSERT INTO `materiais_tipos` VALUES (1,'Radio Comunicador','2024-05-11 20:31:06.796366','2024-05-11 20:31:06.796366',7,NULL),(2,'Cone ','2024-05-11 20:31:12.737686','2024-05-11 20:31:12.737686',7,NULL),(3,'Grade de proteção','2024-05-11 20:31:28.557210','2024-05-11 20:31:28.557210',7,NULL);
/*!40000 ALTER TABLE `materiais_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos`
--

DROP TABLE IF EXISTS `modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `marcaId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a210b3fc9ec8f73d7d414c51db` (`nome`,`marcaId`),
  KEY `FK_9fad062a5dedf47ce2b173d9e16` (`marcaId`),
  KEY `FK_ed7b59b852baa36e6d1158efbfe` (`createdById`),
  KEY `FK_b02a03d226d2421751e51aa3a83` (`updatedById`),
  CONSTRAINT `FK_9fad062a5dedf47ce2b173d9e16` FOREIGN KEY (`marcaId`) REFERENCES `marcas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b02a03d226d2421751e51aa3a83` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ed7b59b852baa36e6d1158efbfe` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos`
--

LOCK TABLES `modelos` WRITE;
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` VALUES (1,'P320 ','P320','2024-04-22 07:58:00.705963','2024-04-22 07:59:06.000000',2,7,7),(2,'Ogival',NULL,'2024-04-24 16:25:15.151187','2024-04-24 16:25:15.151187',3,7,NULL),(3,'Africa Twin',NULL,'2024-04-27 00:59:36.731242','2024-04-27 00:59:45.000000',1,7,7),(4,'Modelo',NULL,'2024-05-07 16:03:10.158971','2024-05-07 16:03:10.158971',4,7,NULL),(5,'Modelo 2',NULL,'2024-05-07 16:03:16.466485','2024-05-07 16:03:16.466485',5,7,NULL);
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oficinas`
--

DROP TABLE IF EXISTS `oficinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oficinas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone1` varchar(11) DEFAULT NULL,
  `telefone2` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `gerente` varchar(100) DEFAULT NULL,
  `rua` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `cidadeId` int DEFAULT NULL,
  `subunidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_f83bc5510a10fd576e5198abcf` (`nome`,`subunidadeId`),
  KEY `FK_c32b74a82c7ce4b065aa635deae` (`cidadeId`),
  KEY `FK_9234b8631969fb651234d3a9fa1` (`subunidadeId`),
  KEY `FK_84e1c5d1125c59089804747c32e` (`createdById`),
  KEY `FK_30f9c201b93feead1ae6a912042` (`updatedById`),
  CONSTRAINT `FK_30f9c201b93feead1ae6a912042` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_84e1c5d1125c59089804747c32e` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_9234b8631969fb651234d3a9fa1` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_c32b74a82c7ce4b065aa635deae` FOREIGN KEY (`cidadeId`) REFERENCES `cidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oficinas`
--

LOCK TABLES `oficinas` WRITE;
/*!40000 ALTER TABLE `oficinas` DISABLE KEYS */;
INSERT INTO `oficinas` VALUES (1,'Moto Show','89848948948','43423424234',NULL,'Carlos',NULL,NULL,NULL,NULL,'2024-04-26 18:08:35.889084','2024-04-26 18:08:50.000000',NULL,1,7,7);
/*!40000 ALTER TABLE `oficinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paises`
--

DROP TABLE IF EXISTS `paises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `abreviatura` varchar(5) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_5b690f8c2f7fc4dc48d1342a45` (`nome`),
  KEY `FK_d95206e6eb3fdb63d937bf460fc` (`createdById`),
  KEY `FK_fe46692ba1bb543004cc83c3dac` (`updatedById`),
  CONSTRAINT `FK_d95206e6eb3fdb63d937bf460fc` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_fe46692ba1bb543004cc83c3dac` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paises`
--

LOCK TABLES `paises` WRITE;
/*!40000 ALTER TABLE `paises` DISABLE KEYS */;
INSERT INTO `paises` VALUES (1,'Brasil','BR','2024-04-15 22:24:24.671263','2024-04-15 22:24:24.671263',7,NULL),(2,'Argentina','ARG','2024-04-16 14:13:08.399225','2024-04-22 16:16:10.000000',7,7),(3,'ygasdb','basjs','2024-04-25 17:43:39.462776','2024-04-25 17:43:39.462776',7,NULL),(4,'jsbjdbsad','jjj','2024-04-25 17:43:45.889023','2024-04-25 17:43:45.889023',7,NULL),(5,'jnsjsand','sjsjs','2024-04-25 17:43:52.608792','2024-04-25 17:43:52.608792',7,NULL),(6,'jbjas','111','2024-04-25 17:43:59.271468','2024-04-25 17:43:59.271468',7,NULL),(7,'kjasbkjxbs','jwj','2024-04-25 17:44:05.296112','2024-04-25 17:44:05.296112',7,NULL),(8,'bskjdb','111','2024-04-25 17:44:21.175422','2024-04-25 17:44:21.175422',7,NULL),(9,'abjaa','aa','2024-04-25 17:44:28.066938','2024-04-25 17:44:28.066938',7,NULL),(10,'abjba','j2b2','2024-04-25 17:44:35.915806','2024-04-25 17:44:35.915806',7,NULL);
/*!40000 ALTER TABLE `paises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrimonios`
--

DROP TABLE IF EXISTS `patrimonios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrimonios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serial` varchar(50) DEFAULT NULL,
  `tombo` varchar(50) NOT NULL,
  `data_baixa` date DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `setorId` int DEFAULT NULL,
  `patrimonioTipoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `observacoes` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_3fa70e0824bc4511b59a096b88` (`tombo`),
  KEY `FK_88189829e269397e602d5416a44` (`setorId`),
  KEY `FK_3008c2f76f635bc0e2c243a3c92` (`patrimonioTipoId`),
  KEY `FK_1af09e344ac0bac23193e03a765` (`createdById`),
  KEY `FK_e14fc80607001d9f7ae6a78dd80` (`updatedById`),
  CONSTRAINT `FK_1af09e344ac0bac23193e03a765` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_3008c2f76f635bc0e2c243a3c92` FOREIGN KEY (`patrimonioTipoId`) REFERENCES `patrimonios_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_88189829e269397e602d5416a44` FOREIGN KEY (`setorId`) REFERENCES `setores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_e14fc80607001d9f7ae6a78dd80` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrimonios`
--

LOCK TABLES `patrimonios` WRITE;
/*!40000 ALTER TABLE `patrimonios` DISABLE KEYS */;
INSERT INTO `patrimonios` VALUES (1,'892374234','CC3212','2024-04-30','2024-04-29 16:14:41.495450','2024-05-12 21:05:33.000000',1,2,7,7,'Descktop Dell I5 Torre',NULL),(2,NULL,'7onj',NULL,'2024-04-30 00:03:07.211913','2024-04-30 00:03:07.211913',3,2,7,NULL,'jnsjns',NULL),(3,NULL,'CC3211',NULL,'2024-05-03 22:57:24.178580','2024-05-03 22:57:24.178580',4,1,7,NULL,NULL,NULL),(4,NULL,'jj22323',NULL,'2024-05-29 14:28:51.772650','2024-05-29 14:28:51.772650',1,1,22,NULL,NULL,NULL);
/*!40000 ALTER TABLE `patrimonios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrimonios_tipos`
--

DROP TABLE IF EXISTS `patrimonios_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrimonios_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_c7d062dce2b48e833dee0c24c9` (`nome`),
  KEY `FK_575104f6c262724a236365d822a` (`createdById`),
  KEY `FK_379e5bd8d47a5d3025fe9b26d6c` (`updatedById`),
  CONSTRAINT `FK_379e5bd8d47a5d3025fe9b26d6c` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_575104f6c262724a236365d822a` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrimonios_tipos`
--

LOCK TABLES `patrimonios_tipos` WRITE;
/*!40000 ALTER TABLE `patrimonios_tipos` DISABLE KEYS */;
INSERT INTO `patrimonios_tipos` VALUES (1,'Mesa em L','2024-04-29 16:12:50.691885','2024-04-29 16:12:50.691885',7,NULL),(2,'Computador de mesa','2024-04-29 16:12:58.849089','2024-04-29 16:12:58.849089',7,NULL);
/*!40000 ALTER TABLE `patrimonios_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfis`
--

DROP TABLE IF EXISTS `perfis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `nome` varchar(100) NOT NULL,
  `administrador` tinyint DEFAULT NULL,
  `gestor` tinyint DEFAULT NULL,
  `relatorios` tinyint DEFAULT NULL,
  `usuarios` tinyint DEFAULT NULL,
  `usuarios_cad` tinyint DEFAULT NULL,
  `usuarios_edt` tinyint DEFAULT NULL,
  `usuarios_del` tinyint DEFAULT NULL,
  `policiais` tinyint DEFAULT NULL,
  `policiais_cad` tinyint DEFAULT NULL,
  `policiais_edt` tinyint DEFAULT NULL,
  `policiais_del` tinyint DEFAULT NULL,
  `policiais_atestados` tinyint DEFAULT NULL,
  `policiais_atestados_cad` tinyint DEFAULT NULL,
  `policiais_atestados_edt` tinyint DEFAULT NULL,
  `policiais_atestados_del` tinyint DEFAULT NULL,
  `policiais_ferias` tinyint DEFAULT NULL,
  `policiais_ferias_cad` tinyint DEFAULT NULL,
  `policiais_ferias_edt` tinyint DEFAULT NULL,
  `policiais_ferias_del` tinyint DEFAULT NULL,
  `policiais_publicacoes` tinyint DEFAULT NULL,
  `policiais_publicacoes_cad` tinyint DEFAULT NULL,
  `policiais_publicacoes_edt` tinyint DEFAULT NULL,
  `policiais_publicacoes_del` tinyint DEFAULT NULL,
  `armamentos` tinyint DEFAULT NULL,
  `armamentos_cad` tinyint DEFAULT NULL,
  `armamentos_edt` tinyint DEFAULT NULL,
  `armamentos_del` tinyint DEFAULT NULL,
  `armamentos_emprestimos` tinyint DEFAULT NULL,
  `armamentos_emprestimos_cad` tinyint DEFAULT NULL,
  `armamentos_emprestimos_edt` tinyint DEFAULT NULL,
  `armamentos_emprestimos_del` tinyint DEFAULT NULL,
  `veiculos` tinyint DEFAULT NULL,
  `veiculos_cad` tinyint DEFAULT NULL,
  `veiculos_edt` tinyint DEFAULT NULL,
  `veiculos_del` tinyint DEFAULT NULL,
  `veiculos_oficinas` tinyint DEFAULT NULL,
  `veiculos_oficinas_cad` tinyint DEFAULT NULL,
  `veiculos_oficinas_edt` tinyint DEFAULT NULL,
  `veiculos_oficinas_del` tinyint DEFAULT NULL,
  `veiculos_policiais` tinyint DEFAULT NULL,
  `veiculos_policiais_cad` tinyint DEFAULT NULL,
  `veiculos_policiais_edt` tinyint DEFAULT NULL,
  `veiculos_policiais_del` tinyint DEFAULT NULL,
  `patrimonios` tinyint DEFAULT NULL,
  `patrimonios_cad` tinyint DEFAULT NULL,
  `patrimonios_edt` tinyint DEFAULT NULL,
  `patrimonios_del` tinyint DEFAULT NULL,
  `policiais_cursos` tinyint DEFAULT NULL,
  `policiais_cursos_cad` tinyint DEFAULT NULL,
  `policiais_cursos_edt` tinyint DEFAULT NULL,
  `policiais_cursos_del` tinyint DEFAULT NULL,
  `materiais_consumo` tinyint DEFAULT NULL,
  `materiais_consumo_cad` tinyint DEFAULT NULL,
  `materiais_consumo_edt` tinyint DEFAULT NULL,
  `materiais_consumo_del` tinyint DEFAULT NULL,
  `materiais_consumo_saidas` tinyint DEFAULT NULL,
  `materiais_consumo_saidas_cad` tinyint DEFAULT NULL,
  `materiais_consumo_saidas_edt` tinyint DEFAULT NULL,
  `materiais_consumo_saidas_del` tinyint DEFAULT NULL,
  `materiais_consumo_entradas` tinyint DEFAULT NULL,
  `materiais_consumo_entradas_cad` tinyint DEFAULT NULL,
  `materiais_consumo_entradas_edt` tinyint DEFAULT NULL,
  `materiais_consumo_entradas_del` tinyint DEFAULT NULL,
  `materiais` tinyint DEFAULT NULL,
  `materiais_cad` tinyint DEFAULT NULL,
  `materiais_edt` tinyint DEFAULT NULL,
  `materiais_del` tinyint DEFAULT NULL,
  `materiais_policiais` tinyint DEFAULT NULL,
  `materiais_policiais_cad` tinyint DEFAULT NULL,
  `materiais_policiais_edt` tinyint DEFAULT NULL,
  `materiais_policiais_del` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_0e08702e416f19191cde2b5ff0` (`nome`),
  KEY `FK_bf765fa4c94a8064acb19cada23` (`createdById`),
  KEY `FK_ad62131fd4fdee7ca845924d0bc` (`updatedById`),
  CONSTRAINT `FK_ad62131fd4fdee7ca845924d0bc` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_bf765fa4c94a8064acb19cada23` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfis`
--

LOCK TABLES `perfis` WRITE;
/*!40000 ALTER TABLE `perfis` DISABLE KEYS */;
INSERT INTO `perfis` VALUES (1,'2024-04-10 12:40:59.134272','2024-05-11 22:37:37.000000',NULL,7,'Administrador',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1),(2,'2024-04-14 16:48:06.227980','2024-04-26 08:51:27.881544',NULL,7,'Gestor',NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'2024-04-16 23:52:46.651841','2024-05-06 10:37:12.000000',7,7,'Usuário',NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,'2024-05-29 14:19:43.134316','2024-05-29 14:19:43.134316',7,NULL,'Transporte',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'2024-05-29 14:20:56.648899','2024-05-29 14:20:56.648899',7,NULL,'Logistica',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1),(24,'2024-05-29 14:21:36.424501','2024-05-29 14:21:36.424501',7,NULL,'Sargenteação',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'2024-05-29 14:21:58.280518','2024-05-29 14:21:58.280518',7,NULL,'Reserva',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `perfis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policiais`
--

DROP TABLE IF EXISTS `policiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numeral` varchar(10) DEFAULT NULL,
  `nome` varchar(100) NOT NULL,
  `nome_guerra` varchar(50) NOT NULL,
  `matricula` varchar(8) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone1` varchar(11) DEFAULT NULL,
  `telefone2` varchar(11) DEFAULT NULL,
  `rua` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `boletim_inclusao` varchar(50) DEFAULT NULL,
  `boletim_apresentacao` varchar(50) DEFAULT NULL,
  `boletim_transferencia` varchar(50) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `cidadeId` int DEFAULT NULL,
  `sexoId` int DEFAULT NULL,
  `graduacaoId` int DEFAULT NULL,
  `setorId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `data_inclusao` date DEFAULT NULL,
  `data_apresentacao` date DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_0e014e43d3d4607351e3f9c1b2` (`matricula`),
  UNIQUE KEY `IDX_c2e396ce4185e9d8d20c640083` (`cpf`),
  UNIQUE KEY `IDX_50ec3aace0498dbe446df69f01` (`numeral`),
  KEY `FK_d442f2e4ce078cf9aefefce7c55` (`cidadeId`),
  KEY `FK_b931e76a3e8ac1dbfeedcf50b95` (`sexoId`),
  KEY `FK_bcc580b4115608b8b7691b2a130` (`graduacaoId`),
  KEY `FK_978a25ccaa221e5a1b197ec2790` (`setorId`),
  KEY `FK_fe41f2d9f03da94fe90270eaf80` (`createdById`),
  KEY `FK_77c2943fcf7857882966d7767ce` (`updatedById`),
  CONSTRAINT `FK_77c2943fcf7857882966d7767ce` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_978a25ccaa221e5a1b197ec2790` FOREIGN KEY (`setorId`) REFERENCES `setores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b931e76a3e8ac1dbfeedcf50b95` FOREIGN KEY (`sexoId`) REFERENCES `sexos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_bcc580b4115608b8b7691b2a130` FOREIGN KEY (`graduacaoId`) REFERENCES `graduacoes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_d442f2e4ce078cf9aefefce7c55` FOREIGN KEY (`cidadeId`) REFERENCES `cidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_fe41f2d9f03da94fe90270eaf80` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policiais`
--

LOCK TABLES `policiais` WRITE;
/*!40000 ALTER TABLE `policiais` DISABLE KEYS */;
INSERT INTO `policiais` VALUES (1,'32103','Jose de Barros Campelo Neto','Barros','30882814','05906219471','email@email.com','88999492036','88888888888','Rua nidnsis','123','iosnidsnf',NULL,'32432434','BCG11-28-2020',NULL,'2024-04-16 22:13:10.616497','2024-05-06 14:59:54.000000',1,1,1,1,7,7,'2024-04-17','2024-04-30','2024-04-17',NULL),(2,NULL,'Teste','teste','23123123','11111111111',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23123',NULL,'2024-04-22 17:55:51.996893','2024-04-29 23:42:10.000000',NULL,NULL,2,4,7,7,NULL,NULL,'2024-04-22',NULL),(3,'12211','Teste 3','teste2','73264873','82983748374',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'gsyudgasd','qweqweeqe','2024-04-25 07:38:37.908431','2024-05-06 08:23:43.000000',NULL,1,1,1,7,7,NULL,NULL,'2024-04-26',NULL),(6,NULL,'Nathalia Araujo','Nathalia','12345678','04219964398',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'wewe',NULL,'2024-04-26 09:30:28.766262','2024-04-29 23:42:05.000000',NULL,NULL,2,3,7,7,NULL,NULL,'2024-04-26',NULL),(7,NULL,'Ususario 2cpg','2cpg','12343434','12331312312',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'132132',NULL,'2024-04-26 14:25:21.730308','2024-04-26 14:25:21.730308',NULL,NULL,1,2,7,NULL,NULL,NULL,'2024-04-26',NULL),(8,NULL,'teste log','log','32424233','09839839923',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23423424',NULL,'2024-05-06 15:04:09.434593','2024-05-06 15:04:09.434593',NULL,1,1,3,7,NULL,NULL,NULL,'2024-05-06',NULL),(9,NULL,'wqeqwe','123123','21312312','12312312312',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'12312312',NULL,'2024-05-06 15:12:08.590100','2024-05-06 15:12:08.590100',NULL,1,1,1,7,NULL,NULL,NULL,'2024-05-06',NULL),(10,NULL,'qwasd','234234234234','23423423','23432423442',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'234234234',NULL,'2024-05-06 15:13:16.580311','2024-05-06 15:13:16.580311',NULL,2,1,1,7,NULL,NULL,NULL,'2024-05-07',NULL),(11,NULL,'teste cad','jxba','98377377','87887277222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'usanxjdsn',NULL,'2024-05-11 20:49:00.359692','2024-05-11 20:49:00.359692',NULL,1,1,3,7,NULL,NULL,NULL,'2024-05-11',NULL),(12,NULL,'ndjfnjdfn','21323','12312323','12121222222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'najana',NULL,'2024-05-11 20:51:44.600179','2024-05-11 20:51:44.600179',NULL,2,1,4,7,NULL,NULL,NULL,'2024-05-09',NULL),(13,NULL,'Teste subunidade','subuni','77777777','87777777777',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sadasd',NULL,'2024-05-11 20:57:21.788770','2024-05-11 20:57:21.788770',NULL,1,1,4,7,NULL,NULL,NULL,'2024-05-07',NULL),(14,NULL,'kjanjnsjkasn','lajANJSA','32333333','89273837222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'WEQWE',NULL,'2024-05-11 20:58:39.513297','2024-05-11 20:58:39.513297',NULL,2,1,1,7,NULL,NULL,NULL,'2024-05-08',NULL),(15,NULL,'Teste up pol','823728373','87277772','87892738283',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'87e8we',NULL,'2024-05-11 20:59:36.251214','2024-05-29 22:16:57.000000',NULL,3,2,3,7,7,'1907-07-08',NULL,'2024-05-08',NULL),(16,NULL,'ajnasnjasn','jbabbaba','99999999','99999999999',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jbjbjb',NULL,'2024-05-11 21:00:42.995813','2024-05-11 21:00:42.995813',NULL,1,1,2,7,NULL,'2024-05-08',NULL,'2024-05-14',NULL),(17,NULL,'666666666','6666666','66666666','66666666666',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'666666',NULL,'2024-05-11 21:02:26.124127','2024-05-11 21:02:26.124127',NULL,3,1,2,7,NULL,NULL,NULL,'2024-05-10',NULL),(18,NULL,'5555555555','55555','55555555','55555555555',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'555555',NULL,'2024-05-11 21:11:01.195287','2024-05-11 21:11:01.195287',NULL,1,1,1,7,NULL,NULL,NULL,'2024-05-08',NULL),(19,NULL,'444444444','4444444','44444444','44444444444',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'44444444',NULL,'2024-05-11 21:12:35.608347','2024-05-12 21:05:44.000000',NULL,2,1,1,7,7,NULL,NULL,'2024-05-07',NULL);
/*!40000 ALTER TABLE `policiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policiais_atestados`
--

DROP TABLE IF EXISTS `policiais_atestados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policiais_atestados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_inicial` date DEFAULT NULL,
  `dias` int NOT NULL,
  `cid` varchar(20) DEFAULT NULL,
  `hospital` varchar(100) DEFAULT NULL,
  `crm` varchar(20) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `policialId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `data_final` date DEFAULT NULL,
  `data_copem` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0256d3073eec9b7f17d89905bfe` (`policialId`),
  KEY `FK_16c24a6f1e61cc5bdfde9904c35` (`createdById`),
  KEY `FK_6678512dc4a3feecee8041a8da0` (`updatedById`),
  CONSTRAINT `FK_0256d3073eec9b7f17d89905bfe` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_16c24a6f1e61cc5bdfde9904c35` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_6678512dc4a3feecee8041a8da0` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policiais_atestados`
--

LOCK TABLES `policiais_atestados` WRITE;
/*!40000 ALTER TABLE `policiais_atestados` DISABLE KEYS */;
INSERT INTO `policiais_atestados` VALUES (13,'2024-05-01',30,NULL,NULL,NULL,'2024-05-09 20:17:10.294787','2024-05-09 20:17:10.294787',2,7,NULL,'2024-05-30',NULL),(14,'2024-05-10',20,'232',NULL,'23121','2024-05-11 23:43:52.973840','2024-05-29 14:16:52.000000',1,7,7,'2024-05-29',NULL);
/*!40000 ALTER TABLE `policiais_atestados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policiais_cursos`
--

DROP TABLE IF EXISTS `policiais_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policiais_cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carga_horaria` int DEFAULT NULL,
  `boletim` varchar(100) DEFAULT NULL,
  `data_inicial` date NOT NULL,
  `data_final` date NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `policialId` int DEFAULT NULL,
  `cursoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0d0d14fdf780b930e02ccc12499` (`policialId`),
  KEY `FK_e68a8a81b0a0deb6902a413047a` (`cursoId`),
  KEY `FK_c14249856ee8917099935fc0c14` (`createdById`),
  KEY `FK_5ec70801dc674533bac28569511` (`updatedById`),
  CONSTRAINT `FK_0d0d14fdf780b930e02ccc12499` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_5ec70801dc674533bac28569511` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_c14249856ee8917099935fc0c14` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_e68a8a81b0a0deb6902a413047a` FOREIGN KEY (`cursoId`) REFERENCES `crusos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policiais_cursos`
--

LOCK TABLES `policiais_cursos` WRITE;
/*!40000 ALTER TABLE `policiais_cursos` DISABLE KEYS */;
INSERT INTO `policiais_cursos` VALUES (3,340,'BCG001','2024-05-01','2024-05-31','2024-05-07 10:40:22.762973','2024-05-29 14:17:35.000000',1,1,7,7),(4,120,NULL,'2024-05-08','2024-05-30','2024-05-12 22:04:50.898550','2024-05-12 22:04:50.898550',2,1,7,NULL);
/*!40000 ALTER TABLE `policiais_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policiais_ferias`
--

DROP TABLE IF EXISTS `policiais_ferias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policiais_ferias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_inicial` date DEFAULT NULL,
  `dias` int NOT NULL,
  `boletim` varchar(30) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `policialId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `data_final` date DEFAULT NULL,
  `ano` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6b0f47a2750f31919037a66f0a8` (`policialId`),
  KEY `FK_f7c2415bb08a4743c8383b13a23` (`createdById`),
  KEY `FK_c7ea645ea81cddee7fdaee04855` (`updatedById`),
  CONSTRAINT `FK_6b0f47a2750f31919037a66f0a8` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_c7ea645ea81cddee7fdaee04855` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_f7c2415bb08a4743c8383b13a23` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policiais_ferias`
--

LOCK TABLES `policiais_ferias` WRITE;
/*!40000 ALTER TABLE `policiais_ferias` DISABLE KEYS */;
INSERT INTO `policiais_ferias` VALUES (12,'2024-04-01',30,'BCG0001','2024-04-25 09:37:53.944503','2024-04-25 17:17:50.000000',1,7,7,'2024-04-30',2023),(13,'2024-05-01',30,'BCG002','2024-04-25 09:38:14.520315','2024-04-25 17:27:12.000000',2,7,7,'2024-05-30',2023),(14,'2024-04-01',25,'knsajds','2024-04-25 09:58:34.431469','2024-04-26 15:53:53.000000',1,7,7,'2024-04-25',2023),(15,'2024-05-01',30,'jnwiiwnw','2024-04-30 00:03:36.639464','2024-04-30 00:03:36.639464',6,7,NULL,'2024-05-30',2034),(16,'2024-05-06',30,'fdsfsdfsd','2024-05-06 10:28:52.190781','2024-05-12 00:29:53.000000',1,7,7,'2024-06-04',2023);
/*!40000 ALTER TABLE `policiais_ferias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policiais_publicacoes`
--

DROP TABLE IF EXISTS `policiais_publicacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policiais_publicacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texto` varchar(2000) NOT NULL,
  `boletim` varchar(40) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `policialId` int DEFAULT NULL,
  `publicacaoTipoId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a77193a3f12a5f5170f4880107d` (`policialId`),
  KEY `FK_ed8d28537440ba6066bdc8328ca` (`publicacaoTipoId`),
  KEY `FK_7cbf42ce63d0c32999ed59de527` (`createdById`),
  KEY `FK_f0d3d5adfd2117bf2fa8fdb5046` (`updatedById`),
  CONSTRAINT `FK_7cbf42ce63d0c32999ed59de527` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_a77193a3f12a5f5170f4880107d` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ed8d28537440ba6066bdc8328ca` FOREIGN KEY (`publicacaoTipoId`) REFERENCES `publicacoes_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_f0d3d5adfd2117bf2fa8fdb5046` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policiais_publicacoes`
--

LOCK TABLES `policiais_publicacoes` WRITE;
/*!40000 ALTER TABLE `policiais_publicacoes` DISABLE KEYS */;
INSERT INTO `policiais_publicacoes` VALUES (1,'<font color=\"#ff0000\">Lorem ipsum dolor sit amet,</font> consectetur adipiscing elit. Sed congue, ipsum vel finibus pharetra, sem metus finibus ante, quis rhoncus ex purus at magna. Suspendisse rhoncus sollicitudin dui vit<b>ae malesuada. In nec odio id ex sagittis accumsan sit amet eu leo. Maecenas sit amet enim quis ante convallis varius id id nisl. Fusce vitae feugiat lorem. Donec tempor tristique</b> tortor id porta. Fusce ornare luctus erat ac tincidunt.  Sed mi velit, egestas sit amet metus sit amet, placerat euismod enim. Nunc tempus nulla odio, nec bibendum nisi pellentesque sed. Curabitur lobortis et risus in ullamcorper. Maecenas pretium erat quis sem consectetur laoreet.&#160;<div><br></div><div>Donec tincidunt mi tortor, in laoreet leo molestie non. Nam eget sapien est. In hac habitasse platea dictumst. Curabitur eleifend, nulla non blandit ultricies, turpis lorem lacinia quam, id luctus mauris ligula et orci. Aliquam blandit eleifend sollicitudin. Maecenas ut nisl ornare, facilisis nulla posuere, sollicitudin lacus. Fusce eleifend in arcu eget dapibus. Fusce nec massa vel risus maximus porta. Etiam vulputate ornare metus ornare dapibus. Nullam libero nunc, commodo quis sollicitudin quis, ultrices a mauris. Curabitur a sem at urna tincidunt feugiat et in nunc.</div>','BCG001','2024-04-17 21:30:19.582669','2024-04-17 22:11:57.000000',1,1,7,7),(2,'jnsndjksdjanj','BCG001','2024-04-30 00:02:29.020574','2024-05-07 12:52:40.000000',1,1,7,7);
/*!40000 ALTER TABLE `policiais_publicacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacoes_tipos`
--

DROP TABLE IF EXISTS `publicacoes_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacoes_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fdbee6edb0d544461a1092a312` (`nome`),
  KEY `FK_1e6039b97b8085c26a866ececf7` (`createdById`),
  KEY `FK_4c76895bcd2c632cb89767c7544` (`updatedById`),
  CONSTRAINT `FK_1e6039b97b8085c26a866ececf7` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_4c76895bcd2c632cb89767c7544` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacoes_tipos`
--

LOCK TABLES `publicacoes_tipos` WRITE;
/*!40000 ALTER TABLE `publicacoes_tipos` DISABLE KEYS */;
INSERT INTO `publicacoes_tipos` VALUES (1,'Férias','2024-04-17 21:28:56.265689','2024-04-17 21:28:56.265689',7,NULL),(2,'Justiça','2024-04-17 21:29:02.014414','2024-04-17 21:29:02.014414',7,NULL);
/*!40000 ALTER TABLE `publicacoes_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setores`
--

DROP TABLE IF EXISTS `setores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `subunidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `abreviatura` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_3ce1d99d96d347a611804cbc57` (`email`),
  UNIQUE KEY `IDX_e11792148980cf6c9871a0917f` (`nome`,`subunidadeId`),
  KEY `FK_969278d89d06562b518da5aa501` (`subunidadeId`),
  KEY `FK_47cd507b05ced59ce3a4acd96a4` (`createdById`),
  KEY `FK_d8009868df150ca188ab1c04c1b` (`updatedById`),
  CONSTRAINT `FK_47cd507b05ced59ce3a4acd96a4` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_969278d89d06562b518da5aa501` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_d8009868df150ca188ab1c04c1b` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setores`
--

LOCK TABLES `setores` WRITE;
/*!40000 ALTER TABLE `setores` DISABLE KEYS */;
INSERT INTO `setores` VALUES (1,'Estratégico',NULL,NULL,'2024-04-16 14:55:40.303777','2024-04-16 14:55:40.303777',1,NULL,NULL,NULL),(2,'Teste',NULL,NULL,'2024-04-26 14:24:38.632820','2024-04-26 14:24:38.632820',2,NULL,NULL,NULL),(3,'Segurança',NULL,NULL,'2024-04-29 23:41:35.323142','2024-04-29 23:41:35.323142',1,NULL,NULL,NULL),(4,'Guarda Palaciana',NULL,NULL,'2024-04-29 23:41:54.095249','2024-04-29 23:41:54.095249',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `setores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexos`
--

DROP TABLE IF EXISTS `sexos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_d57128481e1ec5922715f0c05a` (`nome`),
  KEY `FK_05caa7b060a273bb650abbc1897` (`createdById`),
  KEY `FK_411dff66c9ee008fff3a16fa405` (`updatedById`),
  CONSTRAINT `FK_05caa7b060a273bb650abbc1897` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_411dff66c9ee008fff3a16fa405` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexos`
--

LOCK TABLES `sexos` WRITE;
/*!40000 ALTER TABLE `sexos` DISABLE KEYS */;
INSERT INTO `sexos` VALUES (1,'Masculino','2024-04-15 14:25:57.964245','2024-04-30 09:43:54.000000',7,7),(2,'Feminino','2024-04-15 14:26:11.298451','2024-04-23 16:12:00.000000',7,7),(3,'Nao quero informar','2024-04-18 11:58:45.070205','2024-04-22 09:39:33.000000',7,7);
/*!40000 ALTER TABLE `sexos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subunidades`
--

DROP TABLE IF EXISTS `subunidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subunidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `rua` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `cidadeId` int DEFAULT NULL,
  `unidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `abreviatura` varchar(20) NOT NULL,
  `comandanteId` int DEFAULT NULL,
  `subcomandanteId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_f09daf8413810c139eba9d1bc5` (`email`),
  UNIQUE KEY `IDX_3ebcab8dc3fa279ad592155ce4` (`nome`,`unidadeId`),
  KEY `FK_ab07489c5634d9f2b3fb3094beb` (`cidadeId`),
  KEY `FK_cd1a37574e20fa579b9d6a42e4f` (`unidadeId`),
  KEY `FK_852bdf3ef1c87c4c1b6c0ff602d` (`createdById`),
  KEY `FK_97c1c8cbc8112bf832fa57aafc5` (`updatedById`),
  KEY `FK_18f32b36ca7fdc58790e08a67e7` (`comandanteId`),
  KEY `FK_52f4b6731bfd4860e160c1c6af1` (`subcomandanteId`),
  CONSTRAINT `FK_18f32b36ca7fdc58790e08a67e7` FOREIGN KEY (`comandanteId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_52f4b6731bfd4860e160c1c6af1` FOREIGN KEY (`subcomandanteId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_852bdf3ef1c87c4c1b6c0ff602d` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_97c1c8cbc8112bf832fa57aafc5` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ab07489c5634d9f2b3fb3094beb` FOREIGN KEY (`cidadeId`) REFERENCES `cidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_cd1a37574e20fa579b9d6a42e4f` FOREIGN KEY (`unidadeId`) REFERENCES `unidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subunidades`
--

LOCK TABLES `subunidades` WRITE;
/*!40000 ALTER TABLE `subunidades` DISABLE KEYS */;
INSERT INTO `subunidades` VALUES (1,'1º Companhia de Policiamento de Guarda',NULL,NULL,NULL,NULL,NULL,NULL,'2024-04-16 14:46:01.180430','2024-04-25 18:03:43.000000',1,1,7,7,'1ª CPG',2,3),(2,'2º Companhia de Policiamento de Guarda',NULL,NULL,NULL,NULL,NULL,NULL,'2024-04-26 14:24:24.272085','2024-04-26 14:24:24.272085',NULL,1,7,NULL,'2º CPG',3,6);
/*!40000 ALTER TABLE `subunidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidades`
--

DROP TABLE IF EXISTS `unidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `rua` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `cidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `abreviatura` varchar(20) NOT NULL,
  `comandanteId` int DEFAULT NULL,
  `subcomandanteId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_c4d4eb5ac004bc110a100e2287` (`nome`),
  KEY `FK_66c500791c86bdd6616b4263958` (`cidadeId`),
  KEY `FK_c88d5feff1df450c94f4dc5fd35` (`createdById`),
  KEY `FK_1c99ea3d90cb7c374e627b7f438` (`updatedById`),
  KEY `FK_b2baf66ad9e7cbd31d0844f474a` (`comandanteId`),
  KEY `FK_8ca1675a64660258b70803e8b04` (`subcomandanteId`),
  CONSTRAINT `FK_1c99ea3d90cb7c374e627b7f438` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_66c500791c86bdd6616b4263958` FOREIGN KEY (`cidadeId`) REFERENCES `cidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_8ca1675a64660258b70803e8b04` FOREIGN KEY (`subcomandanteId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b2baf66ad9e7cbd31d0844f474a` FOREIGN KEY (`comandanteId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_c88d5feff1df450c94f4dc5fd35` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidades`
--

LOCK TABLES `unidades` WRITE;
/*!40000 ALTER TABLE `unidades` DISABLE KEYS */;
INSERT INTO `unidades` VALUES (1,'Casa Militar','','','','','','','2024-04-15 23:54:33.688189','2024-04-25 17:56:16.000000',1,7,7,'CM',2,3);
/*!40000 ALTER TABLE `unidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `perfilId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `subunidadeId` int DEFAULT NULL,
  `policialId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_230b925048540454c8b4c481e1` (`cpf`),
  UNIQUE KEY `IDX_aa1eae04b5c1202f356dca4b55` (`salt`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  UNIQUE KEY `REL_11b58b08a7cc9f133701e84d93` (`policialId`),
  KEY `FK_a7564398b65edf8fd5d4aa568c7` (`perfilId`),
  KEY `FK_2b946f68204a7ccd4d13d2425c8` (`subunidadeId`),
  KEY `FK_51d635f1d983d505fb5a2f44c52` (`createdById`),
  KEY `FK_52e97c477859f8019f3705abd21` (`updatedById`),
  CONSTRAINT `FK_11b58b08a7cc9f133701e84d939` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_2b946f68204a7ccd4d13d2425c8` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_51d635f1d983d505fb5a2f44c52` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_52e97c477859f8019f3705abd21` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `FK_a7564398b65edf8fd5d4aa568c7` FOREIGN KEY (`perfilId`) REFERENCES `perfis` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Jose Campelo',NULL,NULL,'05906219471','$2b$10$UicOzrieAuKg3czZkNd3MuF5cao6A90g48shl3i81yzoxJOXDlKt2','gdv0F6Jc9J','2024-04-11 22:25:52.294000','2024-04-22 09:07:35.369000',1,NULL,NULL,1,NULL),(12,'Nathalia Araujo',NULL,NULL,'04219964398','$2b$10$f.77B8ynt5TvjdvkKVOVXOuaM934DaHQz97D.YeMqD1avSjsdkBMK','nsQmmFLp9Z','2024-04-26 09:30:29.049861','2024-05-06 10:37:22.000000',2,7,7,1,6),(13,'Teste 3',NULL,NULL,'82983748374','$2b$10$dp2laF5Xb6wan5HqJzwoxeYEeB/AGSfBrCFadGN8xFngCQGAMWahK','6hHaAcUyeg','2024-04-26 09:39:42.768423','2024-04-26 09:39:42.768423',3,7,NULL,1,3),(14,'Teste',NULL,NULL,'11111111111','$2b$10$8HoGHeSGhOaEix/v.yegBeLaK73AlLEeVblbkZCo.LVfJmEEi/ZKS','vg6xFRgMvY','2024-04-26 09:41:44.376000','2024-05-29 14:23:57.000000',22,7,7,1,2),(17,'Ususario 2cpg',NULL,NULL,'12331312312','$2b$10$2bLiAMpCnWgpIpwe.5rYceiGD1BQ8X/Ne0KxXIghKWtcSFYf7F.WK','BLoaUCaz1X','2024-04-26 14:25:22.054180','2024-04-26 15:08:53.671483',1,7,7,2,7),(18,'qwasd',NULL,NULL,'23432423442','$2b$10$LOV6Ou3uLnXmq6ikBscyWeBJOn6m2MJdzDD/6nrLmrGRgW6wqoceS','kFYJdA8OOC','2024-05-06 15:13:16.915370','2024-05-11 20:46:35.067212',3,7,NULL,1,10),(20,'teste log',NULL,NULL,'09839839923','$2b$10$GEnsnbZFQkOaGs1AqBWCyekfUSpZsVYeqp09Ln69O6u5o3A0KGfiO','NFJBtpv3LT','2024-05-11 20:50:12.302674','2024-05-11 20:50:12.302674',3,7,NULL,1,8),(21,'wqeqwe',NULL,NULL,'12312312312','$2b$10$VCJC5lwRmGcY1TIlEVstfuey9qu/fhMyxbU4Vd6xHBWZGFZpwFAly','qoSoMg2Ky1','2024-05-11 20:50:21.791198','2024-05-11 20:50:21.791198',3,7,NULL,1,9),(22,'444444444',NULL,NULL,'44444444444','$2b$10$AbCDe1XbPzBRglzKFx7us.xoX7GXK9G4GbY.Vz4pbrQLGyvOAwVDm','ZDxfekeGRT','2024-05-11 21:12:35.737282','2024-05-29 14:24:17.000000',23,7,7,1,19),(23,'5555555555',NULL,NULL,'55555555555','$2b$10$.zZwxwWXj4D6zDb8b8vECOYC6j4jZYEfNvF3eC99Rn3ZAmAs0Nu92','JXd4DUSbgz','2024-05-11 21:13:30.519449','2024-05-29 14:24:24.000000',24,7,7,1,18),(24,'666666666',NULL,NULL,'66666666666','$2b$10$3zWkVRxXPUBZC3TQQqP.xOcz72DFzl98BVScx.4shYG8ixEh6c0TG','dPgnyjz8ee','2024-05-11 21:13:33.158794','2024-05-29 14:24:31.000000',25,7,7,2,17),(25,'ajnasnjasn',NULL,NULL,'99999999999','$2b$10$qwGo9dlp94hxWyqvXWF76u38DBIQTXbk7YvEqgYN/5wJhJWnrAFsu','rYr62eGpb9','2024-05-11 21:13:39.500655','2024-05-11 21:13:39.500655',3,7,NULL,2,16),(26,'Teste up pol',NULL,NULL,'87892738283','$2b$10$5EXwMNZcL5c.MXAuWBd3I.UtmxiK2lPc4H1CyuYoxag7v44ttPXBe','Gb0sohV0pT','2024-05-29 21:21:00.626000','2024-05-29 21:21:32.000000',3,7,7,1,15);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculos`
--

DROP TABLE IF EXISTS `veiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `placa` varchar(20) NOT NULL,
  `placa_especial` varchar(20) DEFAULT NULL,
  `chassi` varchar(20) DEFAULT NULL,
  `renavam` varchar(20) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `blindado` tinyint DEFAULT NULL,
  `organico` tinyint DEFAULT NULL,
  `km_inicial` int NOT NULL,
  `km_atual` int NOT NULL,
  `km_troca_oleo` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `corId` int DEFAULT NULL,
  `veiculoTipoId` int DEFAULT NULL,
  `modeloId` int DEFAULT NULL,
  `subunidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `data_baixa` date DEFAULT NULL,
  `observacoes` text,
  `km_revisao` int DEFAULT NULL,
  `data_revisao` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_eaa2f3c8151c86db7ec21ef88f` (`placa`,`subunidadeId`),
  KEY `FK_193bb6b44faaf5186d18dd2054c` (`corId`),
  KEY `FK_888ba68e9640947af0fa51adefd` (`veiculoTipoId`),
  KEY `FK_1fe69460f3614fc5fd9f17f8235` (`modeloId`),
  KEY `FK_3a814096ac3e62b494f69f22a80` (`subunidadeId`),
  KEY `FK_5535e9f0926556d2033d8fb3a4c` (`createdById`),
  KEY `FK_726ae0dcd2a8dae34f4e2ef61c8` (`updatedById`),
  CONSTRAINT `FK_193bb6b44faaf5186d18dd2054c` FOREIGN KEY (`corId`) REFERENCES `cores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_1fe69460f3614fc5fd9f17f8235` FOREIGN KEY (`modeloId`) REFERENCES `modelos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_3a814096ac3e62b494f69f22a80` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_5535e9f0926556d2033d8fb3a4c` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_726ae0dcd2a8dae34f4e2ef61c8` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_888ba68e9640947af0fa51adefd` FOREIGN KEY (`veiculoTipoId`) REFERENCES `veiculos_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculos`
--

LOCK TABLES `veiculos` WRITE;
/*!40000 ALTER TABLE `veiculos` DISABLE KEYS */;
INSERT INTO `veiculos` VALUES (1,'ABC1A23','CDG1G23',NULL,NULL,2024,1,1,0,70,500,'2024-04-27 01:02:31.528000','2024-05-13 08:53:53.000000',1,1,3,1,7,14,NULL,NULL,1000,'2024-05-24'),(3,'NJK2J22',NULL,NULL,NULL,2023,NULL,NULL,323,360,400,'2024-04-28 14:27:10.714000','2024-05-13 09:20:31.000000',1,2,3,1,7,7,NULL,NULL,400,NULL),(4,'NNN2N22',NULL,NULL,NULL,2022,NULL,NULL,100,100,NULL,'2024-04-28 14:27:34.504183','2024-05-05 20:02:23.000000',2,2,3,1,7,7,'2024-05-05',NULL,NULL,NULL),(5,'NJN2J22',NULL,NULL,NULL,2024,NULL,NULL,0,80,NULL,'2024-04-29 22:32:48.422000','2024-04-29 22:32:48.422000',2,1,3,1,7,14,NULL,NULL,NULL,NULL),(6,'AAA1A11','KOK1K11',NULL,NULL,2023,NULL,0,0,150,NULL,'2024-04-29 22:33:20.040000','2024-05-13 09:25:39.000000',1,2,3,1,7,7,NULL,NULL,NULL,NULL),(7,'EDS3F33','',NULL,NULL,2024,NULL,0,0,50,1000,'2024-05-06 10:30:02.380000','2024-05-06 10:30:02.380000',1,1,3,1,7,14,NULL,NULL,NULL,NULL),(8,'KMM1M11',NULL,NULL,NULL,2022,NULL,NULL,0,150,NULL,'2024-05-29 14:25:20.960000','2024-05-29 14:25:20.960000',2,1,3,1,14,7,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `veiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculos-oficinas`
--

DROP TABLE IF EXISTS `veiculos-oficinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculos-oficinas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `km_inicial` int NOT NULL,
  `km_final` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `veiculoId` int DEFAULT NULL,
  `oficinaId` int DEFAULT NULL,
  `manutencaoTipoId` int DEFAULT NULL,
  `subunidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `data_inicial` datetime NOT NULL,
  `data_final` datetime DEFAULT NULL,
  `observacoes` text,
  PRIMARY KEY (`id`),
  KEY `FK_bc9c6f5e40ee36035d3b215136f` (`veiculoId`),
  KEY `FK_276a5c39cc028861cb5b4f1a246` (`oficinaId`),
  KEY `FK_efecccf3cf95e5d7fdbee6dfdeb` (`manutencaoTipoId`),
  KEY `FK_aaab503d4acdaf343aabf7084e1` (`subunidadeId`),
  KEY `FK_72fbe041a5563880edf2e2026ab` (`createdById`),
  KEY `FK_23df44956e8185aaf3c50389349` (`updatedById`),
  CONSTRAINT `FK_23df44956e8185aaf3c50389349` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_276a5c39cc028861cb5b4f1a246` FOREIGN KEY (`oficinaId`) REFERENCES `oficinas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_72fbe041a5563880edf2e2026ab` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_aaab503d4acdaf343aabf7084e1` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_bc9c6f5e40ee36035d3b215136f` FOREIGN KEY (`veiculoId`) REFERENCES `veiculos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_efecccf3cf95e5d7fdbee6dfdeb` FOREIGN KEY (`manutencaoTipoId`) REFERENCES `manutencoes_tipos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculos-oficinas`
--

LOCK TABLES `veiculos-oficinas` WRITE;
/*!40000 ALTER TABLE `veiculos-oficinas` DISABLE KEYS */;
INSERT INTO `veiculos-oficinas` VALUES (6,0,150,'2024-04-28 15:45:24.923000','2024-04-28 15:45:24.923000',1,1,2,1,7,7,'2024-04-28 15:45:25','2024-04-28 15:48:10',NULL),(7,150,200,'2024-04-28 15:48:35.507000','2024-04-28 15:48:35.507000',1,1,2,1,7,7,'2024-04-28 15:48:35','2024-04-28 15:48:51',NULL),(8,200,400,'2024-04-28 15:49:27.488000','2024-04-28 15:49:27.488000',1,1,1,1,7,7,'2024-04-28 15:49:27','2024-04-28 15:49:38',NULL),(9,400,450,'2024-04-28 15:50:07.857000','2024-04-28 15:50:07.857000',1,1,1,1,7,7,'2024-04-28 15:50:08','2024-04-28 18:50:13',NULL),(10,350,455,'2024-04-29 08:44:48.075000','2024-04-29 08:44:48.075000',3,1,1,1,7,7,'2024-04-29 08:44:48','2024-04-29 22:28:14',NULL),(11,350,455,'2024-04-29 22:30:11.530000','2024-04-29 22:30:11.530000',3,1,2,1,7,7,'2024-04-29 22:30:12','2024-04-29 22:30:21',NULL),(12,50,60,'2024-04-29 23:27:33.326000','2024-04-29 23:27:33.326000',6,1,1,1,7,7,'2024-04-29 23:27:33','2024-04-29 23:27:40',NULL),(13,0,30,'2024-04-30 00:06:21.734000','2024-04-30 00:06:21.734000',5,1,2,1,7,7,'2024-04-30 00:06:22','2024-04-30 00:06:38',NULL),(14,600,630,'2024-04-30 08:13:43.320000','2024-04-30 08:13:43.320000',1,1,1,1,7,7,'2024-04-30 08:13:43','2024-04-30 08:13:55',NULL),(15,70,100,'2024-05-01 13:25:09.325000','2024-05-01 13:25:09.325000',6,1,2,1,7,7,'2024-05-01 13:25:09','2024-05-02 13:14:02',NULL),(16,670,700,'2024-05-04 15:37:05.438000','2024-05-04 15:37:05.438000',1,1,1,1,7,7,'2024-05-04 15:37:05','2024-05-04 15:37:13',NULL),(17,850,870,'2024-05-06 10:33:41.655000','2024-05-06 10:33:41.655000',1,1,1,1,7,7,'2024-05-06 10:33:42','2024-05-06 16:08:33',NULL),(18,50,80,'2024-05-29 14:26:05.345000','2024-05-29 14:26:05.345000',5,1,2,1,14,14,'2024-05-29 14:26:05','2024-05-29 14:26:36',NULL),(19,0,50,'2024-05-29 14:26:55.447000','2024-05-29 14:26:55.447000',7,1,2,1,14,14,'2024-05-29 14:26:55','2024-05-29 14:27:16',NULL);
/*!40000 ALTER TABLE `veiculos-oficinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculos-policiais`
--

DROP TABLE IF EXISTS `veiculos-policiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculos-policiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_inicial` datetime NOT NULL,
  `data_final` datetime DEFAULT NULL,
  `km_inicial` int NOT NULL,
  `km_final` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `veiculoId` int DEFAULT NULL,
  `policialId` int DEFAULT NULL,
  `cidadeId` int DEFAULT NULL,
  `subunidadeId` int DEFAULT NULL,
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  `observacoes` text,
  PRIMARY KEY (`id`),
  KEY `FK_b06cffdf214a54188462104146f` (`veiculoId`),
  KEY `FK_dbcf7997ee95b57d65ee974175a` (`policialId`),
  KEY `FK_ccf4abe31d999d0ba88c0578c79` (`cidadeId`),
  KEY `FK_ef0f165a8896e5a2ef69a460ccb` (`subunidadeId`),
  KEY `FK_24cae367b973ebb06f375cded16` (`createdById`),
  KEY `FK_1dfdfcecfc43452fff46a542a54` (`updatedById`),
  CONSTRAINT `FK_1dfdfcecfc43452fff46a542a54` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_24cae367b973ebb06f375cded16` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_b06cffdf214a54188462104146f` FOREIGN KEY (`veiculoId`) REFERENCES `veiculos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ccf4abe31d999d0ba88c0578c79` FOREIGN KEY (`cidadeId`) REFERENCES `cidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_dbcf7997ee95b57d65ee974175a` FOREIGN KEY (`policialId`) REFERENCES `policiais` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_ef0f165a8896e5a2ef69a460ccb` FOREIGN KEY (`subunidadeId`) REFERENCES `subunidades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculos-policiais`
--

LOCK TABLES `veiculos-policiais` WRITE;
/*!40000 ALTER TABLE `veiculos-policiais` DISABLE KEYS */;
INSERT INTO `veiculos-policiais` VALUES (1,'2024-04-29 00:10:42','2024-04-29 00:12:22',450,500,'2024-04-29 00:10:41.595000','2024-04-29 00:10:41.595000',1,1,1,1,7,7,NULL),(2,'2024-04-29 00:27:46','2024-04-29 00:36:09',323,350,'2024-04-29 00:27:45.839000','2024-04-29 00:27:45.839000',3,1,NULL,1,7,7,NULL),(5,'2024-04-29 22:42:47','2024-04-29 22:46:59',350,360,'2024-04-29 22:42:46.879000','2024-04-29 22:42:46.879000',3,2,NULL,1,7,7,NULL),(6,'2024-04-29 22:49:47','2024-04-29 22:49:56',0,10,'2024-04-29 22:49:47.150000','2024-04-29 22:49:47.150000',6,1,NULL,1,7,7,NULL),(7,'2024-04-29 22:50:40','2024-04-29 22:51:02',10,20,'2024-04-29 22:50:40.073000','2024-04-29 22:50:40.073000',6,1,NULL,1,7,7,NULL),(8,'2024-04-29 22:51:22','2024-04-29 22:51:35',20,30,'2024-04-29 22:51:22.442000','2024-04-29 22:51:22.442000',6,1,NULL,1,7,7,NULL),(9,'2024-04-29 22:51:52','2024-04-29 22:52:00',30,40,'2024-04-29 22:51:52.506000','2024-04-29 22:51:52.506000',6,1,NULL,1,7,7,NULL),(10,'2024-04-29 22:52:51','2024-04-29 22:52:58',40,50,'2024-04-29 22:52:50.617000','2024-04-29 22:52:50.617000',6,1,NULL,1,7,7,NULL),(11,'2024-04-29 22:54:01','2024-04-29 22:54:08',40,50,'2024-04-29 22:54:00.698000','2024-04-29 22:54:00.698000',6,1,NULL,1,7,7,NULL),(12,'2024-04-29 22:56:01','2024-04-29 22:56:10',40,50,'2024-04-29 22:56:01.190000','2024-04-29 22:56:01.190000',6,1,NULL,1,7,7,NULL),(13,'2024-04-29 23:27:51','2024-04-29 23:28:05',60,70,'2024-04-29 23:27:50.666000','2024-04-29 23:27:50.666000',6,1,NULL,1,7,7,NULL),(14,'2024-04-30 08:12:54','2024-04-30 08:13:04',20,600,'2024-04-30 08:12:53.700000','2024-04-30 08:12:53.700000',1,1,NULL,1,7,7,NULL),(15,'2024-05-01 13:25:34','2024-05-02 13:13:19',630,650,'2024-05-01 13:25:33.933000','2024-05-01 13:25:33.933000',1,1,NULL,1,7,7,NULL),(16,'2024-05-03 19:57:36','2024-05-03 19:57:55',650,670,'2024-05-03 19:57:35.994000','2024-05-03 19:57:35.994000',1,1,1,1,7,7,NULL),(17,'2024-05-06 10:32:35','2024-05-06 10:33:02',700,850,'2024-05-06 10:32:35.160000','2024-05-06 10:32:35.160000',1,1,1,1,7,7,NULL),(18,'2024-05-06 10:34:00','2024-05-06 14:14:52',30,45,'2024-05-06 10:33:59.654000','2024-05-06 10:33:59.654000',5,2,NULL,1,7,7,NULL),(19,'2024-05-07 09:48:03','2024-05-07 09:48:11',870,900,'2024-05-07 09:48:03.116000','2024-05-07 09:48:03.116000',1,1,1,1,7,7,'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta varius urna id tincidunt. Proin eu venenatis augue. Maecenas quis lacus purus. Nullam in mattis nisl. Maecenas fringilla ipsum nec dolor finibus tincidunt. Fusce id tortor at augue sodales eleifend vel eu augue. Aenean laoreet vestibulum lacus, id congue diam dignissim pulvinar. Nam tempus rhoncus justo ut finibus. Sed ultrices arcu a sem consectetur, quis dignissim ex tempus. Proin venenatis, ex vitae tristique luctus, lectus arcu consectetur massa, ut dictum diam nibh at nunc.</p><p>Nam ac nisi quis purus hendrerit vehicula. Fusce porttitor mattis risus sed condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ornare, elit eu lacinia tincidunt, orci massa suscipit arcu, cursus sollicitudin magna tortor et sapien. Donec vel condimentum risus. Cras et consectetur sem. Praesent a urna non nunc condimentum condimentum nec nec ex. Suspendisse congue justo eu feugiat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id tortor justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem magna, feugiat non finibus at, dapibus sit amet tortor. Etiam mollis cursus sapien, ut hendrerit ex pretium quis. Proin ut orci eget velit bibendum vehicula.</p>'),(20,'2024-05-07 09:59:49','2024-05-09 23:49:28',45,50,'2024-05-07 09:59:48.723000','2024-05-07 09:59:48.723000',5,1,1,1,7,7,NULL),(21,'2024-05-07 10:00:19','2024-05-09 23:50:03',100,150,'2024-05-07 10:00:18.932000','2024-05-07 10:00:18.932000',6,2,1,1,7,7,NULL),(22,'2024-05-12 20:22:41','2024-05-13 07:59:58',150,180,'2024-05-12 20:22:41.241000','2024-05-12 20:22:41.241000',1,1,NULL,1,7,7,NULL),(23,'2024-05-13 09:44:37','2024-05-13 10:49:10',180,220,'2024-05-13 09:44:36.670000','2024-05-13 09:44:36.670000',1,1,1,1,7,7,NULL),(24,'2024-05-29 14:25:41','2024-05-29 22:26:34',0,150,'2024-05-29 14:25:41.377000','2024-05-29 14:25:41.377000',8,1,NULL,1,14,7,NULL);
/*!40000 ALTER TABLE `veiculos-policiais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculos_tipos`
--

DROP TABLE IF EXISTS `veiculos_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculos_tipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdById` int DEFAULT NULL,
  `updatedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_b4b611e08e61e74c664e479e1c` (`nome`),
  KEY `FK_26deff804f2e71f996e66637812` (`createdById`),
  KEY `FK_0de23822da2d1b159b4bef2e2c1` (`updatedById`),
  CONSTRAINT `FK_0de23822da2d1b159b4bef2e2c1` FOREIGN KEY (`updatedById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_26deff804f2e71f996e66637812` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculos_tipos`
--

LOCK TABLES `veiculos_tipos` WRITE;
/*!40000 ALTER TABLE `veiculos_tipos` DISABLE KEYS */;
INSERT INTO `veiculos_tipos` VALUES (1,'Automóvel','2024-04-26 18:45:18.214141','2024-04-26 18:45:18.214141',7,NULL),(2,'Motocicleta','2024-04-26 18:45:23.991829','2024-04-26 18:45:23.991829',7,NULL),(3,'Caminhoneta','2024-04-26 18:45:35.613404','2024-04-26 18:45:35.613404',7,NULL);
/*!40000 ALTER TABLE `veiculos_tipos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-28 14:51:15
