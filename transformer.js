'use strict';

var fs = require('fs');
var buf = fs.readFileSync('./img/non-palette-bitmap.bmp');
var startPoint, endPoint, eachPixel;

//Detect palette bmp or non-palette bmp
if (buf.readUInt32LE(10) == 54) {
  //non-palette bitmap
  startPoint = buf.readUInt32LE(10);
  endPoint = buf.length;
  eachPixel = 3;
} else {
  //palette bitmap
  startPoint = 54;
  endPoint = buf.readUInt32LE(10);
  eachPixel = 4;
}

//Invert all colors
function invertColors() {
  for (var i = startPoint; i < endPoint; i++) {
    buf.writeUInt8(255 - buf.readUInt8(i), i);
  }
  fs.writeFileSync('./img/invertedFile.bmp', buf);
  readMetadata();
}

//Grayscale
function greyScale() {
  for (var i = startPoint; i < endPoint; i += eachPixel){
    var grey = Math.floor((buf.readUInt8(i) + buf.readUInt8(i+1) + buf.readUInt8(i+2)) / 3);
    buf.writeUInt8(grey, i);
    buf.writeUInt8(grey, i + 1);
    buf.writeUInt8(grey, i + 2);
  }
  fs.writeFileSync('./img/greyScaledFile.bmp', buf);
  readMetadata();
}

//Scale one color
function scaleOneColor(color) {
  for (var i = startPoint; i < endPoint; i += eachPixel) {
    if (color == 'blue') {
      buf.writeUInt8(255, i);
    } else if (color == 'green') {
      buf.writeUInt8(255, i + 1);
    } else if (color == 'red') {
      buf.writeUInt8(255, i + 2);
    }
  }
  fs.writeFileSync('./img/' + color + 'ScaledFile.bmp', buf);
  readMetadata();
}

function readMetadata() {
  console.log('File size is ' + Math.round(buf.readUInt32LE(2) / 1024) + 'kb.');
  console.log('The width of the bitmap is ' + buf.readUInt32LE(18) + ' pixels.');
  console.log('The height of the bitmap is ' + buf.readUInt32LE(22) + ' pixels.');
  console.log('The color depth of the bitmap is ' + buf.readUInt32LE(28) + ' bits.');
}


//Transform the file SELECT ONE
//invertColors();
//greyScale();
//scaleOneColor('blue');
//scaleOneColor('green');
//scaleOneColor('red');

exports.buf = buf;
exports.invertColors = invertColors;
exports.greyScale = greyScale;
exports.scaleOneColor = scaleOneColor;
