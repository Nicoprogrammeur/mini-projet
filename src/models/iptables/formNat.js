var sql = require('../db/db_mariadb');

var connexion = null;

class FormNat {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFormNatList() {
    try {
      this.formnatList = await connexion.query("SELECT idNat, nameNat, ipAddress, port, type FROM nat_rules");

      return this.formnatList;
    }
    catch (anError) {
      console.log('Error to get nat list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getFormNat() {
    return this.formnatList;
  }
}

module.exports = FormNat;
