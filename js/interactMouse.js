// mouse(/touch) on a canvas

var cwidth, cheight;
var imgData = [], modImgData = [], blobData = [];
(function(_this){
"use strict";

    _this['interactMouse'] = function(overlap, imgs, selectedBlobs, w, h, modImgs){
        var blobSelected = {};
        var scrollThresh = 24, previousScrollThresh = 24;
        // var myblobs1 = [];

        var relativeBlobs = {};
        var relativeBlobsIndxs = [];
        var clickedBlobs  = [];
        var blobtopCTX;
        var dDelta = 0, prevdDelta = 0;

        var SELBLOB  = 1
        var PAINTOUT = 2
        var PAINTIN  = 3

        var startcalcDist = false;
        var radio = $('input[name=optradio]:checked', '#myForm').val(); 

        $('#myForm input').on('change', function() {
            radio = $('input[name=optradio]:checked', '#myForm').val(); 
            console.log("RADIO Cnagke", radio); 
            if(radio == 1){
                document.body.style.cursor = "auto";
            }else if(radio == 2){
                document.body.style.cursor = "cell";
            }else{
                document.body.style.cursor = "crosshair";
            }
        });

        //$('#myStateButton input').button('toggle');
        // $("#myButtons :input").change(function() {
        //     console.log(this); // points to the clicked input button
        // });
        
        var numBlobs = 0, dragging = false;
        var clicked = false;
        var is_mixing_gradients = true;
        var p_offseted = [];
        var ddx = 0, ddy = 0;
        blobSelected = selectedBlobs;
        cwidth = w;
        cheight = h;
        var setupOverlay = (function(){
            console.log("Do SET Up");
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
            var canvas = null;
            var hoveredIn = 0, previusHoveredIn = 0;
        
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
                    } //standard
                    else if (e.returnValue) {
                        e.returnValue = false;
                    } //older IE

                    
                    // if(radio == SELBLOB){
                // document.body.style.cursor = "wait";

                        currPos = getPointerPositionsIn(e);
                        //Find out if we have a hit and which shape was clicked
                        for (var i= 1; i < numBlobs + 1; i++) {
                            //the Position
                            var ourPos = (Math.abs(currPos[0].y - p_offseted[i].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[i].x);
                            if( blobData[i - 1][0][ourPos] === i){
                                dragging = i;
                                clicked = i;
                                hoveredIn = i;
                                console.log("HIIIIIIIIITT", i, "on", ourPos);
                                blobSelected[i] = !blobSelected[i];
                                console.log(blobSelected);

                                if(relativeBlobs[i]){
                                    console.log("already exist");
                                    if(!blobSelected[i]){
                                        hoveredIn = 0;
                                        clicked   = 0; 
                                        console.log("noll ställ");

                                    }
                                }

                                else{
                                    document.body.style.cursor = "wait";

                                    console.log("does not exist, create relative blob");
                                    console.log("imd indx",  blobData[clicked - 1][1]);

                                    startcalcDist = true;

                                }

                                //break;
                            }
                        }
                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                        // stophere()
                    // }
                    // else 
                    if(radio == PAINTIN || radio == PAINTOUT){

                        dragging = true;
                        console.log("PAINT");
                        var dx_down = currPos[0].x;
                        var dy_down = currPos[0].y;
                        // blobData[clicked - 1][0] = myblobs1[blobData[ clicked - 1 ][1]].paint(clicked, dx_down, dy_down, radio);
                       
                        // redrawScrean(blobData, imgData, blobSelected);
                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);

                    }
                }).on('touchmove mousemove',function(e){

                    var tmp = lastPos;
                    lastPos = currPos;
                    currPos = getPointerPositionsIn(e,canvas.element);
        
                    var dx = currPos[0].x;
                    var dy = currPos[0].y;
                    var paintData;
                    if(dragging && (radio == PAINTIN || radio == PAINTOUT)){
                        // blobData[clicked - 1][0] = myblobs1[blobData[ clicked - 1 ][1]].paint(clicked, dx, dy, radio);

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
                        //check if we are inside a selected blob or not
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
                                    // if(clickedBlobs[ourPos] !== 0 && clickedBlobs[ourPos]){
                                        console.log("h b", Number(blobs), "val",clickedBlobs[ourPos]);
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
                                console.log("Hääääääääääär");
                                hoveredIn = 0;
                                clicked   = 0;
                            }

                            //alt om previus hovered in != hoveredIn 
                            //then redraw screan
                            if(previusHoveredIn != hoveredIn){
                                console.log("***************************************************");
                                console.log("REDRAW for color change", hoveredIn, blobSelected);
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }
                            
                            // var tes1 = _.countBy(blobSelected , function(num) {
                            //       return num == true ? 'trues': 'false';
                            // });
                            // console.log(tes1['trues'], tes1);
                            
                        }
                    }

                    if( e.preventDefault ){
                        e.preventDefault();
                    }
                }).on('touchend mouseup mouseout',function(e){
                    
                    if(startcalcDist){
                        var ourPos = (Math.abs(currPos[0].y - p_offseted[clicked].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[clicked].x);
                        if(blobData[clicked - 1][1] > 1){
                            var nrBlobsBefore = 0;
                            for (var j = 0; j < clicked; j++){

                                if(blobData[j][1] < blobData[clicked - 1][1])
                                    nrBlobsBefore++;

                                console.log("loop", blobData[j][1], j);
                            }
                            console.log("nrBlobsBefore", nrBlobsBefore ,"ger:", clicked - nrBlobsBefore);
                            var theBlobNr = clicked - nrBlobsBefore;
                            relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(theBlobNr), imgData[blobData[clicked - 1][1]].data);     

                        }
                        else{
                            relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(clicked), imgData[blobData[clicked - 1][1]].data);                                             
                        }                                                                                                
                        //save the new blob
                        blobData[clicked - 1][0] = relativeBlobs[clicked].getBlob();
                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                        console.log("mark global blobs");
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
                    console.log("===========================================================", hoveredIn);
                    console.log("thres", scrollThresh, "delta", dDelta, dDelta > prevdDelta);
                   

                    if(clicked){
                        console.log("clicked", clicked);
                        console.log("blobSelected", blobSelected);
                        console.log("relativeBlobs", relativeBlobs);
                        if(dDelta > prevdDelta){
                            blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdDecreas();
                            redrawScrean(blobData, imgData, blobSelected, hoveredIn);


                        }else if(dDelta < prevdDelta){
                            blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdIncreas();
                            redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                        }
                    }
                    else{


                        if(_.some(blobSelected)){


                            if(delta > 0 && scrollThresh < (550) ){
                                scrollThresh = scrollThresh + 1;
                                // previousScrollThresh = scrollThresh;   
                            }else if(delta < 0 && scrollThresh >= 0){
                                scrollThresh = scrollThresh - 1;
                                // previousScrollThresh = scrollThresh;
                            }



                            console.log("Special Case -------------------------------------------");
                            //save the cliced blobs to a global matrix

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

                            console.log("clickedBlobs");
                            // printa32(clickedBlobs, 32);
                            getBlobsIgnoreSelected(scrollThresh);
                            previousScrollThresh = scrollThresh;

                            // blobData[clicked - 1][0]
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
                    prevdDelta = dDelta;
                });
            };
        })();

        function getBlobsIgnoreSelected(tvalues){
            console.log(" getBlobsIgnoreSelected ");
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
                    var minZone = 0;
                    for (var x = 0; x < overlap.blobs.data.length; x++){

                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            if(clickedBlobs[x] != 0){
                                if(++minZone > 20){
                                    console.log("ignore this########################################", blobtmp[x], x, minZone);
                                    ignore = true;
                                    clickedBlobsIndx = clickedBlobs[x];
                                    break
                                }
                                // break;
                            }
                        }
                    }
                    if(ignore){ // &&  !_.contains(blobsChangeFrom, clickedBlobsIndx) 
                        blobtmp = zeros(overlap.blobs.data.length);
                        for (var x = 0; x < overlap.blobs.data.length; x++){
                            if(clickedBlobs[x] == clickedBlobsIndx){
                                blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            }
                        }
                        // if(!_.contains(blobsChangeFrom, clickedBlobsIndx)){
                            selctedOrNot.push(true);
                            console.log("den :", clickedBlobsIndx);
                            blobsChangeFrom.push(clickedBlobsIndx);    
                        // }
                        // else{
                        //     console.log("MISS", selctedOrNot)
                        // }
                        
                    }
                    else{
                        selctedOrNot.push(false);
                    }
                    blobData.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }

            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                if(selctedOrNot[xii]){
                    blobSelected[xii + 1] = true;
                    console.log("till :", xii + 1);
                    blobsChangeTo.push(xii + 1);

                }
                else{
                    blobSelected[xii + 1] = false;
                }
            }
            for (var ij= 1; ij < blobData.length + 1; ij++){
                p_offseted[ij] = { x: 0, y: 0 };
            }

            if(blobsChangeFrom.length > 0){
                console.log("relativeBlobs before", relativeBlobs);
                console.log("MAKE THE CHANGES ************************", previousScrollThresh < scrollThresh);
                console.log("from :", blobsChangeFrom);
                console.log("to   :", blobsChangeTo);
                console.log("**************** ************************");
                var zipped = _.zip(blobsChangeFrom,blobsChangeTo);
                console.log("zipped", zipped);
                // if(previousScrollThresh < scrollThresh){
                //     zipped = _.sortBy(zipped, function(num){ return -num[1]; });
                // }
                // else{
                //     zipped = _.sortBy(zipped, function(num){ return num[1]; });
                // }
                zipped = _.sortBy(zipped, function(num){ return -num[1]; });
                zipped = _.uniq(zipped, false, function(num) {return num [0];})
                
                var unzipped = _.unzip(zipped);  

                blobsChangeFrom = unzipped[0];
                blobsChangeTo   = unzipped[1];

                console.log("zip unzipped ************************");
                console.log("from :", blobsChangeFrom);
                console.log("to   :", blobsChangeTo);


                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                    console.log(ij, relativeBlobs);
                    // if(relativeBlobs[ij]){
                        relativeBlobs[blobsChangeFrom[ij]].changeId(blobsChangeTo[ij]);
                        changeKey(relativeBlobs, blobsChangeFrom[ij], blobsChangeTo[ij] + 99);
                    // }
                }


                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                    // if(relativeBlobs[ij]){
                        changeKey(relativeBlobs, blobsChangeFrom[ij] + 99 + (blobsChangeTo[ij] - blobsChangeFrom[ij]), blobsChangeTo[ij]);
                    // }
                }

                console.log("relativeBlobs after", relativeBlobs);


                numBlobs = blobData.length;

                console.log("blobSelected Size", _.size(blobSelected), blobSelected);

                redrawScrean(blobData, imgData, blobSelected);

            }
        else{
            console.log("the array is empty", blobSelected);
        }
        }; 

        function zeros(size) {
            var array = new Array(size);
            for (var i = 0; i < size; i++) {
                array[i] = 0;
            }
            return array;
        };

        function getThemBlobs(tvalues){
            console.log(" get them, ");
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
            for (var ij= 1; ij < blobData.length + 1; ij++){
                p_offseted[ij] = { x: 0, y: 0 };
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
                    for (var ij= 1; ij < numBlobs + 1; ij++){
                            p_offseted[ij] = { x: 0, y: 0 };          
                    }

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

                for (var ij= 1; ij < numBlobs + 1; ij++){
                    p_offseted[ij] = { x: 0, y: 0 };
                }
            },
            getOffset: function(){
                return p_offseted;
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
    console.log("start masking");
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
    console.log(mouse.getBlobSelected());
    if(cont !== true){    
        console.log("do naada");
        alert("First, select which regions to blend by click them in the image");
        return 0;    
    }
    
    $('#btn1').show();

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
    var offset = mouse.getOffset();

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
            console.log("start Blending", blobNr);
            poissonBlendImages(newcanvas, srccanvas, mask_data, finalcanvas, offset[blobNr]);
        }
    }
}

function getMask(mask_pixels, src_pixels, blobNr){

    var extraCanvas =  document.createElement('CANVAS');//loadCanvas("extra-canvas"); //
    extraCanvas.width = src_pixels.width; extraCanvas.height = src_pixels.height;
    var extraCtx = extraCanvas.getContext("2d");

    var test_pixels = extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height);
    var dptr_s = 0;
    for(var y=0; y<src_pixels.height; y++) {
        for(var x=0; x<src_pixels.width; x++, dptr_s+=1) {

            var p = dptr_s*4;//;(y*src_pixels.width+x)*4;

            if(mask_pixels[dptr_s] === blobNr){
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