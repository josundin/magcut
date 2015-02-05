"use strict";

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
        	console.log("upp, call function in main");

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

;"use strict";

// 50-53-51
var homographiesBike2H1 = [[1.020303726196289, -0.010079147294163704, -42.59284591674805, -0.008457145653665066, 0.9905731081962585, -6.965245246887207, 0.00004839357643504627, -0.00012295154738239944, 0.9988846778869629],
                        [0.9562448859214783, -0.04059208929538727, 55.0452766418457, 0.002029840601608157, 0.9665254354476929, 11.779176712036133, -0.00005650325692840852, -0.00007099410140654072, 0.9958619475364685]]; 
//51-50-53
var homographiesBike2H2 = [[ 0.9660865664482117, -0.008302299305796623, 45.14383316040039, 0.005773747805505991, 0.9849867820739746, 9.751049995422363, -0.0000490144120703917, 0.00006797895184718072, 0.9983599185943604 ],
                        [0.8957809209823608, -0.025373294949531555, 98.51021575927734, 0.004517511930316687, 0.939185619354248, 21.728973388671875, -0.00012811814667657018, -0.00000596984045841964, 0.9856936931610107]];
//53-50-51
var homographiesBike2H3 = [[1.0311598777770996, 0.0011012349277734756, -54.12679672241211, -0.0024361235555261374, 1.0119781494140625, -11.21747875213623, 0.00006324340938590467, -0.000037644367694156244, 0.9971030950546265],
                        [1.0898643732070923, 0.06088623031973839, -113.0201416015625, -0.008569265715777874, 1.0580685138702393, -22.7808895111084, 0.00014498442760668695, 0.00005467134542413987, 0.983923614025116]];

// //bird
var homographiesBirdH1 = [[1.0095304250717163, -0.016554025933146477, 8.953278541564941, 0.03932776674628258, 1.01807701587677, -168.96636962890625, -0.000007351650765485829, 0.00010901226050918922, 0.9818366169929504]];
var homographiesBirdH2 = [[0.97413450479507451, 0.016616482287645342, -6.2873034477233893, -0.0358386412262916564, 0.94844388961791995, 163.438446044921886, 0.0000127089397210511387, -0.000101570847618859268, 0.9824137687683105]];
// 28-29
var homographiesSienceParkH1 = [[1.3479026556015015, 0.008745760656893253, -210.18344116210938, 0.15344436466693878, 1.1760369539260864, -84.88064575195312, 0.0006413722294382751, 0.00006606439274037257, 0.896777331829071]];
var homographiesSienceParkH2 = [[0.59467011690139771, -0.023367745801806452, 140.587615966796883, -0.104356661438941964, 0.7485773563385015, 45.653278350830086, -0.00041533523472025997, -0.000075649084465112548, 0.8931218385696411]];
///////////////////////////////////////////////////////////////////////////////////////

var imageSet = 0, imagesRef = 0, allHomographies = [];

if(localStorage.getItem('selectSceneNum')){
    imageSet = localStorage.getItem('selectSceneNum');
}else{
    imageSet = 1;
}

