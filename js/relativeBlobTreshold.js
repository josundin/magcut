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
                console.log("The ID is:", myId);
				subtactOne(dists, myXsize, myYsize, decIndx, decVal);

    //     		if(dists.length == 100){
				// 	printa10(dists, 10);
				// }
				// else if( dists.length == 256){
				// 	printa(dists, 16)
				// }

				myBlob = dists.slice(); 
				makeBlob(myBlob, myId, xSize, ySize);

				console.log("myBlob");

        		if(dists.length == 100){
					printa10(myBlob, 10);
				}
				else if( dists.length == 256){
					printa(myBlob, 16)
				}
				return myBlob;
            },
            updateThresholdDecreas: function() {
                console.log("The ID is:", myId);
				addOne(dists, myXsize, myYsize, decIndx, decVal);

    //     		if(dists.length == 100){
				// 	printa10(dists, 10);
				// }
				// else if( dists.length == 256){
				// 	printa(dists, 16)
				// }

				myBlob = dists.slice(); 
				makeBlob(myBlob, myId, xSize, ySize);

				console.log("myBlob");

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
	console.log("blobSize" , blobSize ,"px");
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
