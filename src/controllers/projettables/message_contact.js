var Contact = require('../../models/projettables/contact');

exports.render = async function (req, res) {
  var defaultComponent = new Contact(req, res);

  await defaultComponent.initialize();

  await defaultComponent.setContactList(req);
  var contactList = await defaultComponent.getContactList();
  res.render('tmpl/contact.html', { items: contactList});
}