if(imageSet == 1){
    var homographiesELH1 = [[1.0389015674591064, -0.021919989958405495, -4.273282051086426, 0.09422748535871506, 0.9875717163085938, -5.8898749351501465, 0.00006793891952838749, -0.0000867368362378329, 1.0001949071884155]];
    var homographiesELH2 =[[ 0.9784799218177795, 0.014791175723075867, 0.5339639782905579, -0.09201742708683014, 1.0146938562393188, 6.114669322967529, -0.00005027901352150366, 0.00006726609717588872, 1.0003852844238281 ]];
    console.log("image Set 1");
    allHomographies = [homographiesELH1,homographiesELH2];  
    imagesRef = ["../imgs/EandL/P1180178.jpg", "../imgs/EandL/P1180179.jpg"];
}
else if(imageSet == 2){
    var homographiesSkiH1 = [[1.01169753074646, -0.016839805990457535, 22.81320571899414, 0.02119976095855236, 0.9952255487442017, -7.414227485656738, 0.000012518536095740274, 0.000008109120244625956, 1.0002163648605347],
    [0.9661481976509094, -0.029190676286816597, 113.27467346191406, 0.017496902495622635, 0.9802349805831909, -6.218682765960693, -0.000040292612538905814, -0.00001541243545943871, 0.9954161643981934],
    [0.967432975769043, -0.016158273443579674, 150.0976104736328, 0.016845792531967163, 0.9825758337974548, -24.608877182006836, -0.00004376105425762944, 0.0000280006952380063, 0.9924551844596863],
    [0.937919557094574, -0.007838856428861618, 150.89927673339844, -0.0026983320713043213, 0.9693214297294617, -29.952003479003906, -0.00007996862404979765, 0.000009929681255016476, 0.9868520498275757]];
    var homographiesSkiH2 = [[0.9813196063041687, -0.003270781831815839, -19.718448638916016, -0.025491315871477127, 0.9755317568778992, 11.485857009887695, -0.000013089696949464269, -0.00006815016240580007, 0.9994958639144897],
    [0.9375579953193665, -0.01717488095164299, 92.28602600097656, -0.006694590672850609, 0.9646527171134949, 3.4758987426757812, -0.0000736266520107165, -0.000030116832931526005, 0.9926178455352783],
    [0.9423925876617432, -0.011368698440492153, 128.0341796875, 0.0032766549848020077, 0.9703877568244934, -17.63808822631836, -0.00007681920396862552, -0.00000841243763716193, 0.989737331867218],
    [0.9498104453086853, 0.020767856389284134, 126.0226821899414, -0.01134435087442398, 0.9838808178901672, -24.66139793395996, -0.00007451975397998467, 0.000041468072595307603, 0.9890984892845154]];
    var homographiesSkiH3 = [[1.0139126777648926, 0.022940490394830704, -113.59968566894531, -0.01728522591292858, 1.0102853775024414, 8.091630935668945, 0.00002689881148398854, -0.000005228447662375402, 0.9969506859779358],
    [1.0451877117156982, 0.017562206834554672, -97.22286987304688, 0.007259022444486618, 1.0259953737258911, -4.289793968200684, 0.0000657521522953175, 0.00001741613232297823, 0.9938262701034546],
    [0.9840916991233826, 0.0011156642576679587, 40.44911193847656, -0.0002805233816616237, 0.9953309297561646, -18.887020111083984, -0.00002594508623587899, 0.000011096006346633658, 0.9987226128578186],
    [0.9838175773620605,0.01544911228120327, 39.93574523925781, -0.01599566452205181, 0.9923341870307922, -23.280550003051758, -0.00002696404953894671, 0.000002234232169939787, 0.9988448619842529]];
    var homographiesSkiH4 =[[1.0269458293914795, 0.026224985718727112, -155.84146118164062, -0.015786726027727127, 1.0152915716171265, 27.3282470703125, 0.00005677257286151871, -0.00000354270468960749, 0.9912620782852173],
    [1.034406304359436, 0.01214594952762127, -133.55679321289062, -0.00219235778786242, 1.0169494152069092, 18.38968276977539, 0.00007074053428368643, 0.0000010010813866756507, 0.990869402885437],
    [1.010952353477478, 0.0015984297497197986, -40.74266052246094, 0.00032625222229398787, 1.003129482269287, 19.029930114746094, 0.000021905025278101675, -0.0000075593557085085195, 0.99897301197052],
    [1.0019458532333374, 0.022620707750320435, -1.1114107370376587, -0.015627743676304817, 1.0039751529693604, -4.454003810882568, -8.904158903533244e-7, 0.000014966783965064678, 0.9999342560768127]];
    var homographiesSkiH5 =[[1.02799391746521, 0.006391704082489014, -155.6632537841797, 0.0007734594983048737, 1.0107998847961426, 31.66087532043457, 0.00006575458246516064, -0.00002313648656127043, 0.989302933216095],
    [1.0355504751205444, -0.004942593164741993, -133.48455810546875, 0.012805087491869926, 1.0172375440597534, 23.023300170898438, 0.0000786042510299012, -0.000003400243258511182, 0.9897943735122681],
    [1.0128307342529297, -0.017082683742046356, -40.7623405456543, 0.01680472120642662, 1.0037094354629517, 22.917695999145508, 0.000026313451598980464, -0.000009436296750209294, 0.9987296462059021],
    [1.0027586221694946, -0.02336910180747509, 0.014896824024617672, 0.017289433628320694, 0.9969953894615173, 3.8658764362335205, 0.000008945458830567077, -0.00002403052531008143, 0.9999077916145325]];

    allHomographies = [homographiesSkiH1,homographiesSkiH2,homographiesSkiH3,homographiesSkiH4,homographiesSkiH5];  
    imagesRef = ["../imgs/ski/ski1.jpg","../imgs/ski/ski2.jpg","../imgs/ski/ski3.jpg","../imgs/ski/ski4.jpg","../imgs/ski/ski5.jpg"];
}
else if(imageSet == 3){
    var homographiesHundH1 = [[0.9959573149681091, -0.004883802495896816, 2.678840160369873, 0.005868001375347376, 0.9916155338287354, 1.220236897468567, 0.000002886128186219139, -0.000019482627976685762, 0.9999841451644897 ]]
    var homographiesHundH2 = [[1.0037338733673096, 0.0017153428634628654, -2.2722158432006836, -0.004822799004614353, 1.0045233964920044, -1.1375906467437744, -0.0000012442297929737833, 0.000012024049283354543, 0.9999890923500061]]
    allHomographies = [homographiesHundH1,homographiesHundH2];  
    imagesRef = ["../imgs/hundar/_DSC6201.jpg", "../imgs/hundar/_DSC6202.jpg"];
}
else if(imageSet == 4){
    var homographiesCarH1 =[[1.0406215190887451, -0.0030779337976127863, -140.2157440185547, 0.017164135351777077, 1.0202465057373047, -0.7551611661911011, 0.00009318920638179407, -5.902680300096108e-7, 0.9874429702758789],
    [1.0750093460083008, -0.02087479643523693, -508.8431701660156, 0.08801420778036118, 1.0420607328414917, -16.94595718383789, 0.00040142808575183153, 0.00004092470044270158, 0.8111422657966614]];
    var homographiesCarH2 =[[0.972752034664154, -0.0057953596115112305, 134.65829467773438, -0.008775225840508938, 1.0011701583862305, -5.0560622215271, -0.00004124096449231729, 0.00002398512515355833, 0.9941999316215515],
    [1.0654523372650146, -0.025096984580159187, -361.77484130859375, 0.06723976880311966, 1.0343387126922607, -5.541501045227051, 0.00023750626132823527, -0.000031810126529308036, 0.9189171195030212]];
    var homographiesCarH3 =[[0.5839483737945557, -0.034430377185344696, 378.4354553222656, -0.059002310037612915, 0.7470527291297913, -17.07809066772461, -0.000307348178466782, -0.0000905879569472745, 0.7977254986763],
    [0.7873080372810364, 0.02911977842450142, 311.2395935058594, -0.05235334858298302, 0.8844791054725647, -15.283720016479492, -0.0002088312030537054, 0.000021151159671717323, 0.9176208972930908]];
    allHomographies = [homographiesCarH1,homographiesCarH2,homographiesCarH3];  
    imagesRef = ["../imgs/cars/_DSC1526.jpg", "../imgs/cars/_DSC1533.jpg", "../imgs/cars/_DSC1561.jpg"];
}
else if(imageSet == 5){
    console.log("image Set 5");
    allHomographies = [homographiesBike2H1,homographiesBike2H2,homographiesBike2H3];  
    imagesRef = ["../imgs/IMG_0050.jpg", "../imgs/IMG_0051.jpg", "../imgs/IMG_0053.jpg"];
}else if(imageSet == 6){
    console.log("image Set 6");
    allHomographies = [homographiesSienceParkH1,homographiesSienceParkH2];  
    imagesRef = ["../imgs/P1100328.jpg", "../imgs/P1100329.jpg"];
}else if(imageSet == 7){
    imagesRef = ["../imgs/P1.jpg", "../imgs/P2.jpg"];
    allHomographies = [homographiesBirdH1,homographiesBirdH2];  
}


