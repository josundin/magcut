// mouse(/touch) on a canvas

var cwidth, cheight;
var imgData = [], modImgData = [], blobData = [];
(function(_this){
"use strict";

    _this['interactMouse'] = function(overlap, imgs, selectedBlobs, w, h, modImgs){
        var blobSelected = {};
        var scrollThresh = 24, previousScrollThresh = 24;

        var relativeBlobs = {};
        var relativeBlobsIndxs = [];
        var clickedBlobs  = [];
        var blobtopCTX;
        var dDelta = 0, prevdDelta = 0;
        var HoverSelectCnt = 0;
        var refImgs = [];

        var SELBLOB  = 1;
        var PAINTIN  = 2;
        var PAINTOUT = 3;
        
        var hoveredIn = 0, previusHoveredIn = 0;
        var notSelecthoveredIn = 0, notSelectpreviusHoveredIn = 0;
        var startcalcDist = false;
        var radio = $('input[name=optradio]:checked', '#myForm').val(); 

        $('#myForm input').on('change', function() {
            radio = $('input[name=optradio]:checked', '#myForm').val(); 
            console.log("RADIO ", radio);
            console.log(blobSelected);
            console.log(_.contains(blobSelected, true));
            if(radio != 1 && !_.contains(blobSelected, true)){
                $('input[name=optradio]')[0].checked = true;
                radio = 1;
                alert("First, select which Layer/s to paint or erase on");
            }
            else if(radio == 1){
                document.body.style.cursor = "auto";
            }else if(radio == 3){
                document.body.style.cursor = "cell";
            }else{
                document.body.style.cursor = "crosshair";
            }
        });
   
        var numBlobs = 0, dragging = false, mouseDown = false;
        var clicked = 0, previusClicked = 0;
        var is_mixing_gradients = true;
        var ddx = 0, ddy = 0;
        blobSelected = selectedBlobs;
        cwidth = w;
        cheight = h;
        var setupOverlay = (function(){
            console.log("Do SET Up");
            document.body.style.cursor = "auto";
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
                // element.children.blobs.remove();
                self.on = on;
                self.element = element;

                return self;
            }

            var getPointerPositionsIn = function(e){

                var locations = [], // array of x,y pairs (finger locations)
                nLocations = 0, // number of locations
                nTouches, // number of touches to look through
                mx = 0, // mouse position
                my = 0,
                i, iLocation, iTouch; // temp for iterating
            
                if(e.type === "touchstart"
                || e.type === "touchmove"
                || e.type === "touchend"){
                    nTouches = e.touches.length;
                    for(i=0; i<nTouches; i+= 1){
                        nLocations += 1;
                    }
                }else{  
                    nLocations += 1;
                }

                var bRect = result_canvas_top.getBoundingClientRect();
                for(i=0; i<nLocations; i+=1){
                    locations[i] = { x: 0, y: 0 };
                    mx = ((e.clientX - bRect.left)*(result_canvas_top.width/bRect.width)) |0;           
                    if( mx > 0 && mx <= result_canvas_top.width){
                        locations[i].x = mx;
                    }
                    my = ((e.clientY - bRect.top)*(result_canvas_top.height/bRect.height)) | 0;
                    if( my > 0 && my <= result_canvas_top.height){
                        locations[i].y = my;
                    }
                }
                return locations;
            };

            var lastPos = [];//null;
            var currPos = [];//null;
            var p_lastPos = null;
            var p_currPos = null;
            var canvas = {};
            
        
            return function(id,onChange){
                var localOnChange = (function(onChange){ return function(){
                    onChange();
                }; })(onChange);

                canvas = $(id);
                canvas.width = 0;
                canvas.height = 0;

                canvas.on('touchstart mousedown',function(e){

                    //prevents the mouse down from having an effect on the main browser window:
                    if (e.preventDefault) {
                        e.preventDefault();
                    } 
                    else if (e.returnValue) {
                        e.returnValue = false;
                    } 
                    mouseDown = true;
                    if(radio == SELBLOB){
                        console.log("Check what blob is clicked");
                        
                        currPos = getPointerPositionsIn(e);
                        //Find out if we have a hit and which shape was clicked
                        for (var i= 1; i < numBlobs + 1; i++) {
                            var ourPos = (Math.abs(currPos[0].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x);
                            handleMouseOver(ourPos, i, refImgs);
                        }
                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                    }

                }).on('touchmove mousemove',function(e){

                    var tmp = lastPos;
                    lastPos = currPos;
                    currPos = getPointerPositionsIn(e,canvas.element);
        
                    var dx = currPos[0].x;
                    var dy = currPos[0].y;
                    var paintData;

                   if(!dragging && mouseDown){
                        var dxx = currPos[0].x - lastPos[0].x;
                        var dyy = currPos[0].y - lastPos[0].y;
                        if( dxx*dxx + dyy*dyy < 32 ){
                            currPos = lastPos;
                            lastPos = tmp;
                        }
                        else{
                            console.log("set drag = true");
                            dragging = true;
                        }
                    }

                    if(dragging && (radio == PAINTIN || radio == PAINTOUT)){
                        if(clicked){
                            var ctx = canvas.element.getContext('2d');
                            //do first
                            ctx.lineWidth = 16;
                            ctx.lineCap = 'round';
                            ctx.beginPath();

                            //if paint in
                            if(radio == PAINTOUT){
                                ctx.globalCompositeOperation = 'source-over';
                                ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
                            }

                            if(radio == PAINTIN){
                                ctx.globalCompositeOperation = 'source-over';
                                ctx.strokeStyle = 'rgba(0, 255, 0, 1)';
                            }
                                                
                            //do after
                            ctx.moveTo(lastPos[0].x,lastPos[0].y);
                            ctx.lineTo(currPos[0].x,currPos[0].y);
                            ctx.stroke();
                            paintData = ctx.getImageData(0,0,w,h);
                        }
                    } 
                    if(_.some(blobSelected) || dragging){
                        // //check if we are inside a selected blob or not
                        // console.log("check some blob", _.some(blobSelected), blobSelected, dragging);
                        var dxx = currPos[0].x - lastPos[0].x;
                        var dyy = currPos[0].y - lastPos[0].y;
                        if( dxx*dxx + dyy*dyy < 32 ){
                            currPos = lastPos;
                            lastPos = tmp;
                        }
                        else{

                            if(dragging && (radio == PAINTIN || radio == PAINTOUT)){
                                if(clicked){
                                    maskOutRed(clicked, w, h, paintData, blobData[clicked - 1][0]);
                                }
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }

                            var ourPos = dy * result_canvas_top.width + dx;
                            previusHoveredIn = hoveredIn;
                            var blobs;
                            var blobArray = [];
                            for( blobs in blobSelected){
                                if(blobSelected[blobs]){
                                    var hoverOver = Number(blobs);
                                    if( blobData[hoverOver - 1][0][ourPos] !== 0){
                                        hoveredIn = hoverOver; //clickedBlobs[ourPos];
                                        clicked   = hoverOver; //clickedBlobs[ourPos];//
                                        blobArray.push(1);
                                    }
                                    else {
                                        blobArray.push(0);
                                    }
                                }
                            }
                            if(!_.contains(blobArray, 1) && !dragging){
                                hoveredIn = 0;
                                clicked   = 0;
                            }

                            if(previusHoveredIn != hoveredIn){
                                // console.log("REDRAW for color change", hoveredIn, blobSelected);
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }
                        }
                    }

                    // clicked = 0;
                    notSelectpreviusHoveredIn = notSelecthoveredIn;
                    notSelecthoveredIn = 0;
                    var ourPos = 0;

                    for (var i= 1; i < blobData.length + 1; i++) {
                        //the Position
                        ourPos = (Math.abs(currPos[0].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x);
                        // console.log("bdata", blobData.length, ourPos, i - 1);
                        if( blobData[i - 1][0][ourPos] === i){
                            
                            notSelecthoveredIn = i;
                            if(HoverSelectCnt < 2 ){
                                HoverSelectCnt++;
                                // console.log("start, wait marker", HoverSelectCnt, notSelecthoveredIn);
                                break;
                            }
                        }
                    }

                   if(notSelectpreviusHoveredIn != notSelecthoveredIn && !hoveredIn){                        
                        if(notSelecthoveredIn !== 0){
                            console.log("hovered In", notSelecthoveredIn);

                        }
                        else{
                            console.log("hovered Out non sel");
                            console.log("blobSelected", blobSelected);
                            console.log("relativeBlobs", relativeBlobs);
                            HoverSelectCnt = 0;
                        }
                    } else if(HoverSelectCnt == 2){
                        // console.log("relese TRIGGER");
                        HoverSelectCnt = 4;
                    }

                    if( e.preventDefault ){
                        e.preventDefault();
                    }
                }).on('touchend mouseup mouseout',function(e){

                    mouseDown = false;

                    if(startcalcDist){
                        document.body.style.cursor = "auto";
                        var ourPos = (Math.abs(currPos[0].y ) *(result_canvas_top.width)) + Math.abs(currPos[0].x);
                        calcDist(ourPos);
                        
                    }

                    if(startcalcDist && currPos[0]){
                        var ourPos = (Math.abs(currPos[0].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x);
                        calcDist(ourPos);
                    }
                    else{
                        startcalcDist = false;
                        document.body.style.cursor = "auto";
                    }

                    if(dragging){
                        dragging = false; 
                    }
                }).on('DOMMouseScroll mousewheel',function(e){
                    if (e.preventDefault) {
                        e.preventDefault();
                    } 
                    else if (e.returnValue) {
                        e.returnValue = false;
                    }
                    var delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;
                    dDelta += delta;

                    if(clicked){
                        if(relativeBlobs[clicked]){
                            if(dDelta > prevdDelta){
                            blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdDecreas();
                            redrawScrean(blobData, imgData, blobSelected, hoveredIn);

                            }else if(dDelta < prevdDelta){
                                blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdIncreas();
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }
                        }else{
                            document.body.style.cursor = "auto";
                        }                        
                    }
                    else{

                        if(_.some(blobSelected)){
                          
                            if(delta > 0 && scrollThresh < (550) ){
                                scrollThresh = scrollThresh + 1;
                            }else if(delta < 0 && scrollThresh >= 0){
                                scrollThresh = scrollThresh - 1;
                            }

                            //save the cliced blobs to the global matrix
                            clickedBlobs = zeros(blobData[0][0].length);

                            var blobs;
                            for( blobs in blobSelected){
                                if(blobSelected[blobs]){
                                    //loop throo the whole matrix
                                    for (var x = 0; x < blobData[blobs - 1][0].length; x++){
                                        if(blobData[blobs - 1][0][x] == blobs){
                                            clickedBlobs[x] = Number(blobs);
                                        }                                            
                                    }
                                }
                            }
                            getBlobsIgnoreSelected(scrollThresh);
                            previousScrollThresh = scrollThresh;

                        }else{
                            if(delta > 0 && scrollThresh < (550) ){
                                scrollThresh = scrollThresh + 1;
                                
                                getThemBlobs(scrollThresh);
                                
                                previousScrollThresh = scrollThresh;   
                            }else if(delta < 0 && scrollThresh >= 0){
                                scrollThresh = scrollThresh - 1;
                                getThemBlobs(scrollThresh);
                                
                                previousScrollThresh = scrollThresh;
                            }
                        }
                    }
                    console.log("scrollThresh", scrollThresh);
                    prevdDelta = dDelta;
                });
            };
        })();

        function calcDist(ourPos){

            if(blobData[clicked - 1][1] > 1){
                var nrBlobsBefore = 0;
                for (var j = 0; j < clicked; j++){

                    if(blobData[j][1] < blobData[clicked - 1][1])
                        nrBlobsBefore++;
                }
               var theBlobNr = clicked - nrBlobsBefore;
                relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(theBlobNr), imgData[blobData[clicked - 1][1]].data);     
            }
            else{
                relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(clicked), imgData[blobData[clicked - 1][1]].data);                                             
            }   

            console.log("****************************************************");
            console.log("created new relative blob");
            console.log("****************************************************");


            //save the new blob
            blobData[clicked - 1][0] = relativeBlobs[clicked].getBlob();
            redrawScrean(blobData, imgData, blobSelected, hoveredIn);
            document.body.style.cursor = "auto";
            var blobs;
            for( blobs in blobSelected){
                if(blobSelected[blobs]){
                    //loop throo the whole matrix
                    for (var x = 0; x < blobData[blobs - 1][0].length; x++){
                        if(blobData[blobs - 1][0][x] == blobs){
                            clickedBlobs[x] = Number(blobs);
                        }                                            
                    }
                }
            }
            startcalcDist = false;
        }

        function handleMouseOver(ourPos, i, refImgs){

            if( blobData[i - 1][0][ourPos] === i){
                clicked = i;
                hoveredIn = i;
                console.log("HIT on blob", i , blobData[i - 1][1]);
                blobSelected[i] = !blobSelected[i];

                if(relativeBlobs[i]){
                    console.log("already exist");
                    if(!blobSelected[i]){
                        hoveredIn = 0;
                        clicked   = 0;
                        notSelecthoveredIn = 0;
                        HoverSelectCnt = 0;
                    }
                }

                else{
                    document.body.style.cursor = "wait";
                    startcalcDist = true;
                    refImgs.push(blobData[i - 1][1]);
                }
            }
        }

        function getBlobsIgnoreSelected(tvalues){
            var globalNumberOfUnique = 0;
            var selctedOrNot = [];
            var blobsChangeFrom = [];
            var blobsChangeTo = [];
            blobData = [];

            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = imgData[xii];
                overlap.blobs = myblobs1[xii].compareToThres(tvalues);

                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){          
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    var ignore = false;
                    var clickedBlobsIndx = 0;
                    for (var x = 0; x < overlap.blobs.data.length; x++){

                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            if(clickedBlobs[x] != 0){
                                ignore = true;
                                clickedBlobsIndx = clickedBlobs[x];
                                break;
                            }
                        }
                    }
                    if(ignore){ 
                        blobtmp = zeros(overlap.blobs.data.length);
                        for (var x = 0; x < overlap.blobs.data.length; x++){
                            if(clickedBlobs[x] == clickedBlobsIndx){
                                blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            }
                        }
                        selctedOrNot.push(true);
                        blobsChangeFrom.push(clickedBlobsIndx);                            
                    }
                    else{
                        selctedOrNot.push(false);
                    }
                    blobData.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }

            //Obs matcha med den som verkligen är klickad!
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                if(selctedOrNot[xii]){
                    blobsChangeTo.push(xii + 1);
                }
            }

            //**********************************************************
            var reduceWith = 0;
            if(blobsChangeFrom.length > 0){
                // console.log("relativeBlobs before", relativeBlobs);
                // console.log("CHANGES");
                // console.log("from :", blobsChangeFrom);
                // console.log("to   :", blobsChangeTo);
                var initialSize = blobsChangeFrom.length;
                var zipped = _.zip(blobsChangeFrom,blobsChangeTo);

                zipped = _.sortBy(zipped, function(num){return -num[1]; });
                zipped = _.uniq(zipped, false, function(num) {return num [0];})
                
                var unzipped = _.unzip(zipped);  

                blobsChangeFrom = unzipped[0];
                blobsChangeTo   = unzipped[1];
                console.log("from :", blobsChangeFrom, "to   :", blobsChangeTo);

                reduceWith = initialSize - blobsChangeFrom.length;

                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                    relativeBlobs[blobsChangeFrom[ij]].changeId(blobsChangeTo[ij]);
                    changeKey(relativeBlobs, blobsChangeFrom[ij], blobsChangeTo[ij] + 99);
                  }

                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                     changeKey(relativeBlobs, blobsChangeFrom[ij] + 99 + (blobsChangeTo[ij] - blobsChangeFrom[ij]), blobsChangeTo[ij]); 
                }

                numBlobs = blobData.length;
                
            }
            else{
                console.log("the array is empty", blobSelected);
            }
            //**********************************************************

            
            selctedOrNot = [];
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                // console.log(xii, _.contains(blobsChangeTo, xii +1) )
                if(_.contains(blobsChangeTo, xii + 1)){
                    selctedOrNot.push(true);
                    //sätt rätt reff image
                    // console.log("theblob img ref:", blobData[xii][1], "on blob nr:", xii + 1);
                }
                else{
                    selctedOrNot.push(false);
                }
            }
            
            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){ //_.size(relativeBlobs); xii++){//
                if(selctedOrNot[xii]){
                    blobSelected[xii + 1] = true;
                }
                else{
                    blobSelected[xii + 1] = false;
                }
            }
            // for (var xii = 0; xii < blobData.length; xii++){
            //     console.log("bild nr:", blobData[xii][1], xii);
            // }

            redrawScrean(blobData, imgData, blobSelected);

        }; 

        function zeros(size) {
            var array = new Array(size);
            for (var i = 0; i < size; i++) {
                array[i] = 0;
            }
            return array;
        };

        function getThemBlobs(tvalues){
            var globalNumberOfUnique = 0;
            blobData = [];

            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = imgData[xii];
                // overlap.blobs = myblobs1[xii].compareToThres(tvalues[xii]);
                overlap.blobs = myblobs1[xii].compareToThres(tvalues);
                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){          
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    for (var x = 0; x < overlap.blobs.data.length; x++){
                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                        }
                    }
                    blobData.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }
            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                blobSelected[xii + 1] = false;
            }
           
            numBlobs = blobData.length;

            redrawScrean(blobData, imgData, blobSelected);

        }; 

        return{
            setup: function(theblobs) {

                // myblobs1 = theblobs.slice();
                (function(){    
                    numBlobs = overlap.length;
                    blobData = overlap.slice();
                    imgData = imgs.slice();
                    modImgData = modImgs.slice();
                    
                    setupOverlay('#blobstop',function(){
                        var TMPcanvas=document.getElementById("blobstop");
                        blobtopCTX = TMPcanvas.getContext("2d"); 
                        console.log("do nada");
                    });
                })();
            },
            setNblobs: function(overlap1, imgs1, selectedBlobs){
                numBlobs = overlap1.length;
                blobData = overlap1.slice();
                imgData = imgs1.slice();
                blobSelected = selectedBlobs;

            },
            getBlobSelected: function(){
                return blobSelected;
            }
        };
    };
}(this));

