
var FormNat = require('../../models/iptables/formNat');

exports.render = async function (req, res) {
  var defaultComponent = new FormNat(req, res);

  await defaultComponent.initialize();
  
  var formNatList = await defaultComponent.getFormNatList();

  res.render('tmpl/formNat.html', { items: formNatList});
}