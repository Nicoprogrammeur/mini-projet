var Ville = require('../../models/projettables/ville');

exports.render = async function (req, res) {
  var defaultComponent = new Ville(req, res);

  await defaultComponent.initialize();
  
  var villeList = await defaultComponent.getVilleList(req);

  res.render('tmpl/ville.html', { items: villeList});
}