  "use strict";

  var indx = 0;
  var imgSrcs =[];
  var selDiv = "";

  document.addEventListener("DOMContentLoaded", init, false);
  // Setup the dnd listeners.
  function init() {
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
    document.querySelector('#files').addEventListener('change', handleFileSelectButton, false);
    selDiv = document.querySelector("#selectedFiles"); 
  }

  function handleFileSelectButton(e) {
    if(!e.target.files || !window.FileReader) return;

    selDiv.innerHTML = "";
    imgSrcs =[];
    
    var files = e.target.files;
    console.log("the files:", files);
    var filesArr = Array.prototype.slice.call(files);

    console.log("fore");    
    filesArr.forEach(function(f){
      if(!f.type.match("image.*")) {
        return;
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        var html = "<img src=\"" + e.target.result + "\">"  ;//+ f.name
        //Här är src, pucha denna i en array
        selDiv.innerHTML += html;
        console.log("URL:" ,f.name);
        imgSrcs.push(e.target.result);
      }
      reader.readAsDataURL(f);
    });
    showStuff();
  }

  function handleFileSelect(e) {
    selDiv.innerHTML = "";
    imgSrcs =[];

    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files; 
    var filesArr = Array.prototype.slice.call(files);
   
    filesArr.forEach(function(f){
        if(!f.type.match("image.*")) {
          return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {

          var html = "<img src=\"" + e.target.result + "\">"  ;//+ f.name
        //Här är src, pucha denna i en array
        selDiv.innerHTML += html;
        console.log("URL:" ,f.name);
        imgSrcs.push(e.target.result);

        }
        reader.readAsDataURL(f);
        
    });

    showStuff();

  }

  function showStuff(){
    $('#pre-stitch').show();
    $('#pre-stitch2').show();
  }

  function start(){
    $('#stitching').show();
    //start_stitch();
    $('#stitched').show();
    var el = document.getElementById("stitching");
    el.scrollIntoView(true);
    computeFeatures(imgSrcs[indx++]);
    return false;
  }

  function handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }
