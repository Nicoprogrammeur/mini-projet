
var FormFilter = require('../../models/iptables/formFilter');

exports.render = async function (req, res) {
  var defaultComponent = new FormFilter(req, res);

  await defaultComponent.initialize();
  
  var formFilterList = await defaultComponent.getFormFilterList();

  res.render('tmpl/formFilter.html', { items: formFilterList});
}