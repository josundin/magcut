"use strict";

var imagesRefBike = ["../imgs/IMG_0050.jpg", "../imgs/IMG_0053.jpg"];
var imagesRefBike2 = ["../imgs/IMG_0050.jpg", "../imgs/IMG_0051.jpg", "../imgs/IMG_0053.jpg"];
var imagesRefSiencePark = ["../imgs/P1100328.jpg", "../imgs/P1100329.jpg"];
var imagesRefBird = ["../imgs/P1.jpg", "../imgs/P2.jpg"];

var imagesBike = ["IMG_0050", "IMG_0053"];
var imagesBike2 = ["IMG_0050", "IMG_0051", "IMG_0053"];
var imagesSiencePark = ["P1100328","P1100329"];
var imagesBird = ["P1","P2"];

// 50-53
var homographiesBike = [[0.9562448859214783, -0.04059208929538727, 55.0452766418457, 0.002029840601608157, 0.9665254354476929, 11.779176712036133, -0.00005650325692840852, -0.00007099410140654072, 0.9958619475364685]];
// 50-53-51
var homographiesBike2H1 = [[1.020303726196289, -0.010079147294163704, -42.59284591674805, -0.008457145653665066, 0.9905731081962585, -6.965245246887207, 0.00004839357643504627, -0.00012295154738239944, 0.9988846778869629],
                        [0.9562448859214783, -0.04059208929538727, 55.0452766418457, 0.002029840601608157, 0.9665254354476929, 11.779176712036133, -0.00005650325692840852, -0.00007099410140654072, 0.9958619475364685]]; 
//51-50-53
var homographiesBike2H2 = [[ 0.9660865664482117, -0.008302299305796623, 45.14383316040039, 0.005773747805505991, 0.9849867820739746, 9.751049995422363, -0.0000490144120703917, 0.00006797895184718072, 0.9983599185943604 ],
                        [0.8957809209823608, -0.025373294949531555, 98.51021575927734, 0.004517511930316687, 0.939185619354248, 21.728973388671875, -0.00012811814667657018, -0.00000596984045841964, 0.9856936931610107]];
//53-50-51
var homographiesBike2H3 = [[1.0311598777770996, 0.0011012349277734756, -54.12679672241211, -0.0024361235555261374, 1.0119781494140625, -11.21747875213623, 0.00006324340938590467, -0.000037644367694156244, 0.9971030950546265],
                        [1.0898643732070923, 0.06088623031973839, -113.0201416015625, -0.008569265715777874, 1.0580685138702393, -22.7808895111084, 0.00014498442760668695, 0.00005467134542413987, 0.983923614025116]];

//bird
var homographiesBird = [[1.0095304250717163, -0.016554025933146477, 8.953278541564941, 0.03932776674628258, 1.01807701587677, -168.96636962890625, -0.000007351650765485829, 0.00010901226050918922, 0.9818366169929504]];
// 28-29
var homographiesSiencePark = [[1.3479026556015015, 0.008745760656893253, -210.18344116210938, 0.15344436466693878, 1.1760369539260864, -84.88064575195312, 0.0006413722294382751, 0.00006606439274037257, 0.896777331829071]];

// var images = imagesSiencePark;
// var imagesRef = imagesRefSiencePark; 
// var homographies = homographiesSiencePark;

// var images = imagesBird;
// var imagesRef = imagesRefBird; 
// var homographies = homographiesBird;

var images = imagesBike2;
var imagesRef = imagesRefBike2; 
var homographies = [];
var allHomographies = [homographiesBike2H1,homographiesBike2H2,homographiesBike2H3];

var stitch = {};
var mouse = {};
var canvasDiv = 'CANVAS';
var imagesReady = false;
var result_canvas;  

var imageCanvases = {};
function enablestart() {
	if (imagesReady) {
		// var startbutton = document.getElementById('startbutton');
		// startbutton.value = "start";
		// startbutton.disabled = null;
		stitch = imagewarp(canvasDiv, homographiesBike2H1, imagesRef, selView);
	}
}

$(window).load(function() {
	imagesReady = true;
	enablestart();
});

var selDiv1 = document.querySelector("#selectedF1");
placeimgs(imagesRef, selDiv1);

// for (var i = 0;i < images.length;i++) {
// 	$("#"+images[i]).load(function(obj) {
// 		var elementId = obj.target.id;

