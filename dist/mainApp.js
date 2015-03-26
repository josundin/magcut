//relativeBlobTreshold
/*
Input:  föregående blobmap
		nuvarande blobmap
		blobNr, vilken blob vi har clickat

*/
"use strict";

var testData = 	[0,1,1,1,1,1,1,1,1,1,
			 0,1,2,2,2,2,2,2,1,1,
			 0,1,2,3,3,3,3,3,1,1,
			 0,1,2,3,4,4,4,3,1,1,
			 0,1,2,3,4,5,5,3,1,1,
			 0,1,2,3,4,5,5,3,1,1,
			 0,1,2,3,4,4,4,3,1,1,
			 0,1,2,3,3,3,3,3,1,1,
			 0,1,2,2,2,2,2,2,1,1,
			 0,1,1,1,1,1,1,1,1,1];

////////////////////////////////////////////////////////////

var TSTEP = 1;

(function(_this){
    _this['relativeBlobTreshold'] = function(id, srcPixels, xSize, ySize, thresBlob, clickedPos){
        var myId = id;
        var myXsize = xSize;
        var myYsize = ySize;

		var statfind = new profiler();
		statfind.add("features");  

    	console.log("clickedPos", clickedPos);

		// var gradients = zeros(srcPixels.length);
		// getGradients(srcPixels, gradients, xSize, ySize);
		// console.log("gradients created");
		
		var labled = findBlobs(srcPixels, xSize, ySize, thresBlob);

		//put minus one in our selected regions
		var labeledClickedPos = labled.data[clickedPos];
		var ourSelectedRegion = [];
		console.log("labled clickedPos", labeledClickedPos);
		for(var x=0; x<labled.data.length; x++){
			if(labled.data[x] != labeledClickedPos){
				labled.data[x] = 0;
			}
			else{
				labled.data[x] = -1;
				ourSelectedRegion.push(x);
			}
		}

		console.log("size of blob", ourSelectedRegion.length ,"px")

		//now we need to create the distances
		statfind.start("features");
		getDistances(srcPixels, labled.data, xSize, ySize);
		statfind.stop("features");
		console.log("distances created in:", statfind.log(1), "ms"); 


		// var dists = numeric.add(gradients,numeric.floor(labled.data));
		var dists = numeric.floor(labled.data);
		console.log("our dists" ,dists.length);

		for(var x=0; x<ourSelectedRegion.length; x++){
			dists[ourSelectedRegion[x]] = 0;
		}
		if(ySize == 10){
			printa10(dists, 10);
		}
		else if( ySize == 16){
			printa(dists, 16)
		}

		var myBlob = dists.slice(); 
		//make it a blob
		makeBlob(myBlob, myId, xSize, ySize);

		console.log("printa myBlob");
		if(ySize == 10){
			printa10(myBlob, 10);
		}
		else if( ySize == 16){
			printa(myBlob, 16)
		}

		var decIndx = [];
		var decVal = [];
		 
        return{
            printId: function() {
                console.log("The ID is:", myId);
                return this.id;
            },
            updateThresholdIncreas: function() {
				subtactOne(dists, myXsize, myYsize, decIndx, decVal);

    //     		if(dists.length == 100){
				// 	printa10(dists, 10);
				// }
				// else if( dists.length == 256){
				// 	printa(dists, 16)
				// }

				myBlob = dists.slice(); 
				makeBlob(myBlob, myId, xSize, ySize);

        		if(dists.length == 100){
					printa10(myBlob, 10);
				}
				else if( dists.length == 256){
					printa(myBlob, 16)
				}
				return myBlob;
            },
            updateThresholdDecreas: function() {
                // console.log("The ID is:", myId);
				addOne(dists, myXsize, myYsize, decIndx, decVal);

    //     		if(dists.length == 100){
				// 	printa10(dists, 10);
				// }
				// else if( dists.length == 256){
				// 	printa(dists, 16)
				// }

				myBlob = dists.slice(); 
				makeBlob(myBlob, myId, xSize, ySize);

				// console.log("myBlob");

        		if(dists.length == 100){
					printa10(myBlob, 10);
				}
				else if( dists.length == 256){
					printa(myBlob, 16)
				}
				return myBlob;
            },
            getBlob: function() {
                return myBlob;
            }
        };
    };
}(this));

function printa(data, myImageH){

    var dptr = 0;
    for (var ypsilon = 0; ypsilon < myImageH; ypsilon++) {
        console.log(data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++] , data[dptr++], data[dptr++], data[dptr++], data[dptr++],"  ", ypsilon);    
    }
}


