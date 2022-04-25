-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`produit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produit` (
  `idproduit` INT NOT NULL,
  `taille` VARCHAR(20) NOT NULL,
  `couleur` VARCHAR(20) NOT NULL,
  `prix` VARCHAR(20) NOT NULL,
  `nomproduit` VARCHAR(20) NOT NULL,
  `referencesprod` VARCHAR(45) NOT NULL,
  `idimage` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idproduit`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `idcategories` INT NOT NULL AUTO_INCREMENT,
  `nomcategories` VARCHAR(10) NULL,
  `idproduit` INT NULL,
  PRIMARY KEY (`idcategories`),
  CONSTRAINT `idproduit`
    FOREIGN KEY ()
    REFERENCES `mydb`.`produit` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`panier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`panier` (
  `idpanier` INT NOT NULL,
  `prix` VARCHAR(45) NOT NULL,
  `idproduit` INT NOT NULL,
  PRIMARY KEY (`idpanier`),
  CONSTRAINT `idproduit`
    FOREIGN KEY ()
    REFERENCES `mydb`.`produit` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`commande`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`commande` (
  `idcommande` INT NOT NULL AUTO_INCREMENT,
  `prixtotal` INT NULL,
  `idpanier` INT NULL,
  PRIMARY KEY (`idcommande`),
  CONSTRAINT `idpanier`
    FOREIGN KEY ()
    REFERENCES `mydb`.`panier` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`loginregister`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`loginregister` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(100) NOT NULL,
  `f_name` VARCHAR(100) NOT NULL,
  `l_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`idclient`),
  CONSTRAINT `idpanier`
    FOREIGN KEY ()
    REFERENCES `mydb`.`panier` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
