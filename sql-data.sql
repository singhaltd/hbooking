-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2022 at 11:37 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel1`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database/migrations/1651332210176_countries', 1, '2022-05-21 11:16:20'),
(2, 'database/migrations/1651332283128_provinces', 1, '2022-05-21 11:16:20'),
(3, 'database/migrations/1651332424493_districts', 1, '2022-05-21 11:16:20'),
(4, 'database/migrations/1651332963573_bookings', 1, '2022-05-21 11:16:20'),
(5, 'database/migrations/1651333430097_customers', 1, '2022-05-21 11:16:20'),
(6, 'database/migrations/1651334063495_room_facilities', 1, '2022-05-21 11:16:20'),
(7, 'database/migrations/1651334086919_room_types', 1, '2022-05-21 11:16:20'),
(8, 'database/migrations/1651334279648_room_statuses', 1, '2022-05-21 11:16:21'),
(9, 'database/migrations/1651334427966_rooms', 1, '2022-05-21 11:16:21'),
(10, 'database/migrations/1653101985139_users', 1, '2022-05-21 11:16:21'),
(11, 'database/migrations/1653101985155_api_tokens', 1, '2022-05-21 11:16:21'),
(12, 'database/migrations/1653103430833_user_roles', 1, '2022-05-21 11:16:21'),
(13, 'database/migrations/1653103441687_user_role_mapings', 1, '2022-05-21 11:16:21'),
(14, 'database/migrations/1653103471011_auth_pages', 1, '2022-05-21 11:16:21'),
(15, 'database/migrations/1653106519936_menus', 1, '2022-05-21 11:16:21'),
(16, 'database/migrations/1654693649300_posts', 2, '2022-06-08 13:23:47'),
(17, 'database/migrations/1654736499560_files', 3, '2022-06-09 01:06:34');

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `api_tokens`
--

CREATE TABLE `api_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `api_tokens`
--

INSERT INTO `api_tokens` (`id`, `user_id`, `name`, `type`, `token`, `expires_at`, `created_at`) VALUES
(22, 58, 'Opaque Access Token', 'api', 'a3f854e0b437cfa49c502ebe51c92ede1e872de7db8e1b73b28445d637815f08', NULL, '2022-06-17 01:27:30'),
(23, 58, 'Opaque Access Token', 'api', 'a94eb5d00be9b91efd011b42c3f9614c004652612f5569236479881fae2e4e07', NULL, '2022-06-19 02:37:53'),
(24, 58, 'Opaque Access Token', 'api', 'c34ea8fc1178408c645f231d24d3e1fe22deb12c4b7ad2e464685dd5e98e408b', NULL, '2022-06-19 02:38:49'),
(25, 58, 'Opaque Access Token', 'api', 'e60d80fa240bf06a6c262ef800ede46d9ef408ee35242b446c55a6c8cf73ee2c', NULL, '2022-06-19 03:06:39'),
(26, 58, 'Opaque Access Token', 'api', 'dd7b4318108d66a4782a52f5276a8b8455982202cecfc24a7d8a3e00d2797725', NULL, '2022-06-19 03:50:56');

-- --------------------------------------------------------

--
-- Table structure for table `auth_pages`
--

CREATE TABLE `auth_pages` (
  `id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `ref_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cust_id` int(11) DEFAULT NULL,
  `adulth` int(2) DEFAULT NULL,
  `child` int(2) DEFAULT NULL,
  `room_type` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `check_in_date` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `check_out_date` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `check_in_time` time DEFAULT NULL,
  `check_out_time` time DEFAULT NULL,
  `maker` int(11) DEFAULT NULL,
  `stat` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `booktype` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rqty` int(3) DEFAULT NULL,
  `trn_date` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`ref_id`, `cust_id`, `adulth`, `child`, `room_type`, `check_in_date`, `check_out_date`, `check_in_time`, `check_out_time`, `maker`, `stat`, `booktype`, `rqty`, `trn_date`, `created_at`, `updated_at`) VALUES
