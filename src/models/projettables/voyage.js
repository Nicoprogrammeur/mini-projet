var sql = require('../db/db_projet');

var connexion = null;

class Voyage {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getVoyageList() {
    try {
      this.voyageList = await connexion.query("SELECT idvoyage, FK_localisation, loc_id, nomvoyage, hdepart, harrive, durre, prix FROM voyage");

      return this.voyageList;
    }
    catch (anError) {
      console.log('Error to get voyage list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getVoyage() {
    return this.voyageList;
  }
}

module.exports = Voyage;