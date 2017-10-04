var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    console.log("Global Middleware");
    next();
});

module.exports = router;