('B6190d579', 2836, 1, 0, 'UBC', '2022-06-19', '2022-06-20', NULL, NULL, 58, 'C', 'M', 1, '2022-06-19', '2022-06-19 04:24:17', '2022-06-19 04:24:17'),
('Ba1eb673e', 2836, 1, 0, 'UBC', '2022-06-19', '2022-06-20', NULL, NULL, 58, 'C', 'M', 8, '2022-06-19', '2022-06-19 04:24:50', '2022-06-19 04:24:50'),
('Bb74e4c2d', 2836, 1, 0, 'UBC', '2022-06-19', '2022-06-20', NULL, NULL, 58, 'C', 'M', 1, '2022-06-19', '2022-06-19 04:34:44', '2022-06-19 04:34:44'),
('Bf555012f', 2836, 1, 0, 'UBC', '2022-06-19', '2022-06-20', NULL, NULL, 58, 'B', 'M', 1, '2022-06-19', '2022-06-19 04:30:35', '2022-06-19 04:30:35');

-- --------------------------------------------------------

--
-- Table structure for table `booking_room`
--

CREATE TABLE `booking_room` (
  `room_num` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `irate` float NOT NULL,
  `remark` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `book_ref` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(11) NOT NULL,
  `invoice` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `booking_room`
--

INSERT INTO `booking_room` (`room_num`, `irate`, `remark`, `book_ref`, `id`, `invoice`) VALUES
('001', 120000, '', 'B724f14e8', 44, 'I6e8ea002'),
('002', 120000, '', 'B298801ed', 45, 'I4c73634b'),
('004', 13333, '', 'B298801ed', 46, 'I4c73634b'),
('001', 120000, '', 'Bc5890678', 48, 'I54328fc3'),
('004', 13333, '', 'Bc5890678', 49, 'I54328fc3'),
('001', 120000, '', 'B7c90c8da', 51, 'I1fb3ded6'),
('004', 13333, '', 'B7c90c8da', 52, 'I1fb3ded6'),
('001', 120000, '', 'Be3ba3031', 54, 'I81d2034d');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `cid` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `cname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`cid`, `cname`, `created_at`, `updated_at`) VALUES
('LA', 'ລາວ', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cid` int(10) UNSIGNED NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `district_id` int(10) UNSIGNED DEFAULT NULL,
  `village` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `doc_type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `doc_no` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cover` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`cid`, `fname`, `lname`, `email`, `mobile`, `dob`, `district_id`, `village`, `doc_type`, `doc_no`, `sex`, `status`, `created_at`, `updated_at`, `cover`) VALUES
