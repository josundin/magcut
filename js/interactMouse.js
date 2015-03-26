// mouse(/touch) on a canvas

var cwidth, cheight;
var imgData = [], blobData = [];
(function(_this){
"use strict";

    _this['interactMouse'] = function(overlap, imgs, selectedBlobs, w, h){
var blobSelected = {};

        console.log("width:", w, "height:", h);
        console.log("overlap length:", overlap.length);

        var numBlobs = 0, dragging = false;
        var is_mixing_gradients = true;
        var p_offseted = [];
        var tmp_offseted = [];
        var ddx = 0, ddy = 0;
        blobSelected = selectedBlobs;
        cwidth = w;
        cheight = h;
        var setupOverlay = (function(){
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

                var bRect = result_canvas.getBoundingClientRect();
                for(i=0; i<nLocations; i+=1){
                    locations[i] = { x: 0, y: 0 };
                    mx = ((e.clientX - bRect.left)*(result_canvas.width/bRect.width)) |0;           
                    if( mx > 0 && mx <= result_canvas.width){
                        locations[i].x = mx;
                    }
                    my = ((e.clientY - bRect.top)*(result_canvas.height/bRect.height)) | 0;
                    if( my > 0 && my <= result_canvas.height){
                        locations[i].y = my;
                    }
                }
                return locations;
            };

            var lastPos = null;
            var currPos = null;
            var p_lastPos = null;
            var p_currPos = null;
            var canvas = null;
        
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

                    lastPos = getPointerPositionsIn(e);
                    currPos = lastPos;
                    p_lastPos = lastPos;
                    p_currPos = lastPos;
                    //Find out if we have a hit and which shape was clicked
                    for (var i= 1; i < numBlobs + 1; i++) {
                        //the Position
                        if( blobData[i - 1][0][(Math.abs(currPos[0].y - p_offseted[i].y) *(result_canvas.width)) + Math.abs(currPos[0].x - p_offseted[i].x)] === i){
                            dragging = i;
                            console.log("HITT", i, "on", (currPos[0].y*result_canvas.width) + currPos[0].x);
                            blobSelected[i] = !blobSelected[i];
                            //break;
                        }
                    }
                    redrawScrean(blobData, imgData, blobSelected, p_offseted);

                }).on('touchmove mousemove',function(e){
                    if( lastPos ){
                        var tmp = lastPos;
                        lastPos = currPos;
                        currPos = getPointerPositionsIn(e,canvas.element);
            
                        // Only handle stuff if delta is longer than 8 unit 
                        var dx = currPos[0].x - lastPos[0].x;
                        var dy = currPos[0].y - lastPos[0].y;
                        // 32 = 5 (unit)
                        if( dx*dx + dy*dy < 64 ){
                         currPos = lastPos;
                         lastPos = tmp;
                         //return;
                        }
                        else if(dragging){
                            p_currPos = getPointerPositionsIn(e,canvas.element);
                            ddx = p_currPos[0].x - p_lastPos[0].x; 
                            ddy = p_currPos[0].y - p_lastPos[0].y;
                            p_offseted[dragging].y = ddy + tmp_offseted[dragging].y;
                            p_offseted[dragging].x = ddx + tmp_offseted[dragging].x;
                            redrawScrean(blobData, imgData, blobSelected, p_offseted);
                        }
                    }
                    if( e.preventDefault ){
                        e.preventDefault();
                    }
                }).on('touchend mouseup mouseout',function(e){
                    if(dragging){

                        tmp_offseted[dragging].y = ddy + tmp_offseted[dragging].y;
                        tmp_offseted[dragging].x = ddx + tmp_offseted[dragging].x;
                        console.log(ddy, tmp_offseted[dragging].y);
                        dragging = false; 
                    }
                });
            };
        })();

        // (function(){    
        //     numBlobs = overlap.length;
        //     blobData = overlap.slice();
        //     imgData = imgs.slice();
        //     for (var ij= 1; ij < numBlobs + 1; ij++){
        //             p_offseted[ij] = { x: 0, y: 0 };
        //             tmp_offseted[ij] = { x: 0, y: 0 };          
        //     }

        //     setupOverlay('#blobs',function(){
        //     });
        // })();

        function zeros(size) {
            var array = new Array(size);
            for (var i = 0; i < size; i++) {
                array[i] = 0;
            }
            return array;
        };

        return{
            setup: function() {
                (function(){    
                    numBlobs = overlap.length;
                    blobData = overlap.slice();
                    imgData = imgs.slice();
                    for (var ij= 1; ij < numBlobs + 1; ij++){
                            p_offseted[ij] = { x: 0, y: 0 };
                            tmp_offseted[ij] = { x: 0, y: 0 };          
                    }

                    setupOverlay('#blobs',function(){
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
                    tmp_offseted[ij] = { x: 0, y: 0 };
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

function blend(){
    var cont = _.contains(mouse.getBlobSelected(), true);
    if(cont !== true){    
        alert("First, select which regions to blend by click them in the image");
        return 0;    
    }
    
    $('#btn1').show();

    //if you would like to see wats going on, choose the out commented lines
    var newcanvas =  document.createElement('CANVAS');//newcanvas = loadCanvas("new-canvas");
    var srccanvas =  document.createElement('CANVAS');//srccanvas = loadCanvas("src-canvas");
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
            src_ctx.putImageData(imgData[blobData[i - 1][1]], 0, 0);
             
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

    var extraCanvas =  document.createElement('CANVAS');//loadCanvas("extra-canvas");
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

    return extraCanvas;//extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height);
}

