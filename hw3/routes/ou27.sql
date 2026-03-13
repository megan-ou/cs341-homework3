-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 13, 2026 at 09:52 PM
-- Server version: 10.3.39-MariaDB
-- PHP Version: 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ou27`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `o_id` int(11) NOT NULL,
  `t_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `notes` varchar(3000) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `topping` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`o_id`, `t_id`, `quantity`, `notes`, `month`, `year`, `topping`) VALUES
(1, 1, 2, 'extra sprinkles', 1, 2023, NULL),
(2, 2, 1, 'no_sprinkles', 2, 2023, NULL),
(3, 3, 3, 'extra chocolate', 3, 2023, NULL),
(4, 1, 4, 'no sprinkles', 4, 2023, NULL),
(5, 2, 5, 'extra sprinkles', 5, 2023, NULL),
(6, 3, 6, 'no sprinkles', 6, 2023, NULL),
(7, 1, 3, 'no nuts', 1, 2023, NULL),
(8, 2, 1, 'no nuts', 1, 2023, NULL),
(9, 4, 2, 'no nuts', 11, 2026, NULL),
(10, 3, 4, 'rush order', 4, 2026, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`o_id`),
  ADD KEY `fk_refer` (`t_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_refer` FOREIGN KEY (`t_id`) REFERENCES `toppings` (`t_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
