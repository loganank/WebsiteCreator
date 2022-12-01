import JSZip from 'jszip';
//import FileSaver from 'file-saver';

function downloadWebsite() {
    const zip = new JSZip();
    console.log("download");
    alert("download");
    /*zip.file("Hello.txt", "Hello World\n");
    
    zip.file("../images/puppy.jpg");

    zip.generateAsync({type: 'blob'}).then(function (content) {
        FileSaver.saveAs(content, 'website.zip');
    });*/
    window.location.href = "http://localhost:7777/index";
}