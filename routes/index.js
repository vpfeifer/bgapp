var express = require('express');
var router = express.Router();

const os = require('os')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'THE BACKGROUND COLOR WEB PAGE',
    version: 'BLACK',
    hostname: os.hostname()
  });
});

module.exports = router;