function maskOutRed(blobNr, w, h, paintData, blobMap){
    // var extraCanvas =  loadCanvas("extra-canvas"); 
    // extraCanvas.width = w;
    // extraCanvas.height = h;
    // var extraCtx = extraCanvas.getContext("2d");
    // extraCtx.putImageData(paintData, 0, 0);

    var pos = 0;
    var isVisible = 0;
    var dptr_s = 0;
    for(var y=0; y<h; y++){
        for(var x=0; x<w; x++, dptr_s+=1){
            pos = dptr_s*4; //(y*xSize+x)*4;
            isVisible = (paintData.data[pos+3] >= 127);
            if( isVisible ){
                if(paintData.data[pos] == 255 &&  paintData.data[pos+1] == 0 && paintData.data[pos+2] == 0){
                    blobMap[dptr_s] = 0;
                }else if(paintData.data[pos] == 0 &&  paintData.data[pos+1] == 255 && paintData.data[pos+2] == 0){
                    blobMap[dptr_s] = blobNr;
                }
              }
        }
    }
}

function blend(){
    var cont = _.contains(mouse.getBlobSelected(), true);
    if(cont !== true){    
        console.log("do naada");
        alert("First, select which Layer/s to blend by click them in the image");
        return 0;    
    }
    
    $('#btn1').show();
    $('#outputresult').show();
    $('#formInterface').show();
    formInterface

    //if you would like to see wats going on, choose the out commented lines
    var newcanvas =  document.createElement('CANVAS');//
    // newcanvas = loadCanvas("new-canvas");
    var srccanvas =  document.createElement('CANVAS');//

    // srccanvas = loadCanvas("src-canvas");
    newcanvas.width = srccanvas.width = finalcanvas.width = cwidth;
    newcanvas.height = srccanvas.height = finalcanvas.height = cheight;

    var src_ctx = srccanvas.getContext("2d");
    var new_ctx = newcanvas.getContext("2d");
    var final_ctx = finalcanvas.getContext("2d");
   
    var firstImg = true;
    for (var i = 0; i <= _.size(mouse.getBlobSelected()); i++){
        if(mouse.getBlobSelected()[i] === true){
            var blobNr = i;

            // src_ctx.putImageData(imgData[1], 0, 0);
            src_ctx.putImageData(modImgData[blobData[i - 1][1]], 0, 0);
             
            new_ctx.putImageData(imgData[0], 0, 0);
            if(firstImg){
                final_ctx.putImageData(imgData[0], 0, 0);
                firstImg = false;
            }
            var mask_pixels = blobData[blobNr -1][0];
            var srcData = src_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
            var mask_data = getMask(mask_pixels, srcData, blobNr);
            console.log("start Blending, blobnr:", blobNr, "ref img :", blobData[i - 1][1]);
            poissonBlendImages(newcanvas, srccanvas, mask_data, finalcanvas);
        }
    }
}

