CREATE DATABASE IF NOT EXISTS `projet` ;

USE `projet`;
   CREATE TABLE IF NOT EXISTS `projet`.`localisation` ( 
  `idloc` int(11) DEFAULT NULL,
  `vdepart` varchar(50) DEFAULT NULL,
  `pdepart` varchar(50) DEFAULT NULL,
  `varrive` varchar(50) DEFAULT NULL,
  `parrive` varchar(50) DEFAULT NULL,
 
  `prix` float(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `projet`.`localisation` ( `idloc`,`vdepart`,`pdepart`,`varrive`,`parrive`) VALUES
	(1,`Lyon`,`France`,`Venise`,`Italie`);
    (2,`Paris`,`France`,`Venise`,`Italie`);
    (3,`Paris`,`France`,`Los-Angeles`,`USA`);

CREATE TABLE IF NOT EXISTS `projet`.`voyage` (
  `idvoyage` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   CONSTRAINT `FK_localisation` FOREIGN KEY (`loc_id`) REFERENCES `projet`.`localisation`(`idloc`)
  `loc_id` int(11) DEFAULT NULL,
  `nomvoyage` varchar(50) DEFAULT NULL,
  `hdepart` varchar(6) DEFAULT NULL,
  `harrive` varchar(6) DEFAULT NULL,
  `durre` varchar(6) DEFAULT NULL,
  `prix` float(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `projet`.`voyage` ( `idvoyage`,`idloc`,`nomvoyage`,`hdepart`,`harrive`,`durre`,`prix`) VALUES
	(1,`Escale Lyon - Venise`,`8h30`,`9h50`,'1h20',60);
    (2,`Escale Paris -  Venise`,`10h30`,`12h10`,`1h40`,120);
    (3,`Escale Paris - LA`,`12h05`,`13h15`,`11h10`,600);

 