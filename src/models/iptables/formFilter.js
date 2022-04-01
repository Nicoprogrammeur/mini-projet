var sql = require('../db/db_mariadb');

var connexion = null;

class FormFilter {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFormFilterList() {
    try {
      this.formnatfilter = await connexion.query("SELECT idNat, name, ipAddressSrc, portSrc, ipAddressDst, portDst, type FROM nat_filter");

      return this.formnatfilter;
    }
    catch (anError) {
      console.log('Error to get nat filter !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getFormFilter() {
    return this.formnatfilter;
  }
}

module.exports = FormFilter;