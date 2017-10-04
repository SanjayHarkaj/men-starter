var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
var User     = require('./app/models/user');
var router = express.Router();
var UserRoutes = require('./app/routes/UserRoutes');
var AppMiddleware = require('./app/middleware/AppMiddleware');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router = AppMiddleware;

mongoose.connect('mongodb://admin:123456@localhost:27017/nodeapi',{ useMongoClient: true },function(error){
    if (error) {
        console.error('Please make sure Mongodb is installed and running!');
        throw error;
    }
});

var port = 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================

app.use('/api', router); // all of our routes will be prefixed with /api

router.get('/', function(req, res, next) {
    res.json({ message: 'Rest api working!' });
});

// User Routes
router.use('/users', UserRoutes);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Application is running on port  ' + port);