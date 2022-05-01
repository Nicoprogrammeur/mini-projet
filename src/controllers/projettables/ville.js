var Ville = require('../../models/projettables/ville');
var Voyage = require('../../models/projettables/voyage');

exports.render = async function (req, res) {
  var defaultComponent = new Ville(req, res);
  await defaultComponent.initialize();
  var villeList = await defaultComponent.getVilleList(req);

  var defaultComponent = new Voyage(req, res);
  await defaultComponent.initialize();
  var voyagelist = await defaultComponent.getVoyageList();

  var nom = req.query.v;

  res.render('tmpl/ville.html', { items: villeList, voyage: voyagelist, title: nom});

}