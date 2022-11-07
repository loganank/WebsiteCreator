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
    res.redirect('http://localhost:7777/login.html');
  })
});

// create new questionaire
router.post('/submitQuestionaire', upload.none(), function(req, res) {
  console.log("in submit questionaire");
  let sql = `INSERT INTO answers(username, answer_1, answer_2, answer_3, answer_4, answer_5) VALUES (?)`;
    let values = [
      req.body.email,
      req.body.answer_1,
      req.body.answer_2,
      req.body.answer_3,
      req.body.answer_4,
      req.body.answer_5
    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) throw err;
      res.redirect('http://localhost:7777/index.html');
    })
});

module.exports = router;
