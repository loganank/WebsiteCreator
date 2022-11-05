var res = document.getElementById('resId');
var vid = document.getElementById('vidId');
var pic = document.getElementById('picId')
if(res){
  res.addEventListener('click', openResDialog, false);
}
if(vid){
  vid.addEventListener('click', openVidDialog, false);
}
if(pic){
  pic.addEventListener('click', openPicDialog, false);
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