function getMask(mask_pixels, src_pixels, blobNr){

    var extraCanvas = document.createElement('CANVAS');//loadCanvas("extra-canvas");
    extraCanvas.width = src_pixels.width; extraCanvas.height = src_pixels.height;
    var extraCtx = extraCanvas.getContext("2d");

    var test_pixels = extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height);
    var dptr_s = 0;
    for(var y=0; y<src_pixels.height; y++) {
        for(var x=0; x<src_pixels.width; x++, dptr_s+=1) {

            var p = dptr_s*4;//;(y*src_pixels.width+x)*4;

            if(mask_pixels[dptr_s] === blobNr && src_pixels.data[p+3] != 0){
                test_pixels.data[p+0] = 0; 
                test_pixels.data[p+1] = 255;
                test_pixels.data[p+2] = 0 ; 
                test_pixels.data[p+3] = 255;
            }
            else{
                test_pixels.data[p+0] = src_pixels.data[p+0];
                test_pixels.data[p+1] = src_pixels.data[p+1];
                test_pixels.data[p+2] = src_pixels.data[p+2];
                test_pixels.data[p+3] = src_pixels.data[p+3];
            }
        }
    }
    extraCtx.putImageData(test_pixels, 0, 0);

    return extraCanvas;//extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height); // 
}

function changeKey(o, old_key, new_key){

    if (old_key !== new_key) {
        Object.defineProperty(o, new_key,
        Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
}