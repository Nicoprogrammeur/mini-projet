var Voyage = require('../../models/projettables/voyage');

exports.render = async function (req, res) {
  var defaultComponent = new Voyage(req, res);

  await defaultComponent.initialize();
  
  var list = await defaultComponent.getVoyageList();

  res.render('tmpl/voyage.html', { items: list});
}