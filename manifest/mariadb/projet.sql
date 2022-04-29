CREATE DATABASE IF NOT EXISTS `projet` ;
/*Creation de la base de donées  projet */

USE `projet`;
   CREATE TABLE IF NOT EXISTS `projet`.`localisation` (  /*créaton de la table localistaion */
  `idloc` int(11) DEFAULT NULL,
  `vdepart` varchar(50) DEFAULT NULL,
  `pdepart` varchar(50) DEFAULT NULL,
  `varrive` varchar(50) DEFAULT NULL,
  `parrive` varchar(50) DEFAULT NULL,
  `loc_img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8; /*On utilise comme moteur de base de données InooDB*/
INSERT INTO `projet`.`localisation` ( `idloc`,`vdepart`,`pdepart`,`varrive`,`parrive`, `loc_img`) VALUES 
  (1,'Lyon','France','Venise','Italie','train.jpg');
INSERT INTO `projet`.`localisation` ( `idloc`,`vdepart`,`pdepart`,`varrive`,`parrive`, `loc_img`) VALUES 
  (2,'Paris','France','Venise','Italie','train.jpg');
INSERT INTO `projet`.`localisation` ( `idloc`,`vdepart`,`pdepart`,`varrive`,`parrive`, `loc_img`) VALUES 
  (3,'Paris','France','Los-Angeles','USA','avion.jpg');
INSERT INTO `projet`.`localisation` ( `idloc`,`vdepart`,`pdepart`,`varrive`,`parrive`, `loc_img`) VALUES 
  (4,'Lyon','France','Berlin','Allemagne','bus.jpg');

CREATE TABLE IF NOT EXISTS `projet`.`voyage` (
  `idvoyage` int(11) NOT NULL AUTO_INCREMENT, /*L'auto increment permet d'eviter de rentrer a la main l'id cela permet d'avoir un id unique donc un voyage unique */
  `loc_id` int(11) DEFAULT NULL,
  `nomvoyage` varchar(50) DEFAULT NULL,
  `hdepart` varchar(6) DEFAULT NULL,
  `harrive` varchar(6) DEFAULT NULL,
  `durre` varchar(6) DEFAULT NULL,
  `prix` float(6) DEFAULT NULL,
  `voy_img` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idvoyage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `projet`.`voyage` ( `idvoyage`,`loc_id`,`nomvoyage`,`hdepart`,`harrive`,`durre`,`prix`, `voy_img`) VALUES
	(NULL,1,'Escale Lyon - Venise','8h30','9h50','1h20',60,'train.jpg'); /*on definis l'id NULL car on auto increment */
INSERT INTO `projet`.`voyage` ( `idvoyage`,`loc_id`,`nomvoyage`,`hdepart`,`harrive`,`durre`,`prix`, `voy_img`) VALUES
    (NULL,2,'Escale Paris -  Venise','10h30','12h10','1h40',120,'train.jpg');
INSERT INTO `projet`.`voyage` ( `idvoyage`,`loc_id`,`nomvoyage`,`hdepart`,`harrive`,`durre`,`prix`, `voy_img`) VALUES
    (NULL,3,'Escale Paris - LA','12h05','13h15','11h10',600,'avion.jpg');
INSERT INTO `projet`.`voyage` ( `idvoyage`,`loc_id`,`nomvoyage`,`hdepart`,`harrive`,`durre`,`prix`, `voy_img`) VALUES
    (NULL,4,'Escale Lyon - Berlin','8h30','9h15','45 min',200,'bus.jpg');

CREATE TABLE IF NOT EXISTS `projet`.`contact` (
  `idcontact` int(11) NOT NULL AUTO_INCREMENT,
  `nomcontact` varchar(50) DEFAULT NULL,
  `mailcontact` varchar(255) DEFAULT NULL,
  `sujetcontact` varchar(255) DEFAULT NULL,
  `mescontact` TEXT DEFAULT NULL,
  PRIMARY KEY (`idcontact`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `projet`.`contact` ( `idcontact`,`nomcontact`,`mailcontact`,`sujetcontact`,`mescontact`) VALUES
    (NULL,'Nico','nicolas@master.com',"Test de message contact","je suis un message tous ce qui a de plus normal");