-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 30/11/2022 às 13:46
-- Versão do servidor: 8.0.31-cll-lve
-- Versão do PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `zqykbxrz_aplicacao`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamento`
--

CREATE TABLE `agendamento` (
  `id` int NOT NULL,
  `capacidadeCaminhao` int NOT NULL,
  `dataSolicitacao` varchar(64) NOT NULL,
  `dataConclusao` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `cpf` int NOT NULL,
  `nome` varchar(128) NOT NULL,
  `senha` varchar(64) NOT NULL,
  `endereco` varchar(64) NOT NULL,
  `telefone` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `tipo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`cpf`, `nome`, `senha`, `endereco`, `telefone`, `email`, `tipo`) VALUES
(0, 'João', '123', 'Rua A', '123', 'joao@gmail.com', 3),
(1, 'Pedro', '123', 'Rua B', '123', 'pedro@gmail.com', 3),
(3, 'Brendo Costa dos Santos', '123', 'Avenida Lúcio Tomé Feteira 822', '21998370246', 'brendosantosc@gmail.com', 0),
(3, 'Brendo Costa dos Santos', '123', 'Avenida Lúcio Tomé Feteira 822, Bloco 12B AP 102', '21998370246', 'brendosantosc@gmail.com', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
