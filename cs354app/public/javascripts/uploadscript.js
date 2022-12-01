var res = document.getElementById('resId');
var vid = document.getElementById('vidId');
var pic = document.getElementById('picId');
var submit = document.getElementById('submit');
if(res){
  res.addEventListener('click', openResDialog, false);
}
if(vid){
  vid.addEventListener('click', openVidDialog, false);
}
if(pic){
  pic.addEventListener('click', openPicDialog, false);
}
if(submit) {
  submit.addEventListener('click', function (event) {
    // all of the fields in the form
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var resume = document.getElementById('uploadResId');
    var aboutMe = document.getElementById('aboutMe');
    var additionalInfo = document.getElementById('additionalInfo');
    var projVid = document.getElementById('uploadVidId');
    var profPic = document.getElementById('uploadPicId');
    var resume = document.getElementById('uploadResId');


    var valid = new Boolean(true); // whether there are any errors
    var msg = "";                  // the validation message

    if (username.value == "") {
      valid = false;
      msg += "Please enter an username\n";
    }
    if (email.value == "") {
      valid = false;
      msg += "Please enter an email\n";
    }

    if (aboutMe.value == "") {
      valid = false;
      msg += "Please fill out the 'About yourself' section\n";
    }

    if (resume.value == "") {
      valid = false;
      msg += "Please enter a resume\n";
    }

    if (projVid.value == "") {
      valid = false;
      msg += "Please enter a project video\n";
    }

    if (profPic.value == "") {
      valid = false;
      msg += "Please enter a profile picture\n";
    }

    if (additionalInfo.value == "") {
      valid = false;
      msg += "Please fill out the 'Additional Info' section\n";
    }

    var skills = document.getElementsByClassName("skill");
    var skillsFound = [];
  
    for (let i = 0; i < skills.length; i++) {
      if (skillsFound.includes(skills[i].value)) {
        valid = false;
        msg += "Cannot have duplicate skills\n";
        break;
      }
      skillsFound.push(skills[i].value);
    }

    // validation errors
    if (!valid) {
      alert(msg);
      event.preventDefault(); 
    }
  }, false);
}

function openResDialog() {
    document.getElementById('uploadResId').click();
}

function openVidDialog() {
    document.getElementById('uploadVidId').click();
}

function openPicDialog() {
  document.getElementById('uploadPicId').click();
}

function setUsername() {
  let username = document.getElementById('email').value;
  sessionStorage.setItem("email", username);
  alert('hello');
}