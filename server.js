var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
var User     = require('./app/models/user');
var router = express.Router();              // get an instance of the express Router
var UserRoutes = require('./app/routes/UserRoutes')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://admin:123456@localhost:27017/nodeapi',{ useMongoClient: true },function(error){
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

var port = process.env.PORT || 8080;        // set our port



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// ROUTES FOR OUR API
// =============================================================================
router.get('/', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// User Routes
router.use('/users', UserRoutes);










// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Application is running on port  ' + port);