var Local = require('../../models/projettables/localisation');

exports.render = async function (req, res) {
  var defaultComponent = new Local(req, res);

  await defaultComponent.initialize();
  
  var list = await defaultComponent.getLocalList();

  res.render('tmpl/localisation.html', { items: list});
}