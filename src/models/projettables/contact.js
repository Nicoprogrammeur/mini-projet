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
      this.contactList = await connexion.query("SELECT idcontact, nomcontact, mailcontact, sujetcontact, mescontact FROM contact");

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
      var name = rep.body.nomcontact;
      var mail = rep.body.mailcontact;
      var objet = rep.body.objetcontact;
      var message = rep.body.mescontact;

      this.contactList = await connexion.query(`INSERT INTO contact(idcontact,nomcontact,mailcontact,sujetcontact,mescontact) VALUES(NULL,"${name}","${mail}","${objet}","${message}")`);
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
