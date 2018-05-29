/*All modules and dependencies required for the project, */
const express = require('express');
const stripe = require('stripe')('secret key');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping-cart');


mongoose.Promise = global.Promise;


const app = express();

// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Static folder
//app.use(express.static('${_dirname/public}'));

//Index Route.. Main Page of website
app.get('/', (req, res) =>{
    res.render('index');
});

//About page
app.get('/about', (req, res) =>{
    res.render('about');
});

//Collection Page
app.get('/collection', (req, res) =>{
    res.render('collection');
});

// Charge Route
//app.post('/charge', (req, res) =>{

//});

//Set port to Heroku's port or choose local port for server
const port = process.env.PORT || 5000;


//start the server, at the PORT variable 
app.listen(port, () => {
    console.log('Server started on ${port}');
});

