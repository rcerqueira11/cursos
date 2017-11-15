let barBuffer = new ArrayBuffer(5 * 3); //5bytes x number of bars
let uInt8View = new Uint8Array(barBuffer);


// each group of five values is a data for one bar
uInt8View[0] = 0; // position
uInt8View[1] = 100; // height
uInt8View[2] = 200; //r
uInt8View[3] = 45;  //g
uInt8View[4] = 250; //b

uInt8View[5] = 1;
uInt8View[6] = 70;
uInt8View[7] = 23;
uInt8View[8] = 205;
uInt8View[9] = 18;

uInt8View[10] = 2;
uInt8View[11] = 30;
uInt8View[12] = 255;
uInt8View[13] = 18;
uInt8View[14] = 18;


//or get from server:
//let req = new XMLHttpRequest();
//req.open ("GET", "/barData");
//req.responseType = "arraybuffer"; seteando esto puedes recibir un arraybuffer como respuesta
//etc.

let canvas = document.getElementById("chart");
let ctx = canvas.getContext("2d");

let getHexColor = (rgbColor) => {
    return "#" + rgbColor[0].toString(16) +
        rgbColor[1].toString(16) +
        rgbColor[2].toString(16);
}

let draw = (position, height, rgbColor) => {
    ctx.fillStyle = getHexColor(rgbColor);
    ctx.fillRect(position * 60,
        100 - height, 50, height);
}

draw(uInt8View[0],uInt8View[1],[uInt8View[2],uInt8View[3],uInt8View[4]]);
draw(uInt8View[5],uInt8View[6],[uInt8View[7],uInt8View[8],uInt8View[9]]);
draw(uInt8View[10],uInt8View[11],[uInt8View[12],uInt8View[13],uInt8View[14]]);

//if less pretty but far way more efficient (memory,bandwith) now each bar ocuppied 5 bytes