function makeBlob(myBlob, myId, xSize, ySize){
	var blobSize = 0;

	for(var y=1; y<ySize-1; y++){
		for(var x=1; x<xSize-1; x++){
		    var p = (y*xSize+x);

			if(myBlob[p] <= 0){
				myBlob[p] = myId;
				blobSize++;
			}
			else{
				myBlob[p] = 0;
			}
		}
	}
}

function addOne(mydists, xSize, ySize, decIndx, decVal){
	
	var zeroIndx = decIndx.pop();
	var indxValue = decVal.pop();
	if(zeroIndx){

		for(var y=1; y<ySize-1; y++){
			for(var x=1; x<xSize-1; x++){
				var p = (y*xSize+x);

				if(mydists[p] !== 0){
					mydists[p] = mydists[p] + TSTEP;
				}
		   	}
		}
		for(var x=0; x<zeroIndx.length; x++){
			mydists[zeroIndx[x]] = indxValue[x] + TSTEP;
		}
	}
}

function subtactOne(mydists, xSize, ySize, decIndx, decVal){
	var zeroIndx = [];
	var indxValue = [];
	for(var y=1; y<ySize-1; y++){
		for(var x=1; x<xSize-1; x++){
			var p = (y*xSize+x);

			if(mydists[p] !== 0){
				mydists[p] = mydists[p] - TSTEP;
				if(mydists[p] <= 0){
					zeroIndx.push(p);
					indxValue.push(mydists[p]); //>= 0 ? mydists[p] : -mydists[p]
				}
			}
	   	}
	}
	decIndx.push(zeroIndx);
	decVal.push(indxValue);
}

function getDistances(src, distances, xSize, ySize){
	var conArea = unique(distances)[0] - ((xSize * 2) + (ySize * 2) - 4);
	var cnt = 0;
	var itterImage = 0;
	do {
		for(var y=1; y<ySize-1; y++){
			for(var x=1; x<xSize-1; x++){
			    var p = (y*xSize+x);

			    if(distances[p] === 0){
			    	
					var q = [((y-1)*xSize+x), ((y+1)*xSize+x),(y*xSize+(x-1)), (y*xSize+(x+1))];

					if(distances[q[0]] === -1 || distances[q[1]] === -1 || distances[q[2]] === -1 || distances[q[3]] === -1 ){
						cnt ++;
						for(var i=0; i<q.length; i++){
							if(distances[q[i]] === -1){
								var d = new Vector(1, src[q[i]] - src[p]);
								
								distances[p] = d.length();
								// console.log(p, distances[q[0]], distances[q[1]],distances[q[2]],distances[q[3]]);
							}
						}
					}
					else if(distances[q[0]] !== 0 || distances[q[1]] !== 0 || distances[q[2]] !== 0 || distances[q[3]] !== 0){
						cnt ++;
						var zNeighbors = [];
						var vNeighbors = [];
						for(var i=0; i<q.length; i++){
							if(distances[q[i]] !== -1 && distances[q[i]] !== 0){
								zNeighbors.push(src[q[i]]);
								vNeighbors.push(distances[q[i]]);
							}
						}
						//Choose the min v value and that corresponding z value 
						var minv = _.min(vNeighbors);
						var d = new Vector(1, src[p] - zNeighbors[_.indexOf(vNeighbors, minv)]);
						distances[p] = d.length() + minv;
					}
		    	}		      
			}
		}
		itterImage++;
		if(cnt >= conArea) break;
	} while(true);

	console.log("itterImage", itterImage);
}


function getGradients(src, gradients, xSize, ySize){

	for(var y=1; y<ySize-1; y++) {
		for(var x=1; x<xSize-1; x++){

			var p = (y*xSize+x);
			var q = [((y-1)*xSize+x), ((y+1)*xSize+x),(y*xSize+(x-1)), (y*xSize+(x+1))];
			var gradient = 4 * src[p] - src[(y-1)*xSize+x] - src[(y+1)*xSize+x] - src[y*xSize+(x-1)] - src[y*xSize+(x+1)];
			gradients[p] = gradient >= 0 ? gradient : -gradient;		

		}
	}
};

function unique(arr){

    var value, counts = {};
    var i, l = arr.length;
    for( i=0; i<l; i+=1) {
        value = arr[i];
        if( counts[value] ){
            counts[value] += 1;
        }else{
            counts[value] = 1;
        }
    }

    return counts;
};
;"use strict";

