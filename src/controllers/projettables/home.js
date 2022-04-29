//var Home = require('../../models/projettables/home');

exports.render = async function (req, res) {
  //var defaultComponent = new Home(req, res);

  //await defaultComponent.initialize();
  
  //var list = await defaultComponent.getLocalList();
  var list = '';

  res.render('tmpl/home.html', { items: list});
}