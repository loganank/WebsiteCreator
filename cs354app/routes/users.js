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
const saltRounds = 12;
var salt = bcrypt.genSaltSync(saltRounds);

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
      res.render('generated.ejs', {user: user});
    });
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

// create download generated
router.post('/downloadGenerated', upload.none(), function(req, res) {
  console.log("in submit questionaire");
  res.redirect('/index');
});

/*router.get('/downloadGenerated', (req, res) => {
  console.log("download");
  res.redirect('/index');
});*/


router.post('/createAccount', upload.none(), function(req, res) {
  console.log(req.body);
  let hash = bcrypt.hashSync(req.body.pass, salt);
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


router.post('/Auth', upload.none(), function(req, res) {
  console.log("authenticating user info...");
  var username = req.body.loginUsername;
  var password = req.body.loginPassword;
  console.log("username: "+ username +"\nplaintext pass: "+req.body.loginPassword);
  if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT pass FROM createdUsers WHERE username = ?', username, function(error, result, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (result.length > 0) {
        if(res.headersSent){
          console.log("headers sent");
        }
        bcrypt.compare(password, result[0].pass, function(err, r){
          if(res.headersSent){
            console.log("headers sent");
          }
          if(r){
            // put session variables here if we get time
            // Redirect to home page
            console.log("Yay password is true - in bcrypt compare - redirecting to index");
            res.redirect('/index');
          }else{
            //res.send('Incorrect Username and/or Password!');
            res.redirect('/login');
          }
        });
      }else{
        //res.send('Incorrect Username and/or Password!');
        res.redirect('/login');
      }
    });
  }else{
    //res.send('Incorrect Username and/or Password!');
    res.redirect('/login');
  }     
});

module.exports = router;