var mosaics = [];
var scrollValue = 0;
//upp minus, ner pluss

var setupOverlaySelectView = (function(){
    function $(selector){
        var c = selector.charAt(0);
        if( c === '#' ){
            var element = document.getElementById(selector.slice(1,selector.length));
        }else{
            var element = document.getElementById(selector);
        }
        var self = {}
        var on = function(eventStr,callback){
            var events = eventStr.split(' ');
            var i, l = events.length;
            for( i=0; i<l; i+=1 ){
                if( element.attachEvent ){
                    element.attachEvent('on'+events[i], callback);
                }else{
                    element.addEventListener(events[i], callback, false);
                }
            }
            return self;
        };
        self.on = on;
        self.element = element;
        return self;
    }
    var canvas = null;

    return function(id,onChange){
    var localOnChange = (function(onChange){ return function(){
        onChange();
    }; })(onChange);

        canvas = $(id);
        var el = document.getElementById('ComputingBlobs');


        canvas.on('touchstart mousedown',function(e){
            //prevents the mouse down from having an effect on the main browser window:
            if (e.preventDefault) {
                e.preventDefault();
            }
            else if (e.returnValue) {
                e.returnValue = false;
            }
            console.log("down, scrollValue:", scrollValue);
            el.style.display = 'block';
        }).on('touchend mouseup',function(e){            // $('#ComputingBlobs').show();
            el.scrollIntoView(true);

            createImgObj(scrollValue);
        }).on('DOMMouseScroll mousewheel',function(e){
            if (e.preventDefault) {
                e.preventDefault();
            } //standard
            else if (e.returnValue) {
                e.returnValue = false;
            }
			var delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;

			if(delta > 0 && scrollValue < (mosaics.length -1) ){
                scrollValue = scrollValue + 1;
                putMosaic(scrollValue);
            }else if(delta < 0 && scrollValue > 0){
                scrollValue = scrollValue - 1;
                putMosaic(scrollValue);
            }
        });
    };
})();


var b2, b2ctx;
function selectview(id, mosaicin){
    mosaics = mosaicin;
    viewMosaic(mosaics);

    setupOverlaySelectView('#selectViewContainer',function(){
    });
}

function viewMosaic(mosaic){
    b2 = loadCanvas("selectViewContainer");

    b2.width=mosaic[0].width;
    b2.height=mosaic[0].height;
    
    b2ctx = b2.getContext("2d");
    b2ctx.globalAlpha = 0.7;

    for (var i = 0; i < mosaics.length; i++){
        b2ctx.drawImage(mosaics[i],0,0);
    }
}

function putMosaic(val){

    //Remove all the images.
    b2.width=mosaics[0].width;
    b2.height=mosaics[0].height;

    //For all the images which are not the selected one.
    b2ctx.globalAlpha = 0.5;
    for (var i = 0; i < mosaics.length; i++){
        if (i != val){
            b2ctx.drawImage(mosaics[i],0,0);
        }
    }
    //Put the selected image on top.
     b2ctx.globalAlpha = 1;
     b2ctx.drawImage(mosaics[val],0,0);
}

;  "use strict";
  // lets do some fun
  var canvas =  loadCanvas("tmpCanvas");//document.getElementById('canvas');
  var imgSrcs = [];

  var orbImages = [];
  var imagesRef = [];
  var selDiv = "";
  var index = 0, hindex = 0;
  var homographies = [];
  var orb = {};
  var stitch = {};
  var stitchImgs = [];
  var computedHs = {};
  var stat2 = new profiler();
  var result_canvas;
  stat2.add("features");   

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
    $('#chooseFiles').hide();
    $('#runAlgo').hide();
    stitchImgs = [];
    $('#stitching').show();
    var el = document.getElementById("stitching");
    el.scrollIntoView(true);
    console.log("LENGTH OF IMAGES", imgSrcs.length);

    if(isEmpty(computedHs)){
        imagesRef = imgSrcs.slice();
        for (var i = 0; i < imgSrcs.length; i++){
            computedHs[i] = { val: false, bool: false, H: [] };
        }
    }
    orbImages = imgSrcs.slice();
    baseImg(otherImg);

    return false;
  }

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

  function handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

