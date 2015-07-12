var transformer = require('./transformer.js');

var operation = String(process.argv[2]).toLowerCase();
var option = String(process.argv[3]).toLowerCase();

if (operation == 'invert') {
  transformer.invertColors();
} else if (operation == 'greyscale') {
  transformer.greyScale();
} else if (operation == 'scale' && (option == 'red' || option == 'blue' || option == 'green') {
  transformer.scaleOneColor(option);
} else {
  console.log('Command not recognized');
}