(2836, 'admin', 'admin', 'admin@mail.com', '55057246', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 15:34:20', '2022-06-16 15:34:20', ''),
(5787, 'laithong', 'singhalat', 'laithong865@gmail.com', '02055057246', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-19 02:57:59', '2022-06-19 02:57:59', '');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `dt_id` int(10) UNSIGNED NOT NULL,
  `dtname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pv_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`dt_id`, `dtname`, `pv_id`, `created_at`, `updated_at`) VALUES
(101, 'ຈັນທະບູລີ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(102, 'ສີໂຄດຕະບອງ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(103, 'ໄຊເສດຖາ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(104, 'ສີສັດຕະນາກ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(105, 'ນາຊາຍທອງ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(106, 'ໄຊທານີ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(107, 'ຫາດຊາຍຟອງ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(108, 'ສັງທອງ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(109, 'ປາກງື່ມ', 1, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(201, 'ຜົ້ງສາລີ', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(202, 'ໃຫມ່', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(203, 'ຂວາ', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(204, 'ສຳພັນ', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(205, 'ບູນເຫນືອ', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(206, 'ຍອດອູ', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(207, 'ບູນໃຕ້', 2, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(301, 'ຫລວງນ້ຳທາ', 3, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(302, 'ສິງ', 3, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(303, 'ລອງ', 3, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(304, 'ວຽງພູຄາ', 3, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(305, 'ນາແລ', 3, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(401, 'ໄຊ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(402, 'ຫລາ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(403, 'ນາໝໍ້ ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(404, 'ງາ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(405, 'ແບງ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(406, 'ຮຸນ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(407, 'ປາກແບງ', 4, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(501, 'ຫ້ວຍຊາຍ', 5, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(502, 'ຕົ້ນເຜິ້ງ', 5, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(503, 'ເມິງ', 5, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(504, 'ຜາອຸດົມ', 5, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(505, 'ປາກທາ', 5, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(601, 'ຫຼວງພະບາງ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(602, 'ຊຽງເງິນ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(603, 'ນານ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(604, 'ປາກອູ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(605, 'ນ້ຳບາກ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(606, 'ງອຍ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(607, 'ປາກແຊງ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(608, 'ໂພນໄຊ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(609, 'ຈອມເພັດ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(610, 'ວຽງຄຳ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(611, 'ພູຄູນ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(612, 'ໂພນທອງ', 6, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(701, 'ຊຳເໜືອ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(702, 'ຊຽງຄໍ້', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(703, 'ຮ້ຽມ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(704, 'ວຽງໄຊ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(705, 'ຫົວເມືອງ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(706, 'ຊຳໃຕ້', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(707, 'ສົບເບົາ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(708, 'ແອດ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(709, 'ກວັນ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(710, 'ຊອນ', 7, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(801, 'ໄຊຍະບູລີ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(802, 'ຄອບ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(803, 'ຫົງສາ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(804, 'ເງິນ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(805, 'ຊຽງຮ່ອນ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(806, 'ພຽງ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(807, 'ປາກລາຍ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(808, 'ແກ່ນທ້າວ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(809, 'ບໍ່ແຕນ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(810, 'ທົ່ງມີໄຊ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(811, 'ໄຊຊະຖານ', 8, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(901, 'ແປກ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(902, 'ຄຳ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(903, 'ໜອງແຮດ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(904, 'ຄູນ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(905, 'ໝອກ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(906, 'ພູກູດ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(907, 'ຜາໄຊ', 9, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1001, 'ໂພນໂຮງ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1002, 'ທຸລະຄົມ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1003, 'ແກ້ວອຸດົມ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1004, 'ກາສີ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1005, 'ວັງວຽງ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1006, 'ເຟືອງ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1007, 'ຊະນະຄາມ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1008, 'ແມດ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1009, 'ວຽງຄຳ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1010, 'ຫີນເຫີບ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1012, 'ໝື່ນ', 10, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1101, 'ປາກຊັນ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1102, 'ທ່າພະບາດ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1103, 'ປາກກະດິງ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1104, 'ບໍລິຄັນ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1105, 'ຄຳເກີດ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1106, 'ວຽງທອງ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1107, 'ໄຊຈຳພອນ', 11, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1201, 'ທ່າແຂກ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1202, 'ມະຫາໄຊ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1203, 'ໜອງບົກ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1204, 'ຫີນບູນ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1205, 'ຍົມມະລາດ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1206, 'ບົວລະພາ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1207, 'ນາກາຍ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1208, 'ເຊບັ້ງໄຟ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1209, 'ໄຊບົວທອງ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1210, 'ຄູນຄຳ', 12, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1301, 'ໄກສອນ ພົມວິຫານ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1302, 'ອຸທຸມພອນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1303, 'ອາດສະພັງທອງ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1304, 'ພີນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1305, 'ເຊໂປນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1306, 'ນອງ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1307, 'ທ່າປາງທອງ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1308, 'ສອງຄອນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1309, 'ຈຳພອນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1310, 'ຊົນບູລີ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1311, 'ໄຊບູລີ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1312, 'ວິລະບູລີ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1313, 'ອາດສະພອນ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1314, 'ໄຊພູທອງ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1315, 'ພະລານໄຊ', 13, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1401, 'ສາລະວັນ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1402, 'ຕາໂອ້ຍ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1403, 'ຕຸ້ມລານ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1404, 'ລະຄອນເພັງ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1405, 'ວາປີ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1406, 'ຄົງເຊໂດນ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1407, 'ເລົ່າງາມ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1408, 'ສະມ້ວຍ', 14, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1501, 'ລະມາມ', 15, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1502, 'ກະລືມ', 15, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1503, 'ດາກຈຶງ', 15, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1504, 'ທ່າແຕງ', 15, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1601, 'ປາກເຊ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1602, 'ຊະນະສົມບູນ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1603, 'ບາຈຽງຈະເລີນສຸກ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1604, 'ປາກຊ່ອງ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1605, 'ປະທຸມພອນ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1606, 'ໂພນທອງ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1607, 'ຈຳປາສັກ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1608, 'ສຸຂຸມາ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1609, 'ມຸນລະປະໂມກ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1610, 'ໂຂງ', 16, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1701, 'ໄຊເສດຖາ', 17, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1702, 'ສາມະຄີໄຊ', 17, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1703, 'ສະໜາມໄຊ', 17, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1704, 'ສານໄຊ', 17, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1705, 'ພູວົງ', 17, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1801, 'ອານຸວົງ', 18, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1802, 'ທ່າໂທມ', 18, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1803, 'ລ້ອງແຈ້ງ', 18, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1804, 'ຮົ່ມ', 18, '2022-05-22 10:13:52', '2022-05-22 10:13:52'),
(1805, 'ລ້ອງຊານ', 18, '2022-05-22 10:13:52', '2022-05-22 10:13:52');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `caption` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ext` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` float(8,2) DEFAULT NULL,
  `url` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `room_type` varchar(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `alt`, `caption`, `ext`, `size`, `url`, `created_at`, `updated_at`, `room_type`) VALUES
(7, 'urban-01.webp', 'urban-01.webp', '', '', 67402.00, 'uploads/room/urban-01.webp', '2022-06-10 07:29:23', '2022-06-10 07:29:23', 'UBC'),
(8, 'urban-02.webp', 'urban-02.webp', '', '', 99394.00, 'uploads/room/urban-02.webp', '2022-06-10 07:29:23', '2022-06-10 07:29:23', 'UBC'),
(9, 'urban-03.webp', 'urban-03.webp', '', '', 109120.00, 'uploads/room/urban-03.webp', '2022-06-10 07:29:23', '2022-06-10 07:29:23', 'UBC'),
(10, 'ud-01.webp', 'ud-01.webp', '', '', 102480.00, 'uploads/room/ud-01.webp', '2022-06-11 06:59:02', '2022-06-11 06:59:02', 'UDL'),
(11, 'ud-02.webp', 'ud-02.webp', '', '', 102480.00, 'uploads/room/ud-02.webp', '2022-06-11 06:59:02', '2022-06-11 06:59:02', 'UDL'),
(12, 'ud-03.webp', 'ud-03.webp', '', '', 251532.00, 'uploads/room/ud-03.webp', '2022-06-11 06:59:02', '2022-06-11 06:59:02', 'UDL'),
(13, 'LAO-POET-HOTEL-Logo-_BW_-Isolated.ico', 'LAO-POET-HOTEL-Logo-_BW_-Isolated.ico', '', '', 42830.00, 'uploads/room/LAO-POET-HOTEL-Logo-_BW_-Isolated.ico', '2022-06-16 06:37:19', '2022-06-16 06:37:19', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `ivid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `bookid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `total` float NOT NULL,
  `trn_date` date NOT NULL,
  `status` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `maker` int(10) NOT NULL,
  `paid` float NOT NULL,
  `paid_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`ivid`, `bookid`, `total`, `trn_date`, `status`, `created_at`, `updated_at`, `maker`, `paid`, `paid_type`) VALUES
('I31c75d69', 'Bf555012f', 120000, '2022-06-19', 'B', '2022-06-19 04:30:35', '2022-06-19 04:30:35', 58, 0, 2),
('I4dba147d', 'Bb74e4c2d', 120000, '2022-06-19', 'C', '2022-06-19 04:34:44', '2022-06-19 04:34:44', 58, 0, 2),
('I814ac097', 'B6190d579', 120000, '2022-06-19', 'C', '2022-06-19 04:24:17', '2022-06-19 04:24:17', 58, 0, 2),
('Ie104698e', 'Ba1eb673e', 960000, '2022-06-19', 'C', '2022-06-19 04:24:50', '2022-06-19 04:24:50', 58, 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `order` int(2) DEFAULT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `target` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `title`, `order`, `slug`, `target`, `parent`) VALUES
(1, 'Reservation', 1, '', '_top', NULL),
(2, 'ການຈອງ', 2, '/booking', '_self', 1),
(3, 'check in', 3, '/checkin', '_self', 1),
(4, 'ຈັດການຫ້ອງພັກ', 1, '', '_top', NULL),
(5, 'ຫ້ອງພັກ', 2, '/rooms', '_self', 4),
(6, 'ປະເພດຫ້ອງພັກ', 3, '/rooms/type', '_self', 4),
(7, 'ຈັດການຜູ້ໃຊ້ລະບົບ', 1, '', '_top', NULL),
(8, 'ຜູ້ໃຊ້ລະບົບ', 2, '/users', '_self', 7),
(9, 'ສິດຜູ້ໃຊ້ລະບົບ', 3, '/users/permission', '_self', 7),
(10, 'ລາຍງານ', NULL, '/reports', '_top', NULL),
(11, 'ເນື້ອຫາ Mobile', NULL, '/blog', '_top', NULL),
(12, 'ຂ່າວສານ, popup, slide', NULL, '/', '_top', 11),
(13, 'ຈັດການລູກຄ້າ', NULL, '/customer', '_top', NULL),
(14, 'ລູກຄ້າ', NULL, '', '_self', 13),
(15, 'ການຈອງ', NULL, '/booking', '_self', 10),
(16, 'ຫ້ອງພັກ', NULL, '/rooms', '_self', 10),
(17, 'ພະນັກງານ', NULL, '/staff', '_self', 10),
(18, 'ລູກຄ້າ', NULL, '/customers', '_self', 10),
(19, 'ສະຫຼຸບປະຈຳເດືອນ', NULL, '/monthly', '_self', 10);

-- --------------------------------------------------------

--
-- Table structure for table `payment_type`
--

CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL,
  `ac_no` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `placeholder` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `qrcode` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `info` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_type`
--

INSERT INTO `payment_type` (`id`, `ac_no`, `placeholder`, `qrcode`, `info`) VALUES
(1, '0010000000434', 'POET HOTEL LAO VTE', '', 'ເງິນໂອນ'),
(2, '', '', '', 'ຜ່ານເຄົ້າເຕີ່'),
(3, '', '', '', 'ຕິດໜີ້');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `cover_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `con_type` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `stat` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `body`, `cover_image`, `con_type`, `stat`, `created_at`, `updated_at`) VALUES
(7, 'slide01', 'Hotel', '/uploads/blog/slide01.png', 'SLI', 1, '2022-06-08 16:25:51', '2022-06-08 16:25:51'),
(8, 'slide promot', 'test', '/uploads/blog/cyber-security-global-communication-concept.jpg', 'PUP', 1, '2022-06-08 16:39:47', '2022-06-08 16:39:47'),
(9, 'slide01', 'Hotel', '/uploads/blog/slide01.png', 'NEW', 1, '2022-06-08 16:25:51', '2022-06-08 16:25:51');

