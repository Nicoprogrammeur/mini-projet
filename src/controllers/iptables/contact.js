var Contact = require('../../models/iptables/contact');

exports.render = async function (req, res) {
  var defaultComponent = new Contact(req, res);

  await defaultComponent.initialize();
  
  var contactList = await defaultComponent.getContactList();

  res.render('tmpl/contact.html', { items: contactList});
}