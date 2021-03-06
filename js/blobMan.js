//blobMan.js
function redrawScrean(maps, odata, blobSelected, hovered){
    var baseImgData = odata[0];

    var myHovered = hovered ? hovered : 0;
    
    var colors =    
        [
        [0,0,255,255],  //B
        [255,255,0,255],//Y
        [255,0,255,255],//P
        [0,255,255,255], //C
        [255,0,0,255],  //R
        [0,0,0,255],    //black
        [0,0,255,255],  //B
        [255,255,0,255],//Y
        [255,0,255,255],//P
        [0,255,255,255], //C
        [255,0,0,255],  //R
        [0,0,0,255]     //black
        ];


	result_canvas_bottom.width = baseImgData.width;
    result_canvas_bottom.height = baseImgData.height;   
    result_canvas_top.width = baseImgData.width;
    result_canvas_top.height = baseImgData.height;
    var result_ctx = result_canvas_bottom.getContext("2d");
    var canvas2 = document.createElement('CANVAS');
    // document.body.appendChild(canvas2);
    canvas2.width =  baseImgData.width;
    canvas2.height =  baseImgData.height;
    var ctx2 = canvas2.getContext('2d');
    var imageDatar = result_ctx.createImageData(baseImgData.width, baseImgData.height);

    var dptr = 0, dptr_s = 0;
    for (var y = 0; y < baseImgData.height; y++) {
        for (var x = 0; x < baseImgData.width; x++, dptr+=4, dptr_s+=1) {
            for (var yi = 0; yi < maps.length; yi++){
                if(maps[yi][0][dptr_s] === yi + 1 &&  odata[maps[yi][1]].data[dptr + 3] != 0){
                   
                    if(myHovered != yi + 1){
                        imageDatar.data[dptr]     = colors[maps[yi][1] - 1][0] ? baseImgData.data[dptr] : 0;
                        imageDatar.data[dptr + 1] = colors[maps[yi][1] - 1][1] ? baseImgData.data[dptr + 1] : 0 ;
                        imageDatar.data[dptr + 2] = colors[maps[yi][1] - 1][2] ? baseImgData.data[dptr + 2] : 0;
                    }
                   
                    imageDatar.data[dptr + 3] =  255;//blobSelected[yi + 1] ? 255 : 200;
                }
            }            
        }
    }

    var dptr = 0, dptr_s = 0;
    for (var y = 0; y < baseImgData.height; y++) {
        for (var x = 0; x < baseImgData.width; x++, dptr+=4, dptr_s+=1) {
            for (var yi = 0; yi < maps.length; yi++){
                if(maps[yi][0][dptr_s] === yi + 1 &&  odata[maps[yi][1]].data[dptr + 3] != 0){
                   
                    if(blobSelected[yi + 1]){
                        imageDatar.data[dptr]     =  (myHovered == yi + 1) ? odata[maps[yi][1]].data[dptr] / 2 : 0;
                        imageDatar.data[dptr + 1] =  blobSelected[yi + 1] ? odata[maps[yi][1]].data[dptr + 1] : colors[maps[yi][1] - 1][1] ? baseImgData.data[dptr + 1] : 0 ;
                        imageDatar.data[dptr + 2]     =  (myHovered == yi + 1) ? odata[maps[yi][1]].data[dptr + 2] / 2 : 0;
                    }
                   
                    imageDatar.data[dptr + 3] =  255;//blobSelected[yi + 1] ? 255 : 200;
                }
            }            
        }
    }
    ctx2.putImageData(imageDatar, 0, 0);
    result_ctx.putImageData(baseImgData, 0, 0);
    result_ctx.drawImage(canvas2,0,0);

    // result_ctx.putImageData(imageDatar,0,0);
}
function zeros(size) {
    var array = new Array(size);
    for (var i = 0; i < size; i++) {
        array[i] = 0;
    }
    return array;
};

/*
    [
    [0,0,0,255],    //black
    [255,0,0,255],  //R
    [0,255,0,255],  //G
    [0,0,255,255],  //B

    [255,255,0,255],//Y
    [255,0,255,255],//P
    [0,255,255,255] //C
    ]
*/