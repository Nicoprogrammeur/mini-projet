var sql = require('../db/db_mariadb');

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
      this.contactList = await connexion.query("SELECT id, name, ipAddress, port FROM nat_alias");

      return this.contactList;
    }
    catch (anError) {
      console.log('Error to get contact list!');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getContact() {
    return this.contactList;
  }
}

module.exports = Contact;