// 		// copy the images to canvases
// 		var imagecanvas = document.createElement('CANVAS');
// 		// var imagecanvas = loadCanvas("blobs");
// 		imagecanvas.width = obj.target.width;
// 		imagecanvas.height = obj.target.height;
// 		imagecanvas.getContext('2d').drawImage(obj.target,0,0);
// 		imageCanvases[elementId] = imagecanvas;
// 	});
// }

function placeimgs(images, wdiv){
	var filesArr = Array.prototype.slice.call(images);
	for (var i = 0; i < images.length; i++) 
	{
		var image = new Image();
		image.src = images[i];
		wdiv.appendChild(image);
	}
};

function findScale(){
	return 1;
}

function loadCanvas(id){
    var canvas = document.createElement('canvas');
    var div = document.getElementById(id); 
    canvas.id     = id;
    div.appendChild(canvas);

    return canvas;
};

function selView(){
    console.log("selView");
    if(!localStorage.getItem('num')) {
        console.log("Non set", localStorage.getItem('num'));
    } else {
        console.log("number", localStorage.getItem('num'));
    }
    var mosaic2 = stitch.getMosaic2();
    selectview('canvas', mosaic2);
};

function createImgObj(val){
    var imagesRefTmp = new Array(imagesRef.length);
    var rindx = 0;

    //beroende på val, så sätter vi också H

    imagesRefTmp[rindx++] = imagesRef[val];
    for (var i = 0; i < imagesRef.length; i++){
        if (i != val){
            imagesRefTmp[rindx++] = imagesRef[i]; 
        }
    }

    homographies = allHomographies[val];

    console.log("old", imagesRef);
    console.log("new", imagesRefTmp);
    console.log("val", val);

    imagesRef = imagesRefTmp;

    stitch = imagewarp(canvasDiv, homographies, imagesRef, blobStuff);

    // blobStuff();
}

var finalcanvas =  loadCanvas("final-canvas");
function blobStuff(){

    var demo_opt = function(blobimg){
        this.threshold = 10;
        this.blobMap = blobimg;
    }

    var blobCanvas = loadCanvas("blobs");

    var overlapData = stitch.getOverlap();
    console.log("Length of overlap data ", overlapData.length);
    var myblobs1 = [];
    var blobSelected = {};
    var bmaps = findBlobs();
    var blobMaps = [];

    $('#btn1').hide();
    createButton1();
    var globalNumberOfUnique = 0;

    function findBlobs(){
        globalNumberOfUnique = 0;
        var overlapBase = overlapData[0];
        var imgBaseChanels = getChanels(overlapBase);
        blobMaps = [];
        var gui = new dat.GUI({ autoPlace: false });
        var customContainer = document.getElementById('thresblobs');
        customContainer.appendChild(gui.domElement);

        var thresValues = {};
        for (var xii = 1; xii < images.length; xii++){
            thresValues[xii] = 10;
        }
        for (var xii = 1; xii < images.length; xii++){
            var options = new demo_opt(xii);
            var thresholdfunc = gui.add(options, "threshold", 5, 20).step(1);
            
            thresholdfunc.onChange(function(value) {
                thresValues[this.object.blobMap] = value;
                getThemBlobs(thresValues)
            });
            
            //Denna ska loopa igenom alla element
            var overlap = overlapData[xii];
            var img1Chanels = getChanels(overlap);

            ////// Go find them blobs //////////
            myblobs1[xii] = findDiff(imgBaseChanels, img1Chanels, overlap.width, overlap.height);
            overlap.blobs = myblobs1[xii].getData();
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

    $('#ComputingBlobs').hide();
    $('#blobInterface').show();

    mouse = interactMouse(bmaps, overlapData, blobSelected, overlapData[0].width, overlapData[0].height);
    result_canvas = loadCanvas("blobs");
    redrawScrean(bmaps, overlapData, blobSelected, mouse.getOffset());

    var el = document.getElementById('blobs');
    el.scrollIntoView(true);

    function getThemBlobs(tvalues){
        globalNumberOfUnique = 0;
        blobMaps = [];

        for (var xii = 1; xii < images.length; xii++){
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

        // thresholdfunc.onFinishChange(function(value) {
        //   // Fires when a controller loses focus.
        // });    

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
}



