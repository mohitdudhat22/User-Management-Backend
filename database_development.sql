-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2025 at 08:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `blacklistedtokens`
--

CREATE TABLE `blacklistedtokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expiresAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blacklistedtokens`
--

INSERT INTO `blacklistedtokens` (`id`, `token`, `expiresAt`, `createdAt`, `updatedAt`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzMwOTQsImV4cCI6MTc0MjAzNzg5NH0.cCX8KPPm6wY-11dm9sBhcldp0z5IKBlGO6fq1XqRhG0', '2025-03-15 11:24:54', '2025-03-08 11:28:45', '2025-03-08 11:28:45'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzMzNDQsImV4cCI6MTc0MjAzODE0NH0._bzdUu_3zOf7VSckRsgJlm4d_ETCxR4I-Rz7WgJQ0Zk', '2025-03-15 11:29:04', '2025-03-08 11:29:18', '2025-03-08 11:29:18'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyOTgsImV4cCI6MTc0MjExMDA5OH0.3-ZqEaHbt_cjONjYcTns9qkYPosrZ4FHtAntxWli8NU', '2025-03-16 07:28:18', '2025-03-09 07:28:27', '2025-03-09 07:28:27'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUzMTksImV4cCI6MTc0MjExMDExOX0.UbrNzXH1KZo_FmEQU1l3RtPtQkqtl4HtTfsWT4KJz4A', '2025-03-16 07:28:39', '2025-03-09 07:29:06', '2025-03-09 07:29:06'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImVtYWlsIjoibW9oaXRkdWRoYXQyMkBnbWFpbC5jb20iLCJpYXQiOjE3NDE1MDU4MDQsImV4cCI6MTc0MjExMDYwNH0.FfXhCa8YQHjJp9epFPDJ9VwK3msZneG3m6CP_WH_ZEQ', '2025-03-16 07:36:44', '2025-03-09 07:55:30', '2025-03-09 07:55:30'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTM0MTQsImV4cCI6MTc0MjExODIxNH0.UiXewev2TntETw1wp_Ew6eKE_vX9_MQhwDQWxbeEcVM', '2025-03-16 09:43:34', '2025-03-09 09:50:23', '2025-03-09 09:50:23'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTM4MjUsImV4cCI6MTc0MjExODYyNX0.sv-Zgr0vTVHwT_jcGS3Q8F2EldkkLd8pVw5Ao182HyM', '2025-03-16 09:50:25', '2025-03-09 10:37:19', '2025-03-09 10:37:19'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTY3MjUsImV4cCI6MTc0MjEyMTUyNX0.vHsrIw7mpN6fMWHrUXAghwvVC31_-skvaLGyBNDSU44', '2025-03-16 10:38:45', '2025-03-09 10:38:49', '2025-03-09 10:38:49'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTY4MDksImV4cCI6MTc0MjEyMTYwOX0.B9CK0k3fPXIpfs0nQ2hjlKhEjOHnCL6sux57OQFhFf8', '2025-03-16 10:40:09', '2025-03-09 10:49:23', '2025-03-09 10:49:23'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTc0MzIsImV4cCI6MTc0MjEyMjIzMn0.9CMIUIOf7Omyi7XI7BDOuf4wfa7J1XZoYXf_SxBrB84', '2025-03-16 10:50:32', '2025-03-09 10:54:05', '2025-03-09 10:54:05'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTc2NjUsImV4cCI6MTc0MjEyMjQ2NX0.RkPxFZrQAk3Fgc81V8oAKBIeuoXfhzXpFUY30BWH0Ds', '2025-03-16 10:54:25', '2025-03-09 10:54:36', '2025-03-09 10:54:36'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjI1NTcsImV4cCI6MTc0MjEyNzM1N30.uEHzCGuB6Qc-FoCuwPiN2EDudwSkkJGlVQm8cFqU5oo', '2025-03-16 12:15:57', '2025-03-09 12:50:58', '2025-03-09 12:50:58');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `stateId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `stateId`, `createdAt`, `updatedAt`) VALUES
(1, 'Los Angeles', 1, '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(2, 'San Francisco', 1, '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(3, 'Houston', 2, '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(4, 'Dallas', 2, '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(5, 'Los Angeles', 2, '2025-03-08 11:09:12', '2025-03-08 11:09:12'),
(6, 'Los Angeles', 1, '2025-03-09 13:56:03', '2025-03-09 13:56:03'),
(7, 'San Francisco', 1, '2025-03-09 13:56:03', '2025-03-09 13:56:03'),
(8, 'Houston', 2, '2025-03-09 13:56:03', '2025-03-09 13:56:03'),
(9, 'Dallas', 2, '2025-03-09 13:56:03', '2025-03-09 13:56:03');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `customerType` enum('individual','business') DEFAULT 'individual',
  `notes` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loggedinusers`
