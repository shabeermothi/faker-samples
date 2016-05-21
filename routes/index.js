var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/samples', function(req, res, next) {
  res.render('partials/faker-samples/samples.html');
});

router.get('/images', function(req, res, next) {
  res.render('partials/faker-samples/image-sample.html');
});

module.exports = router;
