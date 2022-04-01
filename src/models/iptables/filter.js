var sql = require('../db/db_mariadb');

var connexion = null;

class Filter {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFilterList() {
    try {
      this.natfilter = await connexion.query("SELECT idNat, name, ipAddressSrc, portSrc, ipAddressDst, portDst, type FROM nat_filter");

      return this.natfilter;
    }
    catch (anError) {
      console.log('Error to get nat filter !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getFilter() {
    return this.natfilter;
  }
}

module.exports = Filter;