-- --------------------------------------------------------

--
-- Table structure for table `posts_type`
--

CREATE TABLE `posts_type` (
  `id` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `info` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts_type`
--

INSERT INTO `posts_type` (`id`, `info`) VALUES
('NEW', 'ຂ່າວສານ'),
('PUP', 'ປັອບອັບ'),
('SLI', 'ສະໄລ້ໂຊ');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `pv_id` int(10) UNSIGNED NOT NULL,
  `pvname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_id` varchar(6) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`pv_id`, `pvname`, `country_id`, `created_at`, `updated_at`) VALUES
(1, 'ນະຄອນຫລວງວຽງຈັນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(2, 'ຜົ້ງສາລີ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(3, 'ຫລວງນ້ຳທາ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(4, 'ອຸດົມໄຊ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(5, 'ບໍ່ແກ້ວ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(6, 'ຫຼວງພະບາງ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(7, 'ຫົວພັນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(8, 'ໄຊຍະບູລີ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(9, 'ຊຽງຂວາງ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(10, 'ວຽງຈັນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(11, 'ບໍລິຄຳໄຊ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(12, 'ຄຳມ່ວນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(13, 'ສະຫວັນນະເຂດ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(14, 'ສາລະວັນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(15, 'ເຊກອງ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(16, 'ຈຳປາສັກ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(17, 'ອັດຕະປື', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48'),
(18, 'ໄຊສົມບູນ', 'LA', '2022-05-22 10:10:48', '2022-05-22 10:10:48');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `rid` int(10) UNSIGNED NOT NULL,
  `number` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `building` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `floor` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `room_type` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`rid`, `number`, `view`, `building`, `floor`, `price`, `room_type`, `status`, `created_at`, `updated_at`) VALUES
(1, '001', NULL, 'D1', '4', 120000.00, 'UBC', 'O', NULL, NULL),
(2, '002', NULL, 'D1', '1', 120000.00, 'UDL', 'O', NULL, NULL),
(3, '003', NULL, 'D1', '2', 13333.00, 'STBD', 'V', NULL, NULL),
(4, '004', NULL, 'D1', '2', 13333.00, 'STBD', 'O', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_facilities`
--

CREATE TABLE `room_facilities` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_statuses`
--

CREATE TABLE `room_statuses` (
  `scode` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `info` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `room_statuses`
--

INSERT INTO `room_statuses` (`scode`, `name`, `info`, `created_at`, `updated_at`) VALUES
('B', 'ຫ້ອງບໍ່ວ່າງ', NULL, NULL, NULL),
('O', 'ຍັງວ່າງ', NULL, NULL, NULL),
('V', 'ຫ້ອງເປື້ອນ', 'test', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_types`
--

CREATE TABLE `room_types` (
  `rtype` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `room_types`
--

INSERT INTO `room_types` (`rtype`, `name`, `description`, `created_at`, `updated_at`) VALUES
('STBD', 'standard', NULL, NULL, NULL),
('UBC', 'Urban Classic', 'Facilities<br/>\n<P>Front desk [24-hour]<br/>\n\nAirport transfer<br/>\n\nAirport transfer<br/>\n\nBicycle rental<br/>\n\nSwimming pool [<br/>', '2022-06-10 07:29:23', '2022-06-10 07:29:23'),
('UDL', 'Urban Deluxe', NULL, '2022-06-11 06:59:02', '2022-06-11 06:59:02');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `remember_me_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` int(11) NOT NULL,
  `district` int(11) NOT NULL,
  `village` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `dob` date DEFAULT NULL,
  `sex` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `istaff` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `username`, `mobile`, `email`, `password`, `remember_me_token`, `created_at`, `updated_at`, `role`, `district`, `village`, `image`, `dob`, `sex`, `istaff`) VALUES
(58, 'admin', 'admin', 'admin', '55057246', 'admin@mail.com', '$bcrypt$v=98$r=10$d1I5ELIKNQ6eAlXhEbB2nA$emAazscet+2OGML9SxdMuaQqARcMx38', NULL, '2022-06-16 15:34:20', '2022-06-16 15:34:20', 1, 0, '', '', NULL, '', 2836),
(64, 'laithong', 'singhalat', 'ef529284', '02055057246', 'laithong865@gmail.com', '$bcrypt$v=98$r=10$4s4uqbKEFhSkCYOSYMNqOw$kF5iFg118SKI/xL6Fd5PwUQ30C+tIII', NULL, '2022-06-19 02:57:59', '2022-06-19 02:57:59', 3, 0, '', '', NULL, '', 5787);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `title`, `description`) VALUES
(1, 'ADMIN', 'ສິດຜູ້ໃຊ້ສູງສຸດໃນລະບົບ'),
(2, 'STAFF', 'ສິດຜູ້ໃຊ້ສຳລັບພະນັກງານ'),
(3, 'GUEST', 'ສິດຜູ້ໃຊ້ສຳຫຼັບລູກຄ້າທົ່ວໄປ'),
(4, 'MG', 'ສິດສຳຫຼັບຜູ້ຈັດການທົ່ວໄປ');

