var sql = require('../db/db_projet');

var connexion = null;

class Local {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getLocalList() {
    try {
      this.localList = await connexion.query("SELECT idloc, vdepart, pdepart, varrive, parrive, prix, loc_img FROM localisation");

      return this.localList;
    }
    catch (anError) {
      console.log('Error to get localisation list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getLocal() {
    return this.localList;
  }
}

module.exports = Local;
