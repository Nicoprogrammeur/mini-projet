var sql = require('../db/db_projet');

var connexion = null;

class Ville {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getVilleList(rep) {
    try {
      var ville = rep.query.v;

      this.villeList = await connexion.query(`SELECT idloc, villeloc, idpaysloc, paysloc FROM localisation WHERE villeloc = "${ville}"`);  

      return this.villeList;
    }
    catch (anError) {
      console.log('Error to get ville list!');

      // See error from SQL Client
      //console.log(anError);
    }
  }

  getVille() {
    return this.villeList;
  }
}

module.exports = Ville;