-- --------------------------------------------------------

--
-- Table structure for table `user_role_mapings`
--

CREATE TABLE `user_role_mapings` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `create` tinyint(1) NOT NULL,
  `update` tinyint(1) NOT NULL,
  `delete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_role_mapings`
--

INSERT INTO `user_role_mapings` (`id`, `role_id`, `menu_id`, `create`, `update`, `delete`) VALUES
(1, 1, 1, 1, 1, 1),
(2, 1, 2, 1, 1, 1),
(3, 1, 3, 1, 1, 1),
(4, 1, 4, 1, 1, 1),
(5, 1, 5, 1, 1, 1),
(6, 1, 6, 1, 1, 1),
(7, 1, 7, 1, 1, 1),
(8, 1, 8, 1, 1, 1),
(9, 1, 9, 1, 1, 1),
(10, 1, 10, 1, 1, 1),
(11, 1, 11, 1, 1, 1),
(12, 1, 12, 1, 1, 1),
(13, 1, 13, 1, 1, 1),
(14, 1, 14, 1, 1, 1),
(15, 1, 15, 1, 1, 1),
(16, 1, 16, 1, 1, 1),
(17, 1, 17, 1, 1, 1),
(18, 1, 18, 1, 1, 1),
(19, 1, 19, 1, 1, 1),
(20, 2, 14, 1, 1, 1),
(21, 2, 15, 1, 1, 1),
(22, 2, 16, 1, 1, 1),
(23, 2, 17, 1, 1, 1),
(24, 2, 18, 1, 1, 1),
(25, 2, 10, 1, 1, 1),
(26, 2, 1, 1, 1, 1),
(27, 2, 4, 1, 1, 1),
(28, 2, 11, 1, 1, 1),
(29, 2, 12, 1, 1, 1),
(30, 2, 19, 1, 1, 1),
(31, 2, 2, 1, 1, 1),
(32, 2, 3, 1, 1, 1),
(33, 2, 5, 1, 1, 1),
(34, 2, 5, 1, 1, 1),
(35, 2, 13, 1, 1, 1),
(36, 4, 10, 1, 1, 1),
(37, 4, 15, 1, 1, 1),
(38, 4, 16, 1, 1, 1),
(39, 4, 19, 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `api_tokens_token_unique` (`token`),
  ADD KEY `api_tokens_user_id_foreign` (`user_id`);

--
-- Indexes for table `auth_pages`
--
ALTER TABLE `auth_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`ref_id`),
  ADD UNIQUE KEY `bookings_ref_id_unique` (`ref_id`);

--
-- Indexes for table `booking_room`
--
ALTER TABLE `booking_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `countries_cid_unique` (`cid`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `doc_no` (`doc_no`),
  ADD KEY `customers_district_id_foreign` (`district_id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`dt_id`),
  ADD KEY `districts_pv_id_foreign` (`pv_id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`ivid`),
  ADD UNIQUE KEY `bookid` (`bookid`),
  ADD UNIQUE KEY `ivid` (`ivid`),
  ADD KEY `ivid_2` (`ivid`),
  ADD KEY `bookid_2` (`bookid`),
  ADD KEY `maker` (`maker`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_type`
--
ALTER TABLE `posts_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`pv_id`),
  ADD KEY `provinces_country_id_foreign` (`country_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `rooms_room_type_foreign` (`room_type`),
  ADD KEY `rooms_status_foreign` (`status`);

--
-- Indexes for table `room_facilities`
--
ALTER TABLE `room_facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_statuses`
--
ALTER TABLE `room_statuses`
  ADD PRIMARY KEY (`scode`),
  ADD UNIQUE KEY `room_statuses_scode_unique` (`scode`);

--
-- Indexes for table `room_types`
--
ALTER TABLE `room_types`
  ADD PRIMARY KEY (`rtype`),
  ADD UNIQUE KEY `room_types_rtype_unique` (`rtype`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `user_role_mapings`
--
ALTER TABLE `user_role_mapings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `api_tokens`
--
ALTER TABLE `api_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `auth_pages`
--
ALTER TABLE `auth_pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_room`
--
ALTER TABLE `booking_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9822;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `dt_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1806;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `payment_type`
--
ALTER TABLE `payment_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `pv_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `rid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `room_facilities`
--
ALTER TABLE `room_facilities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_role_mapings`
--
ALTER TABLE `user_role_mapings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD CONSTRAINT `api_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_district_id_foreign` FOREIGN KEY (`district_id`) REFERENCES `districts` (`dt_id`) ON DELETE CASCADE;

--
-- Constraints for table `districts`
--
ALTER TABLE `districts`
  ADD CONSTRAINT `districts_pv_id_foreign` FOREIGN KEY (`pv_id`) REFERENCES `provinces` (`pv_id`) ON DELETE CASCADE;

--
-- Constraints for table `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `provinces_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`cid`) ON DELETE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_room_type_foreign` FOREIGN KEY (`room_type`) REFERENCES `room_types` (`rtype`) ON DELETE CASCADE,
  ADD CONSTRAINT `rooms_status_foreign` FOREIGN KEY (`status`) REFERENCES `room_statuses` (`scode`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
