drop table if exists CLIENT;

drop table if exists COMMANDE;

drop table if exists PANIER;

drop table if exists PRODUIT;
drop table if exists ADRESSE;

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
create table CLIENT
(
   NUMCLI int not null,
   NOMCLI varchar(20),
   PRENOMCLI varchar(20),
   MDP varchar(20),
   Datedenaiss date,
   Titre varchar(4),
   Email varchar(40),
   numadr int not null, 
   primary key (NUMCLI)
);

/*==============================================================*/
/* Table: COMMANDE                                              */
/*==============================================================*/
create table COMMANDE
(
   NUMCOM int not null,
   NUMCLI int not null,
   DATECOM date,
   quantite  int not null,
   NUMPRO int not null,
   MoyenPaimenet varchar(30),
   PrixTotal int not null,
   primary key (NUMCOM)
);

/*==============================================================*/
/* Table: panier                                                 */
/*==============================================================*/
create table PANIER 
(
   idPanier int not null, 
   NUMCOM int not null,
   Qcom int not null,
   TOTAL  int , 
   NUMCLI  int not null,
   primary key (idPanier)
);

/*==============================================================*/
/* Table: PRODUIT                                               */
/*==============================================================*/
create table PRODUIT
(
   NUMPRO               int not null,
   NOMPRO               varchar(1024),
   PRIX                 float(8,2),
   QSTOCK               int,
   taille     varchar(25),
   couleur     varchar(25),
   typePro varchar(20),
   primary key (NUMPRO)
);
/*==============================================================*/
/* Table: adresse                                               */
/*==============================================================*/
create table  ADRESSE
(
   numadr int not null,
   nom varchar(20),
   prenom varchar(20),
   tel int not null,
   pays  varchar(25),
   ville varchar(25), 
   codepostal varchar(25),
   delegation varchar(25),
   Fact varchar(20),
   primary key (numadr)
);


alter table COMMANDE add constraint FK_FAIRE foreign key (NUMCLI)
      references CLIENT (NUMCLI) on delete restrict on update restrict;

alter table CLIENT add constraint FK_CLIENT foreign key (numadr)
      references adresse (numadr) on delete restrict on update restrict;
      
alter table PANIER add constraint FK_panier  foreign key (NUMCLI)
      references CLIENT (numcli) on delete restrict on update restrict;
      
alter table COMMANDE add constraint FK_FAIRE foreign key (numpro)
      references produit(numpro) on delete restrict on update restrict;

alter table PANIER add constraint FK_panier  foreign key (NUMCOM)
      references CLIENT (NUMCOM) on delete restrict on update restrict;
      