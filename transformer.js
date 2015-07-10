'use strict'

var fs = require('fs');
var buff = fs.readFileSync('non-palette-bitmap.bmp');

//Invert all colors
for(var i = 54; i < buff.length; i++)
  buff.writeUInt8(255 - buff.readUInt8(i),i);


//Grayscale
for(var i = 54; i < buff.length; i += 3){
  var avg = Math.floor((buff.readUInt8(i) + buff.readUInt8(i+1) + buff.readUInt8(i+2)) / 3);
  buff.writeUInt8(avg,i);
  buff.writeUInt8(avg,i+1);
  buff.writeUInt8(avg,i+2);
}

//Write buff to test.bmp
fs.writeFileSync('test.bmp', buff);


