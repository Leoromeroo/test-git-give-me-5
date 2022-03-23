/* Un bloc de commentaire
*/
--une ligne de commentaire
/* Create a table called Personnes */
CREATE TABLE Personnes(
  Id integer PRIMARY KEY,
  prenom text,
  age int,
  metier text
);
/* Create few records in this table */
INSERT INTO
  Personnes
VALUES(1, 'Tom', 28, 'Cuisinier');
INSERT INTO
  Personnes
VALUES(2, 'Lucy', 18, 'Etudiante');
INSERT INTO
  Personnes
VALUES(3, 'Frank', 31, 'Cariste');
INSERT INTO
  Personnes
VALUES(4, 'Jane', 21, 'Musicienne');
INSERT INTO
  Personnes
VALUES(5, 'Robert', 54, 'Chauffeur');
-- 1. Afficher les toutes les colonnes de la table personne
SELECT
  *
FROM
  Personnes: -- 2. Afficher juste le prénom
select
  prenom
from
  personnes;
-- 3 affichez le prenom et l'age
select
  prenom,
  age
FROM
  -- 4 Affichez les informations de Lucy
select
  *
from
  personnes
where
  prenom = 'Lucy';
-- 5 affichez le prenom et l'age du Cuisinier
select
  prenom,
  age
from
  personnes
where
  metier = 'cuisinier';
-- 6 Affichez les personnes qui ne sont pas Cariste
select
  *
from
  personnes
where
  not metier = 'cariste';
-- 7 Affichez les personnes de plus de 30 ans
select
  *
from
  personnes
where
  age > 30;
-- 8 Affichez les personnes de moins de 40 ans
select
  *
from
  personnes
where
  age < 40;
-- 9 Afficher la personne de moins de 30 ans et qui est musicienne
select
  *
from
  personnes
where
  age < 30
  and metier = 'Musicienne';
-- 10 Afficher le Cuisinier et le Chauffeur
SELECT
  *
from
  personnes
WHERE
  metier = 'Cuisinier'
  or metier = 'Chauffeur';
--11 Affichez les personnes de moins de 40 ans et qui ont un id > 2
select
  *
from
  personnes
where
  age < 40
  and id > 2;
-- 12. trouvez les prénoms qui contiennent un 'a'
select
  prenom
from
  personnes
where
  prenom like '%a%';
-- 13. Trouvez les métiers qui contiennent à la fois un 'e' et un 'r'
select
  *
from
  personnes
where
  metier LIKE '%e%'
  and metier like '%r%';
-- Bonus Affichez les personnes qui ont un métier qui contient au moins 2 voyelles identiques trié par ordre alphabétique de prénom
  -- 14. Affichez le Cariste, le Cuisinier et l'Etudiante
select
  *
from
  personnes
where
  metier in ('Cariste', 'Cuisinier', 'Etudiante');
-- 15. affichez les personnes entre 20 et 40 ans
select
  *
from
  personnes
where
  age BETWEEN 20
  and 40;
-- 16. Affichez toute la table par ordre croissant d'age
select
  *
from
  personnes
order by
  age;
-- 17. Affichez les personnes qui ne sont pas compris entre 20 et 40 ans par ordre décroissant d'age
SELECT
  *
from
  personnes
WHERE
  age NOT BETWEEN 20
  and 40
order by
  age DESC;
CREATE Table voitures (
    id_voiture INT PRIMARY KEY NOT NULL,
    marque VARCHAR(20),
    modele VARCHAR(20),
    prix float,
    date_circulation date,
    couleur VARCHAR(20)
  );
INSERT INTO
  voitures(
    id_voiture,
    marque
    modele,
    prix,
    date_circulation,
    couleur
  )
VALUES
  (1, 'BMW', 'M5', 138000, 2019 -05 -26, 'bleu'),(2, 'ford', 'mustang', 196 -02 -05, 'noir'),(3, 'toyota', 'yaris', 15350, 2020 -12 -07, 'rouge'),(4, 'nissan', 'primera',1700,1998-07-20, 'blanc');
  UPDATE personnes SET fk_id_voiture = 1 where prenom = 'Jane';
  UPDATE personnes SET fk_id_voiture = 2 where prenom = 'Robert';
  UPDATE personnes SET fk_id_voiture = 3 where prenom = 'Tom';
  UPDATE personnes SET fk_id_voiture = 4 where prenom = 'Frank';
  alter table personnes add column  fk_id_voiture int;
  SELECT*from personnes WHERE fk_id_voiture is NULL ;
  SELECT*from personnes WHERE  fk_id_voiture is not NULL ;

 
 CREATE view propriete as 
  SELECT prenom, marque, modele from personnes join voitures on fk_id_voiture = id_voiture;
  SELECT* from propriete;
  insert into voitures VALUES (5,'Renault','Twingo',5000,'1998-05-05', 'vert bouteille');

  UPDATE personnes set fk_id_voiture = 5
  where prenom = 'Lucy';