function baseImg(callback){

    var img = new Image();
    img.src = orbImages[index++];
    stitchImgs.push(img.src);
    img.onload = function() {

        stat2.start("features");
        var scale = findScale(img.width, img.height);
        
        var myImageW = img.width * scale |0;  
        var myImageH = img.height * scale |0;
        orb = orbObj(myImageW, myImageH);

        canvas.width  = myImageW;
        canvas.height = myImageH;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(this, 0, 0, myImageW, myImageH);
        var imageData = ctx.getImageData(0, 0, myImageW, myImageH);

        orb.setOrbBase(imageData, myImageW, myImageH);
        stat2.stop("features");
        console.log("features base img:", stat2.log(1), "ms");
        callback();
    }
};

function otherImg(){

    var img2 = new Image();
    img2.src = orbImages[index];
    // console.log("features base img:", stat2.log(1), "ms. found", num_corners );
    img2.onload = function() { 
        stat2.start("features");
      
        var scale = findScale(img2.width, img2.height);
        var myImageW = img2.width * scale |0;  
        var myImageH = img2.height * scale |0;

        canvas.width  = myImageW;
        canvas.height = myImageH;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(this, 0, 0, myImageW, myImageH);
        var imageData = ctx.getImageData(0, 0, myImageW, myImageH);

        orb.setOrbOther(imageData, myImageW, myImageH);
        if(orb.getNumMatches() > 27){
            homographies[hindex++] = orb.getHomograph();
            stitchImgs.push(orbImages[index]);
            
            console.log("homographies",homographies);
        }
        else{
            console.log("nada", orb.getNumMatches());
        }
        stat2.stop("features");
        console.log("features other img:", stat2.log(1), "ms");

        //check if done with imgLisst
       if(index < (orbImages.length - 1)){
            ++index;
            otherImg();
        }
        else{
            if(!computedHs[0].bool){
                console.log("INIT NOT DONE"); 
                stitch = imagewarp('CANVAS', homographies, stitchImgs, selView);
            }
            else{
                console.log("INIT DONE");
                hComputed();
            }
            canvas.width = 0;
            canvas.height = 0;
        }
    }
};

function selView(){
    computedHs[0] = { val: false, bool: true, H: homographies.slice() };
    var mosaic2 = stitch.getMosaic2();
    selectview('canvas', mosaic2);
    $('#stitching').hide();
    $('#poststitch').show();

    var el = document.getElementById('selectViewContainer');
    el.scrollIntoView(true);

};

function hComputed(){
    for (var i = 0; i < imgSrcs.length; i++){
        if (computedHs[i].val){
            computedHs[i] = {val: true, bool: true, H: homographies.slice() };
        }
        else{
          computedHs[i].val = false;
        }
    }
    stitch = imagewarp('CANVAS', homographies, stitchImgs, blobStuff);
}

function loadCanvas(id){
    var canvas = document.createElement('canvas');
    var div = document.getElementById(id); 
    canvas.id     = id;
    div.appendChild(canvas);

    return canvas;
};

var blob;
function createImgObj(val){
    var currentImagesRef = new Array(imagesRef.length);
    var rindx = 0;

    if(!computedHs[val].val){
      currentImagesRef[rindx++] = imagesRef[val]; 
      computedHs[val].val = true;
      for (var i = 0; i < imagesRef.length; i++){
          if (i != val){
              currentImagesRef[rindx++] = imagesRef[i];
              computedHs[i].val = false; 
          }
      }
      imgSrcs = currentImagesRef.slice();
      if(computedHs[val].bool){;
        stitch = imagewarp('CANVAS', computedHs[val].H, currentImagesRef, blobStuff);

      }
      else{
        console.log("!bool");
        index = 0; 
        hindex = 0;
        start();
      }
    }
    else{
      console.log("VAL else");
    }

}

function blobStuff(){
    console.log("do blob Stuff");
    if(!blob){
        blob = blobObj();
        blob.createBlobView();
    }else{
        blob.remove();
        blob.createBlobView();
    }
}


