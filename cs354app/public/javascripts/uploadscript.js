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
  submit.addEventListener('click', setUsername, false);
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
}