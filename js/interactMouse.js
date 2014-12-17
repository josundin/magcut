// Let's you draw (via mouse/touch) on a canvas

(function(_this){
"use strict";

    _this['interactMouse'] = function(overlap, imgs, selectedBlobs){
        var numBlobs = 0, blobData = [], imgData = [], dragging = false;
        var is_mixing_gradients = true;
        var blobSelected = selectedBlobs;
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
            var canvas = null;

            return function(id,onChange){
                var localOnChange = (function(onChange){ return function(){
                    onChange();
                }; })(onChange);

                canvas = $(id);

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
                    //Finout if we have a hit
                    // console.log("mosue touchstart", currPos[0].x,currPos[0].y ,  result_canvas.width, result_canvas.height);
                    //find which shape was clicked
                    for (var i= 1; i < numBlobs + 1; i++) {
                        //console.log(blobData[i - 1][0]);
                        //Positionen
                        if( blobData[i - 1][0][(currPos[0].y*result_canvas.width) + currPos[0].x] === i) {
                            dragging = i;
                            console.log("HITT", i, "on", (currPos[0].y*result_canvas.width) + currPos[0].x);
                            blobSelected[i] = !blobSelected[i];
                        }
                    }

                    console.log(blobSelected);
                    redrawScrean(blobData, imgData, blobSelected);

                }).on('touchmove mousemove',function(e){
                    if( lastPos ){
                        var tmp = lastPos;
                        var doneDraw = false;
                        lastPos = currPos;
                        currPos = getPointerPositionsIn(e,canvas.element);
            
                        ////////////////////////////////////////////////////////////////////////////
                        // Only handle stuff if delta is longer than 5 units
                        ////////////////////////////////////////////////////////////////////////////
                        var dx = currPos[0].x - lastPos[0].x;
                        var dy = currPos[0].y - lastPos[0].y;
                        // 32 = 5 
                        if( dx*dx + dy*dy < 64 ){
                         currPos = lastPos;
                         lastPos = tmp;
                         //return;
                        }

                        else if(dragging){
                            console.log(currPos[0].x,currPos[0].y, "flyttad:", dx, dy);
                            //gör om blob mappen
                            var dptr_s = 0;
                            var blobDatatmp = zeros(blobData[0][0].length);

                            //1 loopa igenom alla indx
                            for (var y = 0; y < result_canvas.height; y++) {
                                for (var x = 0; x < result_canvas.width; x++, dptr_s+=1) {
                                    if( blobData[dragging - 1][0][(y*result_canvas.width) + x] === dragging){             
                                        blobDatatmp[( (y + dy) *(result_canvas.width)) + (x + dx)] = dragging;
                                        // console.log(dptr_s, (y*result_canvas.width) + x, dx, dy);
                                    }
                                }
                            }
                            blobData[dragging - 1][0] = blobDatatmp;
                            redrawScrean(blobData, imgData, blobSelected);

                        }
            
                    }

                    if( e.preventDefault ){
                        e.preventDefault();
                    }
                }).on('touchend mouseup mouseout',function(e){
                    lastPos = null;
                    currPos = lastPos;
                    localOnChange();
                    if(dragging){
                        dragging = false; 
                    }
                });
            };
        })();

        (function(){    
            numBlobs = overlap.length;
            blobData = overlap;
            imgData = imgs;

            setupOverlay('#blobs',function(){
            });
        })();

        function zeros(size) {
            var array = new Array(size);
            for (var i = 0; i < size; i++) {
                array[i] = 0;
            }
            return array;
        };

        return{
            setNblobs: function(overlap1, imgs1, selectedBlobs){
                numBlobs = overlap1.length;
                blobData = overlap1;
                imgData = imgs1;
                blobSelected = selectedBlobs;
            }
        };
    };
}(this));
