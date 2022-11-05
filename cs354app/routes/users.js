var express = require('express');
var multer = require('multer');
var upload = multer();
var router = express.Router();
var path = require('path');
var app = express();
app.use(express.static('public'));

// create new user
router.post('/newUser', upload.none(), function(req, res) {
  console.log(req.body);
  let sql = `INSERT INTO users(actualname, username, pass, email, about_me) VALUES (?)`;
  let values = [
    req.body.actualname,
    req.body.email,
    "password",
    req.body.email,
    req.body.about_me
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    console.log(basePath);
    res.redirect('http://localhost:7777/login.html');
  })
});

module.exports = router;
