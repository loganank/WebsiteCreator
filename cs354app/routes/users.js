const { response } = require('express');
const bcrypt = require("bcrypt")
var express = require('express');
var multer = require('multer');
var router = express.Router();
var path = require('path');
require.main.filename;
const PDFDIR = path.join(__dirname, '../public/pdfs/');
const VIDDIR = path.join(__dirname, '../public/videos/');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    if(file.fieldname == 'resume' || file.fieldname == 'profilepic'){
      cb(null, PDFDIR);
    }else{
      cb(null, VIDDIR);
    }},
    filename: function (req, file, cb){
      if(file.fieldname == 'resume' || file.fieldname == 'profilepic'){
        cb(null, file.originalname);
      }else{
        cb(null, file.originalname);
      }
    }
});
var upload = multer({storage: storage});
var app = express();

// router.get("/resume", function(req, res, next){
//   var query = "SELECT * FROM resumes WHERE username = 'kyle@gmail.com'";
//   db.query(query, function(err, data){
//     if(err){
//       throw error;
//     }else{
//       user.userResume = req.body.resume_location;
//       response.render();
//     }
//   });
// });

// create new user
router.post('/userInfo', upload.fields(
  [
    {
      name:'resume',
      maxCount:1
    },
    {
      name:'projectvid',
      maxCount:1
    },
    {
      name:'profilepic',
      maxCount: 1
    }
  ]
), function(req, res) {
  console.log(req.body);   
  console.log(req.files);
  const user = {
    name: req.body.actualname,
    propic: "../public/pdfs/"+req.files['profilepic'][0].filename,
    email: req.body.email,
    desc: req.body.about_me,
    userResume: "",// "../public/pdfs/"+req.files['resume'][0].filename,
    vid: "../public/videos/"+req.files['projectvid'][0].filename,
    skillz: req.body.skills,
    addinfo: req.body.additionalinfo,
  };

  let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  let userInfo = `INSERT INTO userInfo(actualname, username, pass, email, about_me, skills, additionalinfo) VALUES (?)`;
  let values = [
    req.body.actualname,
    req.body.email,
    "password",
    req.body.email,
    req.body.about_me,
    req.body.skills,
    req.body.additionalinfo
  ];
  db.query(userInfo, [values], function(err, data, fields) {
    if (err){
      throw err;   
    }else{
      console.log("userInfo insert success!")
    } 
});
  //save resume
  var resql = 'INSERT INTO `resumes`(`resume_location`, `username`, `date_added`) VALUES (?)';
  let resValues = [
    PDFDIR+req.files['resume'][0].filename,
    req.body.email,
    date
  ];
  db.query(resql, [resValues], function(err, data, fields) {
    if (err){
      throw err;   
    }else{
      console.log("resumes insert success!")
    } 
  });
  

  //save vid
  let vid = 'INSERT INTO videos(vid_location, username, date_added) VALUES (?)';
  let vidValues = [
    VIDDIR+req.files['projectvid'][0].filename,
    req.body.email,
    date
  ];
  db.query(vid, [vidValues], function(err, data, fields){
    if(err) throw err;
  });
    //save profile pic
    let pic = 'INSERT INTO pics(pic_location, username, date_added) VALUES (?)';
    let picValues = [
      PDFDIR+req.files['profilepic'][0].filename,
      req.body.email,
      date
    ];
    db.query(pic, [picValues], function(err, data, fields){
      if(err) throw err;
      res.render('generated.ejs', {user: user});
    });
    res.redirect('../generated.html'); // redirect after post
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

router.post('/createAccount', upload.none(), function(req, res) {
  console.log(req.body);
  let hash = bcrypt.hashSync(req.body.pass, 12)
  let values = [
    req.body.username,
    req.body.email,
    hash,
  ];
  let sql = `INSERT INTO createdUsers(username,email,pass) VALUES (?)`;
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.redirect('http://localhost:7777/login.html');
  })
});

/*router.get('/Auth', (req, res) => {
  var username = req.body.loginUsername;
  var password = req.body.loginPassword;
  connection.query(
   'SELECT * FROM createdUsers where username=? AND pass=?', [username,password], 
   function(err, rows, fields) {
     password = extractpasswordfromrows(rows);//iterate and get result
     res.send(200, { success: password }); // Ok, have password here
     }
   );
   // Not Ok, don't have password here
   console.log(connection.threadId); //Value is not undefined
  });*/

module.exports = router;