--

CREATE TABLE `loggedinusers` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `lastActivity` datetime NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loggedinusers`
--

INSERT INTO `loggedinusers` (`id`, `userId`, `token`, `lastActivity`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzMwOTQsImV4cCI6MTc0MjAzNzg5NH0.cCX8KPPm6wY-11dm9sBhcldp0z5IKBlGO6fq1XqRhG0', '2025-03-08 11:24:54', 0, '2025-03-08 11:24:54', '2025-03-08 11:28:45'),
(2, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzMzNDQsImV4cCI6MTc0MjAzODE0NH0._bzdUu_3zOf7VSckRsgJlm4d_ETCxR4I-Rz7WgJQ0Zk', '2025-03-08 11:29:04', 0, '2025-03-08 11:29:04', '2025-03-08 11:29:18'),
(3, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzM2MzgsImV4cCI6MTc0MjAzODQzOH0.jbx6HC-b2zKwPaGn0jByP1pKDbXN9p-vRK7etdObWHM', '2025-03-08 11:33:58', 1, '2025-03-08 11:33:58', '2025-03-08 11:33:58'),
(4, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0MzUwMDMsImV4cCI6MTc0MjAzOTgwM30.kpqbBxEizc-eeEZMY0Hak05RYS-_1QikLLO6L5tMzIE', '2025-03-08 11:56:43', 1, '2025-03-08 11:56:43', '2025-03-08 11:56:43'),
(5, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE0NDM0NDcsImV4cCI6MTc0MjA0ODI0N30.-5Oup-_su0MkuanOAhAaKkX0T7UDuQKN-F5r2DwOPRI', '2025-03-08 14:17:27', 1, '2025-03-08 14:17:27', '2025-03-08 14:17:27'),
(6, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDQ4NzIsImV4cCI6MTc0MjEwOTY3Mn0.S1fAq5LYvDC0g-dlSCZIMWExIenk08RFWgYWTSyZ2_4', '2025-03-09 07:21:12', 1, '2025-03-09 07:21:12', '2025-03-09 07:21:12'),
(7, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDQ5OTcsImV4cCI6MTc0MjEwOTc5N30.CTGuBZGLJa8Cja0RZw6dcuo2pNjyexZqERgGR-jEV90', '2025-03-09 07:23:17', 1, '2025-03-09 07:23:17', '2025-03-09 07:23:17'),
(8, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUwNjksImV4cCI6MTc0MjEwOTg2OX0.dov0SIfhx_458O-JnJJC1wFge4W6vi-iH9eXflbI_2Y', '2025-03-09 07:24:29', 1, '2025-03-09 07:24:29', '2025-03-09 07:24:29'),
(9, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyMTIsImV4cCI6MTc0MjExMDAxMn0.q93hXo6fbD1W3AvEMHNoTtnsmfo9kZSgKMSxtOhELL8', '2025-03-09 07:26:52', 1, '2025-03-09 07:26:52', '2025-03-09 07:26:52'),
(10, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyMTUsImV4cCI6MTc0MjExMDAxNX0.vQdgWs8XpL5HrYdNHMXf9JxufQ6W6Ol7_u9v0TmcHqM', '2025-03-09 07:26:55', 1, '2025-03-09 07:26:55', '2025-03-09 07:26:55'),
(11, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyMjAsImV4cCI6MTc0MjExMDAyMH0.fSD4L9Sew9KUXqO_fNa6AK2C1ixZMGc7y20WSz5v0ec', '2025-03-09 07:27:00', 1, '2025-03-09 07:27:00', '2025-03-09 07:27:00'),
(12, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyNDYsImV4cCI6MTc0MjExMDA0Nn0.LJbZ_sOHc6Z7LvVxedTxwPmb_wnxWiMXHQ36kHLhRgM', '2025-03-09 07:27:26', 1, '2025-03-09 07:27:26', '2025-03-09 07:27:26'),
(13, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyNDcsImV4cCI6MTc0MjExMDA0N30.qGqegslsi3w6y2YNVJ4v0PUIzunn900f-7fxvAnIh5E', '2025-03-09 07:27:27', 1, '2025-03-09 07:27:27', '2025-03-09 07:27:27'),
(14, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyNDksImV4cCI6MTc0MjExMDA0OX0.PxtSdGPviLc_tqlOGhktMfBOeLT9CL8XvJduwuhArZ0', '2025-03-09 07:27:29', 1, '2025-03-09 07:27:29', '2025-03-09 07:27:29'),
(15, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyNTAsImV4cCI6MTc0MjExMDA1MH0.ZjuLcalXqwUrjnBV_AX8nklyFH6jxhRqEmrX-1OxYvY', '2025-03-09 07:27:30', 1, '2025-03-09 07:27:30', '2025-03-09 07:27:30'),
(16, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyNzksImV4cCI6MTc0MjExMDA3OX0.EIXaqwclicfSC-gkJOzA9UrUvoBRbspoAxZdY4kJIbQ', '2025-03-09 07:27:59', 1, '2025-03-09 07:27:59', '2025-03-09 07:27:59'),
(17, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyODEsImV4cCI6MTc0MjExMDA4MX0.MqI9_yvwGeztP9ZFQK8nzhTSFSpZiwvHXrQqxToA8gc', '2025-03-09 07:28:01', 1, '2025-03-09 07:28:01', '2025-03-09 07:28:01'),
(18, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUyOTgsImV4cCI6MTc0MjExMDA5OH0.3-ZqEaHbt_cjONjYcTns9qkYPosrZ4FHtAntxWli8NU', '2025-03-09 07:28:18', 0, '2025-03-09 07:28:18', '2025-03-09 07:28:27'),
(19, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUzMTksImV4cCI6MTc0MjExMDExOX0.UbrNzXH1KZo_FmEQU1l3RtPtQkqtl4HtTfsWT4KJz4A', '2025-03-09 07:28:39', 0, '2025-03-09 07:28:39', '2025-03-09 07:29:06'),
(20, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDUzNDgsImV4cCI6MTc0MjExMDE0OH0.nMeCfG9lq931lEBS-s7hko9--Rrhh4In9aegLBPkPUU', '2025-03-09 07:29:08', 1, '2025-03-09 07:29:08', '2025-03-09 07:29:08'),
(22, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDY5MzIsImV4cCI6MTc0MjExMTczMn0.D4ePj6SyoFAUQlB5dVTWlYfV8H_0LU1LZubLevw0urg', '2025-03-09 07:55:32', 1, '2025-03-09 07:55:32', '2025-03-09 07:55:32'),
(23, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDcwNDUsImV4cCI6MTc0MjExMTg0NX0.TVlichnn5yZCk9d12yyeh7eeF0MJnyR9DlvCDO6sr-Y', '2025-03-09 07:57:25', 1, '2025-03-09 07:57:25', '2025-03-09 07:57:25'),
(24, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc1OTcsImV4cCI6MTc0MjExMjM5N30.yBe_jxxvUIGxSiqL8rdcNyZ7hGPrYSxTnh83bhka1yk', '2025-03-09 08:06:37', 1, '2025-03-09 08:06:37', '2025-03-09 08:06:37'),
(25, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc3NTAsImV4cCI6MTc0MjExMjU1MH0.xzRi666jexXoPv-CQMmQF4upHceAqaJljYzDoFQDVgI', '2025-03-09 08:09:10', 1, '2025-03-09 08:09:10', '2025-03-09 08:09:10'),
(26, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc4NjgsImV4cCI6MTc0MjExMjY2OH0.0HQPkotJENBIoIJDyhDGSvbwoW3stlu9yY4PTmmyhAk', '2025-03-09 08:11:08', 1, '2025-03-09 08:11:08', '2025-03-09 08:11:08'),
(27, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc4OTAsImV4cCI6MTc0MjExMjY5MH0.BdzAptyFk35AyETdJPkgieGj5xd-fpClLvQ0CD8DsUU', '2025-03-09 08:11:30', 1, '2025-03-09 08:11:30', '2025-03-09 08:11:30'),
(28, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc5MTYsImV4cCI6MTc0MjExMjcxNn0.Kt5iGWOta0yQBj2vUKrVpXj3sFuIxlbKoz3zfV9WZQ8', '2025-03-09 08:11:56', 1, '2025-03-09 08:11:56', '2025-03-09 08:11:56'),
(29, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDc5NzIsImV4cCI6MTc0MjExMjc3Mn0.BcgQwDOf6gNxzwmFFpkaVAXxPfNsKLLQfVGX_Ru9rnA', '2025-03-09 08:12:52', 1, '2025-03-09 08:12:52', '2025-03-09 08:12:52'),
(30, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDgwNTksImV4cCI6MTc0MjExMjg1OX0.ZqmwNig5BRQhBSfcfRnA4ubiXjqPQyIccO7c0viLMqI', '2025-03-09 08:14:19', 1, '2025-03-09 08:14:19', '2025-03-09 08:14:19'),
(31, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDgwODAsImV4cCI6MTc0MjExMjg4MH0.U_0J-5MAeDlY0zgb9xlAHR4Ytbk3BAccnit9H6lCSiU', '2025-03-09 08:14:40', 1, '2025-03-09 08:14:40', '2025-03-09 08:14:40'),
(32, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDgxODQsImV4cCI6MTc0MjExMjk4NH0.a8wuew4KL0A63PzgjD_Rn426jjmNSrz-2pwFaqAOjo4', '2025-03-09 08:16:24', 1, '2025-03-09 08:16:24', '2025-03-09 08:16:24'),
(33, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDgzODUsImV4cCI6MTc0MjExMzE4NX0.eoKBOXP9vU997KiqgJ_tElxB1W3LuctJV6PNS-0dgVs', '2025-03-09 08:19:45', 1, '2025-03-09 08:19:45', '2025-03-09 08:19:45'),
(34, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDg2NzEsImV4cCI6MTc0MjExMzQ3MX0.t421vX7XBoUzGXHNdjrQ3YL56JMbjIljA5w-Z_5ANK4', '2025-03-09 08:24:31', 1, '2025-03-09 08:24:31', '2025-03-09 08:24:31'),
(35, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDk2ODUsImV4cCI6MTc0MjExNDQ4NX0.v-sD__gnhqcHkChjQ3aDguY3HBb9-i8NKOnoFnqVLp8', '2025-03-09 08:41:25', 1, '2025-03-09 08:41:25', '2025-03-09 08:41:25'),
(36, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDk3MzgsImV4cCI6MTc0MjExNDUzOH0.PGJuE6CnydPNbsRortzO_mwcgiltj5ykpUyy0p4eJYM', '2025-03-09 08:42:18', 1, '2025-03-09 08:42:18', '2025-03-09 08:42:18'),
(37, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDk4MDAsImV4cCI6MTc0MjExNDYwMH0.mhVx_g-AIIF5QhtVuIvC3R8hfVZ0fRIE1x8ppb0FmpU', '2025-03-09 08:43:20', 1, '2025-03-09 08:43:20', '2025-03-09 08:43:20'),
(38, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MDk5NTQsImV4cCI6MTc0MjExNDc1NH0.0lE-_XyrUI5OOsIbepfI8q9dxgzrpdSAz8BvB3iFFc8', '2025-03-09 08:45:54', 1, '2025-03-09 08:45:54', '2025-03-09 08:45:54'),
(39, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTIwNTAsImV4cCI6MTc0MjExNjg1MH0.AxAGItSFsleK1neOczmrHO8DrDny4JSvGIoJfe5IAYA', '2025-03-09 09:20:50', 1, '2025-03-09 09:20:50', '2025-03-09 09:20:50'),
(40, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTI0MjksImV4cCI6MTc0MjExNzIyOX0.6-G5GA1Fu_L3GsDrWujSMYgi3OO8PBkF2weIDApTSVA', '2025-03-09 09:27:09', 1, '2025-03-09 09:27:09', '2025-03-09 09:27:09'),
(41, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTMxNDgsImV4cCI6MTc0MjExNzk0OH0.PUP4y-klORSfjddxVAVX-hHoN3SnL9DF3OElzymcigk', '2025-03-09 09:39:08', 1, '2025-03-09 09:39:08', '2025-03-09 09:39:08'),
(42, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTM0MTQsImV4cCI6MTc0MjExODIxNH0.UiXewev2TntETw1wp_Ew6eKE_vX9_MQhwDQWxbeEcVM', '2025-03-09 09:43:34', 0, '2025-03-09 09:43:34', '2025-03-09 09:50:23'),
(43, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTM4MjUsImV4cCI6MTc0MjExODYyNX0.sv-Zgr0vTVHwT_jcGS3Q8F2EldkkLd8pVw5Ao182HyM', '2025-03-09 09:50:25', 0, '2025-03-09 09:50:25', '2025-03-09 10:37:19'),
(44, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTY3MjUsImV4cCI6MTc0MjEyMTUyNX0.vHsrIw7mpN6fMWHrUXAghwvVC31_-skvaLGyBNDSU44', '2025-03-09 10:38:45', 0, '2025-03-09 10:38:45', '2025-03-09 10:38:49'),
(45, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTY4MDksImV4cCI6MTc0MjEyMTYwOX0.B9CK0k3fPXIpfs0nQ2hjlKhEjOHnCL6sux57OQFhFf8', '2025-03-09 10:40:09', 0, '2025-03-09 10:40:09', '2025-03-09 10:49:23'),
(46, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTc0MzIsImV4cCI6MTc0MjEyMjIzMn0.9CMIUIOf7Omyi7XI7BDOuf4wfa7J1XZoYXf_SxBrB84', '2025-03-09 10:50:32', 0, '2025-03-09 10:50:32', '2025-03-09 10:54:05'),
(47, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTc2NjUsImV4cCI6MTc0MjEyMjQ2NX0.RkPxFZrQAk3Fgc81V8oAKBIeuoXfhzXpFUY30BWH0Ds', '2025-03-09 10:54:25', 0, '2025-03-09 10:54:25', '2025-03-09 10:54:36'),
(48, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTc5MzIsImV4cCI6MTc0MjEyMjczMn0.hGmkQXE8ONQvzKa2GI4kzGsvTrnbe22a_2a0h8i6vGY', '2025-03-09 10:58:52', 1, '2025-03-09 10:58:52', '2025-03-09 10:58:52'),
(49, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MTgxMzksImV4cCI6MTc0MjEyMjkzOX0.ytnt-eYo265EkylX5JVnR-IuxPK39TmqcCOVBOR-TdI', '2025-03-09 11:02:19', 1, '2025-03-09 11:02:19', '2025-03-09 11:02:19'),
(50, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjIzMTUsImV4cCI6MTc0MjEyNzExNX0.95BJLYGcWwRHFaHXtLL_QFR1t93WOF9qBsO8O2bR29M', '2025-03-09 12:11:55', 1, '2025-03-09 12:11:55', '2025-03-09 12:11:55'),
(51, 34, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTc0MTUyMjQwMCwiZXhwIjoxNzQyMTI3MjAwfQ.j0qyrHqWdiKeQ7T93WfEIZFI2XTuvXgCkNgzm32938o', '2025-03-09 12:13:20', 1, '2025-03-09 12:13:20', '2025-03-09 12:13:20'),
(52, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjI1NTcsImV4cCI6MTc0MjEyNzM1N30.uEHzCGuB6Qc-FoCuwPiN2EDudwSkkJGlVQm8cFqU5oo', '2025-03-09 12:15:57', 0, '2025-03-09 12:15:57', '2025-03-09 12:50:58'),
(53, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjMxOTEsImV4cCI6MTc0MjEyNzk5MX0.drac-cldEta4mKw55sUoZSzFpWq2CxpEPpUZS8uGp4M', '2025-03-09 12:26:31', 1, '2025-03-09 12:26:31', '2025-03-09 12:26:31'),
(54, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjQ2NjcsImV4cCI6MTc0MjEyOTQ2N30.a4Q4wQ4JCtEyd1tpk17cyIBkeDc6RdeMINOfJAHCDBc', '2025-03-09 12:51:07', 1, '2025-03-09 12:51:07', '2025-03-09 12:51:07'),
(55, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjQ4NDYsImV4cCI6MTc0MjEyOTY0Nn0._lLtFE2ntrC5TRlQoUiNrg4fvyENlHWXrWfxe6rkLJQ', '2025-03-09 12:54:06', 1, '2025-03-09 12:54:06', '2025-03-09 12:54:06'),
(56, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjQ5OTQsImV4cCI6MTc0MjEyOTc5NH0.xN-iNTLsN4FQXjm3Y2TK8InQgx3KNH4KLqH1aj3McpU', '2025-03-09 12:56:34', 1, '2025-03-09 12:56:34', '2025-03-09 12:56:34'),
(57, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1MjYwNDIsImV4cCI6MTc0MjEzMDg0Mn0.2QFvYiTnvx2nkj5iFlbcRx7Pu7gG1AyKMUXOB5un9WI', '2025-03-09 13:14:02', 1, '2025-03-09 13:14:02', '2025-03-09 13:14:02'),
(58, 33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoiam9objFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDE1NDY0NjMsImV4cCI6MTc0MjE1MTI2M30.N1_uc0YA3fRwW2QpJz3HswWe7jo3W-cR2UCJdpFDKHo', '2025-03-09 18:54:23', 1, '2025-03-09 18:54:23', '2025-03-09 18:54:23');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `can_create` tinyint(1) DEFAULT 0,
  `can_read` tinyint(1) DEFAULT 0,
  `can_update` tinyint(1) DEFAULT 0,
  `can_delete` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `role_id`, `can_create`, `can_read`, `can_update`, `can_delete`) VALUES
(1, 2, 1, 1, 0, 0),
(2, 1, 0, 0, 0, 0),
(3, 3, 0, 0, 0, 0),
(4, 4, 0, 0, 0, 0),
(5, 15, 1, 1, 1, 1),
(6, 16, 0, 0, 0, 0),
(7, 1, 1, 1, 1, 1),
(8, 1, 1, 1, 1, 1),
(9, 1, 1, 1, 1, 1),
(10, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`, `description`) VALUES
(1, 'super-admin', '2025-03-08 11:54:59', '2025-03-08 11:55:20', 'Updated role description'),
(2, 'admin', '2025-03-09 12:22:36', '2025-03-09 12:22:36', 'Administrator role with full access'),
(3, 'customers', '2025-03-09 14:09:07', '2025-03-09 14:09:07', 'customers role with no access'),
(4, 'suppliers', '2025-03-09 14:09:30', '2025-03-09 14:09:30', 'suppliers role with no access'),
(5, 'suppliers-1', '2025-03-09 15:07:54', '2025-03-09 15:07:54', 'suppliers role with no access'),
(16, 'suppliers-2', '2025-03-09 15:20:59', '2025-03-09 15:20:59', 'suppliers role with no access');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250307142110-create-user-role.js'),
('20250307142204-create-user-role.js'),
('20250307142247-create-role.js'),
('20250307143109-create-user.js'),
('20250307144122-create-state.js'),
('20250307144129-create-city.js'),
('20250308082006-add-files-to-users.js'),
('20250308091920-add-role-to-users.js'),
('20250308112212-loggedIN.js'),
('20250308115149-add-description-to-roles.js'),
('20250308115434-add-description-to-roles.js'),
('20250308150628-create-permissions.js'),
('20250308150819-create-permissions.js'),
('20250309124245-create-user-roles.js'),
('20250309125345-create-supplier.js'),
('20250309128245-create-customer.js'),
('YYYYMMDDHHMMSS-add-files-to-users.js'),
('YYYYMMDDHHMMSS-create-blacklisted-token.js'),
('YYYYMMDDHHMMSS-create-customer.js'),
('YYYYMMDDHHMMSS-create-logged-in-user.js'),
('YYYYMMDDHHMMSS-create-supplier.js');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'California', '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(2, 'Texas', '2025-03-07 14:46:16', '2025-03-07 14:46:16'),
(3, 'California', '2025-03-08 11:08:27', '2025-03-08 11:08:27'),
(4, 'California', '2025-03-09 13:56:03', '2025-03-09 13:56:03'),
(5, 'Texas', '2025-03-09 13:56:03', '2025-03-09 13:56:03');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `email`, `contact`, `address`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Updated Supplier', 'updated@test.com', '+1234567890', '456 Updated St', 'active', '2025-03-09 16:06:12', '2025-03-09 16:06:25');

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`id`, `userId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(3, 35, 1, '2025-03-08 12:34:28', '2025-03-08 12:34:28'),
(4, 33, 1, '2025-03-09 12:28:30', '2025-03-09 12:28:30');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`files`)),
  `role` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `contact`, `postcode`, `password`, `hobbies`, `gender`, `createdAt`, `updatedAt`, `files`, `role`) VALUES
(33, 'John', 'Doe', 'john1@example.com', '+1234567890', '12345', '$2b$10$Tsh7HOF50zX4sMpGNnluhuqCu3U7y13tWnrBuG0fV7X.VftQ5gZXq', '[\"reading\",\"gaming\"]', 'male', '2025-03-08 11:02:47', '2025-03-08 11:03:19', '[\"uploads\\\\files-1741431799763-924659346.jpeg\"]', 'admin'),
(34, 'John edited 2', 'Doe', 'john@example.com', '+1234567890', '12345', '$2b$10$RAR2WG7DYxvBVrideDlec.6yNIIumV1DwQN5wf1CET0rkSjTHOa9S', '[\"reading\",\"gaming\"]', 'male', '2025-03-08 11:26:53', '2025-03-09 08:29:30', '[]', 'admin'),
(38, 'Mohit', 'Dudhat', 'mohitdudhat22@gmail.com', '9913239031', '394110', '$2b$10$o2/qcCNMEDJSfxUl4yEcE.xO4XUpVjjZdfEdZO/2GzV/LSs.919ci', '[\"gym\"]', 'male', '2025-03-09 08:31:24', '2025-03-09 11:44:45', '[]', 'user'),
(39, 'Coled', 'Russo', 'cibyq@mailinator.com', 'Qui in Nam labore qu', 'Molestiae facilis as', '$2b$10$nKXnqY7xn3XIuarZoi/lY.6VoIxzL7vcncSd.VzXXE9wcTKMxQF9W', '[\"Iste non ipsa dicta\"]', 'male', '2025-03-09 09:54:35', '2025-03-09 18:54:31', '[]', 'user'),
(42, 'Giacomo', 'Barrett', 'tunesybi@mailinator.com', 'Assumenda dignissimo', 'Ex harum quod aut di', '$2b$10$Q8WAtQDr00pqzh23US2gvO2T4V/B2AH6FzVpnL9dAhmO3YXdfPUxq', '[\"asdfasf\",\"asdfadsf\",\"asdfasdf\"]', '', '2025-03-09 10:58:37', '2025-03-09 10:58:37', '[]', 'admin'),
(43, 'John', 'Doe', 'john4@example.com', '+1234567890', '12345', '$2b$10$leQjD5xcUkEEUJsX4kuhBuzf6xNudgUJgcUOHWAiwp32NuQVriUuu', '[\"reading\",\"gaming\"]', 'male', '2025-03-09 16:10:06', '2025-03-09 16:10:06', '[]', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loggedinusers`
--
ALTER TABLE `loggedinusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_role` (`userId`,`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `loggedinusers`
--
ALTER TABLE `loggedinusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `loggedinusers`
--
ALTER TABLE `loggedinusers`
  ADD CONSTRAINT `loggedinusers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