var stitch = {};
var computedHs = {};
var canvasDiv = 'CANVAS';
var imagesReady = false;
var result_canvas;

var imageCanvases = {};
function enablestart() {
	if (imagesReady) {

        for (var i = 0; i < imagesRef.length; i++){
            computedHs[i] = { val: false, bool: false, H: allHomographies[i] };
        }

		stitch = imagewarp(canvasDiv, allHomographies[0], imagesRef, selView);
	}
}

$(window).load(function() {
	imagesReady = true;
	enablestart();
});

var selDiv1 = document.querySelector("#selectedF1");
placeimgs(imagesRef, selDiv1);


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
    if(!localStorage.getItem('num')) {
        console.log("Non set", localStorage.getItem('num'));
    } else {
        console.log("number", localStorage.getItem('num'));
    }
    var mosaic2 = stitch.getMosaic2();
    selectview('canvas', mosaic2);
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
        console.log( currentImagesRef ,"Create img ooobj:",computedHs[val].H);
        // imagesRef = currentImagesRef.slice();
        stitch = imagewarp(canvasDiv, computedHs[val].H, currentImagesRef, blobStuff);
    }   
}

function blobStuff(){
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

(function(_this){
"use strict";

    _this['blobObj'] = function(){
    
        var thresholdfunc = {};
        var gui = new dat.GUI({ autoPlace: false });

        var customContainer = document.getElementById('thresblobs');
        customContainer.appendChild(gui.domElement);

        var demo_opt = function(blobimg){
            this.threshold = 14;
            this.blobMap = blobimg;
        }

        var overlapData = {}; 
        var myblobs1 = [];
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
                var options = new demo_opt(xii);
                thresholdfunc[xii] = gui.add(options, "threshold", 5, 45).step(1);
                
                thresholdfunc[xii].onChange(function(value) {
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

        function getThemBlobs(tvalues){
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

                result_canvas = loadCanvas("blobs");
                overlapData = stitch.getOverlap();
                console.log("Length of overlap data ", overlapData.length);
                bmaps = findBlobs();

                $('#ComputingBlobs').hide();
                $('#blobInterface').show();

                mouse = interactMouse(bmaps, overlapData, blobSelected, overlapData[0].width, overlapData[0].height);
                mouse.setup();
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

