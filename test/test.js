'use strict';

var fs = require('fs');
var data = require('../transformer');
var expect = require('chai').expect;

var buf = data.buf,
    newBufInverted = fs.readFileSync('./img/invertedFile.bmp'),
    newBufGreyScaled = fs.readFileSync('./img/greyScaledFile.bmp'),
    newBufScaledBlue = fs.readFileSync('./img/blueScaledFile.bmp'),
    newBufScaledGreen = fs.readFileSync('./img/greenScaledFile.bmp'),
    newBufScaledRed = fs.readFileSync('./img/redScaledFile.bmp'),
    startPoint = buf.readUInt32LE(10),
    endPoint = buf.length;

describe('non-palette transformer', function() {

  it('should invert colors in buffer', function() {
    for(var i = startPoint; i < endPoint; i++)
      expect(newBufInverted.readUInt8(i)).to.eql(255 - buf.readUInt8(i));
  });

  it('should greyscale colors in buffer', function() {
    for(var i = startPoint; i < endPoint; i += 3) {
      var avg = Math.floor((buf.readUInt8(i)+buf.readUInt8(i+1)+buf.readUInt8(i+2))/3);
      expect(newBufGreyScaled.readUInt8(i)).to.eql(avg);
      expect(newBufGreyScaled.readUInt8(i+1)).to.eql(avg);
      expect(newBufGreyScaled.readUInt8(i+2)).to.eql(avg);
    }
  });

  it('should bluescale colors in buffer', function() {
    for(var i = startPoint; i < endPoint; i += 3) {
      expect(newBufScaledBlue.readUInt8(i)).to.eql(255);
      expect(newBufScaledBlue.readUInt8(i+1)).to.eql(buf.readUInt8(i+1));
      expect(newBufScaledBlue.readUInt8(i+2)).to.eql(buf.readUInt8(i+2));
    }
  });

  it('should greenscale colors in buffer', function() {
    for(var i = startPoint; i < endPoint; i += 3) {
      expect(newBufScaledGreen.readUInt8(i)).to.eql(buf.readUInt8(i));
      expect(newBufScaledGreen.readUInt8(i+1)).to.eql(255);
      expect(newBufScaledGreen.readUInt8(i+2)).to.eql(buf.readUInt8(i+2));
    }
  });

  it('should redscale colors in buffer', function() {
    for(var i = startPoint; i < endPoint; i += 3) {
      expect(newBufScaledRed.readUInt8(i)).to.eql(buf.readUInt8(i));
      expect(newBufScaledRed.readUInt8(i+1)).to.eql(buf.readUInt8(i+1));
      expect(newBufScaledRed.readUInt8(i+2)).to.eql(255);
    }
  });


});
