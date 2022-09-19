-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 09 月 19 日 16:40
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `pet_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `petlist`
--

CREATE TABLE `petlist` (
  `sid` int(99) NOT NULL,
  `avatar` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `avatar01` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `avatar02` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `avatar03` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `name` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `type` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `location` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `gender` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `status` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `size` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `cell` varchar(255) CHARACTER SET armscii8 NOT NULL,
  `info` char(255) CHARACTER SET armscii8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `petlist`
--

INSERT INTO `petlist` (`sid`, `avatar`, `avatar01`, `avatar02`, `avatar03`, `name`, `type`, `location`, `gender`, `status`, `size`, `cell`, `info`) VALUES
(1, 'https://img.onl/CUoIub', 'https://img.onl/cK9P', 'https://img.onl/4UV7ZV', 'https://img.onl/JvryAl', 'Lucy', 'Cat', 'Taipei', 'Boy', 'open', 'small', '0988333444', 'energetic , friendly'),
(2, 'https://img.onl/vwmeg', '', '', '', 'Cherry', 'Dog', 'Taipei', 'Girl', 'open', 'small', '0988333444', 'smart, intelligent, clever'),
(3, 'https://img.onl/CD3st4', '', '', '', 'Macy', 'Cat', 'Taipei', 'Girl', 'open', 'small', '0988333444', 'adorable'),
(4, 'https://img.onl/5GBHJ4', '', '', '', 'Dora', 'Cat', 'Taipei', 'Girl', 'open', 'small', '0988333444', 'trainable'),
(5, 'https://img.onl/DFFVVd', '', '', '', 'Cubb', 'Dog', 'NewTaipei', 'Girl', 'open', 'small', '0988333444', 'energetic , friendly ,trianalbe'),
(6, 'https://img.onl/FhP7gO', '', '', '', 'Charie', 'Dog', 'NewTaipei', 'Boy', 'open', 'small', '0988333444', 'energetic , friendly ,trianalbe'),
(7, 'https://img.onl/5ftMHQ', '', '', '', 'Kenny', 'Dog', 'Taipei', 'Girl', 'open', 'big', '0988333444', 'trainable, cute'),
(8, 'https://img.onl/1dvzHU', '', '', '', 'Howdy', 'Cat', 'NewTaipei', 'Girl', 'open', 'big', '0988333444', 'trainable'),
(9, 'https://img.onl/LQo2T4', '', '', '', 'Bubble', 'Cat', 'Taipei', 'Girl', 'open', 'big', '0988333444', 'adorable'),
(10, 'https://img.onl/eIPSHy', '', '', '', 'Rocky', 'Cat', 'NewTaipei', 'Girl', 'open', 'big', '0988333444', 'adorable'),
(11, 'https://img.onl/Eyg1eB', '', '', '', 'Leo', 'Dog', 'Taichung', 'Girl', 'open', 'big', '0988333444', 'adorable'),
(12, 'https://img.onl/15TK5', '', '', '', 'Zeus', 'Dog', 'Taipei', 'Girl', 'open', 'big', '0988333444', 'adorable, trainable, cute');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `petlist`
--
ALTER TABLE `petlist`
  ADD PRIMARY KEY (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
