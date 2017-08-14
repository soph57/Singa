-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 14, 2017 at 04:38 PM
-- Server version: 5.5.50-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vassilis_singa`
--

-- --------------------------------------------------------

--
-- Table structure for table `legal_status`
--

CREATE TABLE IF NOT EXISTS `legal_status` (
  `lst_id` int(11) NOT NULL AUTO_INCREMENT,
  `lst_name` varchar(64) NOT NULL,
  PRIMARY KEY (`lst_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `legal_status`
--

INSERT INTO `legal_status` (`lst_id`, `lst_name`) VALUES
(1, 'Individual'),
(2, 'SARL'),
(3, 'LLC'),
(4, 'GmbH'),
(5, 'ASBL'),
(6, 'Groupe');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
