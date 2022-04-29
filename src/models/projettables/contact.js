var sql = require('../db/db_projet');

var connexion = null;

class Contact {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getContactList() {
    try {
      this.contactList = await connexion.query("SELECT idcontact, nomcontact, mailcontact, sujetcontact, mescontact FROM contact"); /*requet SQL pour recuperer les valeurs de la table contact **/ 

      return this.contactList;
    }
    catch (anError) {
      console.log('Error to get contact list!');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  async setContactList(rep) {
    try {
      var nom = rep.body.nomcontact; /*recuperation grace à la methode poste de la valeur contenu dans le input en html qui ce nomme nomcontact, on le stock dans le variable nom*/
      var mail = rep.body.mailcontact;
      var objet = rep.body.sujetcontact;
      var message = rep.body.mescontact;
      /*enregistrement d'un avis dans la base de données a chaque appui sur bouton envoyer. On utilise l'injection SQL INSERT INTO.    */ 
      this.contactList = await connexion.query(`INSERT INTO contact(idcontact,nomcontact,mailcontact,sujetcontact,mescontact) VALUES(NULL,"${nom}","${mail}","${objet}","${message}")`);
     
    }
    catch (anError) {
      console.log('Error to set contact list!');

      // See error from SQL Client
      //console.log(anError);
    }
  }


  getContact() {
    return this.contactList;
  }
}

module.exports = Contact;
