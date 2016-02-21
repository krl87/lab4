var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Luftig Family' });
});

//create kayley page
router.get('/kayley', function(req, res, next) {
  res.render('kayley', {title: 'Kayley Luftig'});
});

//create jonathan page
router.get('/jonathan', function(req, res, next) {
  res.render('jonathan', {title: 'Jonathan Luftig'});
});

//create taylor page
router.get('/taylor', function(req, res, next) {
  res.render('taylor', {title: 'Jonathan Luftig'});
});

//create courtney page
router.get('/courtney', function(req, res, next) {
  res.render('courtney', {title: 'Courtney Luftig'});
});

module.exports = router;