;//blobObj
var finalcanvas =  loadCanvas("final-canvas");
var mouse = {};
var myblobs1 = [];
(function(_this){
"use strict";

    _this['blobObj'] = function(){
    
        var thresholdfunc = {};


        var demo_opt = function(blobimg){
            this.threshold = 14;
            this.blobMap = blobimg;
        }

        var overlapData = {}; 
        
        var blobSelected = {};
        var bmaps = {}; 
        var blobMaps = [];

        $('#btn1').hide();
        createButton1();
        var globalNumberOfUnique = 0;

        function findBlobs(){
            globalNumberOfUnique = 0;
            var overlapBase = overlapData[0];
            var imgBaseChanels = getChanels(overlapBase);
            blobMaps = [];

            var thresValues = {};
            for (var xii = 1; xii < imagesRef.length; xii++){
                thresValues[xii] = 14;
            }
            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = overlapData[xii];
                var img1Chanels = getChanels(overlap);

                ////// Go find them blobs //////////
                myblobs1[xii] = findDiff(imgBaseChanels, img1Chanels, overlap.width, overlap.height, xii);
                overlap.blobs = myblobs1[xii].getData();
                console.log("getData", overlap.blobs);
                // Separate the aryes
                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){
                    
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    for (var x = 0; x < overlap.blobs.data.length; x++){
                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                        }
                    }
                    blobMaps.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }
            console.log("globalNumberOfUnique", globalNumberOfUnique);
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                blobSelected[xii + 1] = false;
            }
            return blobMaps;
        }

        function getThemBlobs(tvalues){

            console.log("get them Blobs");

            globalNumberOfUnique = 0;
            blobMaps = [];

            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = overlapData[xii];
                overlap.blobs = myblobs1[xii].compareToThres(tvalues[xii]);
                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){          
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    for (var x = 0; x < overlap.blobs.data.length; x++){
                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                        }
                    }
                    blobMaps.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }
            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                blobSelected[xii + 1] = false;
            }
            mouse.setNblobs(blobMaps, overlapData, blobSelected);
            redrawScrean(blobMaps, overlapData, blobSelected, mouse.getOffset());      
        }; 

        function getChanels(imageDatar){
            var dptr=0, dptrSingle=0;
            var imgR_f32 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.F32_t | jsfeat.C1_t);
            var imgG_f32 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.F32_t | jsfeat.C1_t);
            var imgB_f32 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.F32_t | jsfeat.C1_t);
            var imgAlpha = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.U8_t | jsfeat.C1_t);

            for (var y = 0; y < imageDatar.height; y++) {
                for (var x = 0; x < imageDatar.width; x++, dptr+=4, dptrSingle+=1) {
                    imgR_f32.data[dptrSingle] = imageDatar.data[dptr];
                    imgG_f32.data[dptrSingle] = imageDatar.data[dptr + 1];
                    imgB_f32.data[dptrSingle] = imageDatar.data[dptr + 2];
                    imgAlpha.data[dptrSingle] = imageDatar.data[dptr + 3];
                }
            }
            return [imgR_f32, imgG_f32, imgB_f32, imgAlpha];
        };

        function createButton1(){
            var button = document.createElement("input");
            button.type = "button";
            button.className="btn btn-primary";
            button.value = "reset";
            button.onclick = reset;
            var div = document.getElementById("btn1"); 
            div.appendChild(button);
        }

        function reset(){
            finalcanvas.width = 0;
            finalcanvas.height = 0;
            $('#btn1').hide();
            for (var xii = 0; xii < _.size(blobSelected); xii++){
                blobSelected[xii + 1] = false;
            }
            redrawScrean(bmaps, overlapData, blobSelected, mouse.getOffset()); 
            var el = document.getElementById('blobs');
            el.scrollIntoView(true);
        }
        return{
            createBlobView: function() {
                console.log("create blob view");

                result_canvas = loadCanvas("blobs");
                overlapData = stitch.getOverlap();
                var ModOverlapData = stitch.getModOverlap();
                 
                bmaps = findBlobs();

                $('#ComputingBlobs').hide();
                $('#blobInterface').show();

                mouse = interactMouse(bmaps, overlapData, blobSelected, overlapData[0].width, overlapData[0].height, ModOverlapData);
                mouse.setup(0);
                redrawScrean(bmaps, overlapData, blobSelected, mouse.getOffset());

                var el = document.getElementById('blobs');
                el.scrollIntoView(true);

                return 1;
            },
            getData: function() {
                return 1;
            },
            remove: function() {
                for (var xii = 1; xii < imagesRef.length; xii++){
                    console.log("REMOVE:", xii);
                    if(thresholdfunc[xii]){
                        gui.remove(thresholdfunc[xii]);
                    }
                }
                reset();
                //Remove element
                var element = document.getElementById('blobs');
                element.children.blobs.remove();
                result_canvas = {};
                blobSelected = {};
                overlapData = {}; 
                myblobs1 = [];
                bmaps = {}; 
                blobMaps = [];

                return 1;
            }
        };
    };
}(this));

