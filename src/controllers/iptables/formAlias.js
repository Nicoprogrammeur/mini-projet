
var FormAlias = require('../../models/iptables/formAlias');

exports.render = async function (req, res) {
  var defaultComponent = new FormAlias(req, res);

  await defaultComponent.initialize();
  
  var formList = await defaultComponent.getFormAliasList();

  res.render('tmpl/formAlias.html', { items: formList});
}