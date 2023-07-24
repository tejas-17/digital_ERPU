-- Create the Digital Rupee database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `Digital Rupee`;

-- Use the Digital Rupee database
USE `Digital Rupee`;

-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(100) NOT NULL,
  `balance` DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

SELECT * FROM `digital rupee`.users;