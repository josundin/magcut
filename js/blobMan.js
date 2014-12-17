//blobMan.js
function redrawScrean(maps, odata, blobSelected){
    var baseImgData = odata[0];

	result_canvas.width = baseImgData.width;
    result_canvas.height = baseImgData.height;
    var result_ctx = result_canvas.getContext("2d");
    var canvas2 = document.createElement('CANVAS');//createcanvas(id);
    // document.body.appendChild(canvas2);
    canvas2.width =  baseImgData.width;
    canvas2.height =  baseImgData.height;
    var ctx2 = canvas2.getContext('2d');
  
    var imageDatar = result_ctx.createImageData(baseImgData.width, baseImgData.height);

    // for (var yi = 0; yi < maps.length; yi++){

    //     var red = blobSelected[yi + 1] ? 255 : 128;
    //     var green = blobSelected[yi + 1] ? 128 : 255;

    //     console.log(blobSelected[yi + 1], red, green,yi);
    // }

    var dptr = 0, dptr_s = 0;
    for (var y = 0; y < baseImgData.height; y++) {
        for (var x = 0; x < baseImgData.width; x++, dptr+=4, dptr_s+=1) {
            for (var yi = 0; yi < maps.length; yi++){
                //console.log("matcha: ", yi + 1);
                if(maps[yi][0][dptr_s] === yi + 1){
                    imageDatar.data[dptr] = blobSelected[yi + 1] ? 0 : odata[maps[yi][1]].data[dptr];
                    imageDatar.data[dptr + 1] = blobSelected[yi + 1] ? odata[maps[yi][1]].data[dptr + 1] : 0 ;
                    imageDatar.data[dptr + 2] = 0;
                    imageDatar.data[dptr + 3] = 200;
                }
            }            
        }
    }

    ctx2.putImageData(imageDatar, 0, 0);
    result_ctx.putImageData(baseImgData, 0, 0);
    result_ctx.drawImage(canvas2,0,0);

    //print(blobImage.blobs.data, blobImage.height);
}
/////////////////////////////////////////////////////
function zeros(size) {
    var array = new Array(size);
    for (var i = 0; i < size; i++) {
        array[i] = 0;
    }
    return array;
};

///////////////////////////////////////////////////////
// function blobMan(blobImage, baseImage, blobCanvas){
// 	blobCanvas.width = blobImage.width;
// 	blobCanvas.height = blobImage.height;
// 	var blobCtx = blobCanvas.getContext("2d");
// 	blobCtx.putImageData(baseImage, 0, 0);

//     var canvas2 = document.createElement("canvas");
//     canvas2.width = blobImage.width;
//     canvas2.height = blobImage.height;
//     var ctx2 = canvas2.getContext("2d");
// 	var imageDatar = ctx2.getImageData(0, 0, blobImage.width, blobImage.height);//blobCtx.getImageData(0, 0, blobImage.width, blobImage.height);
	
// 	var dptr = 0, dptr_s = 0;
// 	for (var y = 0; y < blobImage.height; y++) {
// 		for (var x = 0; x < blobImage.width; x++, dptr+=4, dptr_s+=1) {
//         	if(blobImage.blobs.data[dptr_s] !== 0){
// 	        	imageDatar.data[dptr] = blobImage.data[dptr];
// 				imageDatar.data[dptr + 1] = 0;//blobImage.data[dptr + 1];
// 				imageDatar.data[dptr + 2] = 0;//blobImage.data[dptr + 2];
// 				imageDatar.data[dptr + 3] = 200;
//         	}
//         	else{
//         		imageDatar.data[dptr + 3] = 0;	
//         	}			
// 		}
// 	}

//     // put the modified pixels on the temporary canvas
//     ctx2.putImageData(imageDatar, 0, 0);

//     blobCtx.drawImage(canvas2, 0, 0);
//     // blobCtx.putImageData(imageDatar, 0, 0);
// }
