var res = document.getElementById('resId');
var vid = document.getElementById('vidId');
if(res){
  res.addEventListener('click', openResDialog, false);
}
if(vid){
  vid.addEventListener('click', openVidDialog, false);
}
function openResDialog() {
    document.getElementById('uploadResId').click();
}
function openVidDialog() {
    document.getElementById('uploadVidId').click();
}