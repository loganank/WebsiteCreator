const { response } = require('express');
const bcrypt = require("bcrypt")
var express = require('express');
var multer = require('multer');
var router = express.Router();
var path = require('path');
console.log(path);
require.main.filename;
const PDFDIR = path.join(__dirname, '../public/pdfs/');
const IMGDIR = path.join(__dirname, '../public/images/');
const VIDDIR = path.join(__dirname, '../public/videos/');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    if(file.fieldname == 'resume'){
      cb(null, PDFDIR);
    }else if(file.fieldname == 'profilepic'){
      cb(null, IMGDIR);
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
var user;

router.get('/', (req, res) => {
  console.log("hello");
   res.send("hello");
   console.log(res);
});

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
  var skills = req.body.skills.substring(0, req.body.skills.length-3);
  user = {
    name: req.body.actualname,
    propic: req.files['profilepic'][0].filename,
    email: req.body.email,
    desc: req.body.about_me,
    userResume: req.files['resume'][0].filename,
    vid: req.files['projectvid'][0].filename,
    skillz: skills,
    addinfo: req.body.additionalinfo,
  };

  let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  let userInfo = `INSERT INTO userInfo(actualname, username, email, about_me, skills, additionalinfo) VALUES (?)`;
  let values = [
    req.body.actualname,
    req.body.email,
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
    "/public/pdfs/"+req.files['resume'][0].filename,
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
    "/public/videos/"+req.files['projectvid'][0].filename,
    req.body.email,
    date
  ];
  db.query(vid, [vidValues], function(err, data, fields){
    if(err) throw err;
  });
    //save profile pic
    let pic = 'INSERT INTO pics(pic_location, username, date_added) VALUES (?)';
    let picValues = [
      "/public/images/" +req.files['profilepic'][0].filename,
      req.body.email,
      date
    ];
    db.query(pic, [picValues], function(err, data, fields){
      if(err) throw err;
      //res.render('generated.ejs', {user: user});
    });
   res.redirect('generated'); // redirect after post
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
      res.redirect('/');
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
    res.redirect('/');
  })
});

router.get('/generated', (req, res) => {
  res.render("generated", {user:user});
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
