var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render("login");
});

router.get('/questionaire', (req, res) => {
  res.render("questionaire");
});
module.exports = router;
