var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/questionaire', (req, res) => {
  res.render("questionaire");
});
module.exports = router;
