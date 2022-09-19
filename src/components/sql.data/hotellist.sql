-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 09 月 19 日 17:06
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
-- 資料表結構 `hotellist`
--

CREATE TABLE `hotellist` (
  `sid` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `avatar01` varchar(255) NOT NULL,
  `avatar02` varchar(255) NOT NULL,
  `avatar03` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `hotellist`
--

INSERT INTO `hotellist` (`sid`, `avatar`, `avatar01`, `avatar02`, `avatar03`, `name`, `lat`, `lng`, `cell`, `address`) VALUES
(1, 'https://img.onl/2etZQJ', 'https://img.onl/TFAO9b', 'https://img.onl/EvGrbn', '', '喵皇', '25.0325308', '121.5375779', '0988123123', '台北市大安區敦化南路1段324號'),
(2, 'https://img.onl/QnSTtV', '', '', '', '寵物當家', '25.0325308', '121.546538', '0988124444', '台北市大安區復興南路二段130號'),
(3, 'https://img.onl/EvGrbn', '', '', '', '茱莉寵物美容', '25.0308904', '121.5575779', '0988123333', '台北市大安區建國南路二段75-1號'),
(4, 'https://img.onl/TFAO9b', '', '', '', 'OnsStay', '25.0374292', '121.5418835', '098845564', '台北市大安區仁愛路四段112巷9弄5號1樓'),
(5, 'https://img.onl/ENNOpk', '', '', '', '趴趴走寵物', '25.0298904', '121.5275779', '0988123333', '台北市大安區建國南路二段231號'),
(6, 'https://img.onl/apg7AS', '', '', '', '星兒寵旅', '25.0298904', '121.5475779', '0988124444', '台北市大安區師大路39巷');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `hotellist`
--
ALTER TABLE `hotellist`
  ADD PRIMARY KEY (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
