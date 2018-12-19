var express = require('express');
var app = express();
var port = 3000;

// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// materlize 

app.use('/static', express.static(__dirname + '/public'));

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CSS 
app.use('/static', express.static(__dirname + '/public'));

// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('./index');
})

app.get('/about', (req, res) => {
  res.render('./about');
})

app.get('/contact', (req, res) => {
  res.render('./contact');
})

var playersController = require('./controllers/playersController');
var gamesController = require('./controllers/gamesController');
var friendlyController = require ('./controllers/friendlyController');


app.use('/players', playersController);
app.use('/games', gamesController, friendlyController);




// get up to listen 
app.listen(port, function () {
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
  })