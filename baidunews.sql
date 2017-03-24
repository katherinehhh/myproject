-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 03 月 02 日 12:02
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `phpnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newsdate` datetime NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newssouc` varchar(200) NOT NULL,
  `newstype` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newsdate`, `newstitle`, `newscontent`, `newssouc`, `newstype`, `newsimg`) VALUES
(19, '2017-02-09 00:00:00', '极客学院', '', '极客学院', '图片', 'img/6.JPEG'),
(17, '2017-02-21 00:00:00', '中国足球与世界杯', '', '新浪体育', '精选', 'img/3.JPEG'),
(12, '2017-03-02 00:00:00', '睡眠质量的重要性', '如何健康睡眠', '搜狐新闻', '社会', 'img/4.PNG'),
(4, '2017-02-02 00:00:00', '贫富差距为何如此大？', '', '搜狐新闻', '百家', 'img/6.JPEG'),
(24, '2017-02-15 00:00:00', '中国足球', '', '极客新闻', '精选', 'img/6.JPEG'),
(25, '2017-02-15 00:00:00', '金融膨胀所带来的问题', '', '网易新闻', '精选', 'img/6.JPEG'),
(6, '2017-02-21 00:00:00', '中国梦', '', '人才网', '娱乐', 'img/6.JPEG'),
(20, '2017-02-09 00:00:00', '极客学院', '', '极客学院', '图片', 'img/6.JPEG'),
(21, '2017-02-09 00:00:00', '极客学院', '', '极客学院', '图片', 'img/6.JPEG'),
(22, '2017-02-09 00:00:00', '极客学院', '', '极客学院', '图片', 'img/6.JPEG'),
(23, '2017-02-02 00:00:00', '新版苹果', '', '极客学院', '本地', 'img/3.JPEG'),
(18, '2017-03-02 00:00:00', '中国的军事力量', '2', '中国人民网', '军事', 'img/4.JPEG'),
(28, '2017-03-02 00:00:00', '张智霖表白唐小爱', '2', '腾讯娱乐', '娱乐', 'img/4.JPEG'),
(2, '2017-03-01 00:00:00', '旅游胜地张家界', '2', '网易新闻', '精选', 'img/4.JPEG');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
