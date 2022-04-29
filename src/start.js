var express = require('express');
var templateEngine = require('nunjucks');

var myParser = require("body-parser");

// Configuration d'Express
var app = module.exports = express();

app.use(myParser.urlencoded({extended : true}));

const N_PORT = 3000;
const N_LISTEN = 'localhost';

app.set('view cache', false);

// Configuration du lien entre Express & Nunjucks
templateEngine.configure('views', {
    autoescape: true,
    express: app
});

var start = require('./controllers/projettables/localisation');
app.get('/', start.render);

var home = require('./controllers/projettables/home');
app.get('/home', home.render);
var localisation = require('./controllers/projettables/localisation');
app.get('/localisation', localisation.render);
var voyage = require('./controllers/projettables/voyage');
app.get('/voyage', voyage.render);
var contact = require('./controllers/projettables/contact');
app.get('/contact', contact.render);
var contact = require('./controllers/projettables/message_contact');
app.post('/contact', contact.render);
var about = require('./controllers/projettables/about');
app.get('/about', about.render);


// Routes statiques
app.use('/css/bootstrap.min.css', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use('/css/bootstrap.min.css.map', express.static('node_modules/bootstrap/dist/css/bootstrap.min.css.map'));
app.use('/css/bootstrap-themes/', express.static('node_modules/bootstrap-themes/dist/'));
app.use('/css/common.css', express.static('views/css/common.css'));
app.use('/js/bootstrap.min.js', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js'));
app.use('/js/bootstrap.min.js.map', express.static('node_modules/bootstrap/dist/js/bootstrap.min.js.map'));
app.use('/js/jquery.slim.js', express.static('node_modules/jquery/dist/jquery.slim.js'));
app.use('/js/popper.min.js', express.static('node_modules/popper.js/dist/popper.min.js'));
app.use('/images', express.static('views/images/'));
app.use('/index.html', express.static('views/tmpl/index.html'));
app.use('/free.html', express.static('views/tmpl/free.html'));

// Démarrage du serveur
app.listen(N_PORT);
console.log('Application Started on http://' + N_LISTEN + ':' + N_PORT);

