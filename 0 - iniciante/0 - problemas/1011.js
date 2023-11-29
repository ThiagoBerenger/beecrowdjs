var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// A fórmula para calcular o volume é: (4/3) * pi * R3


var R = parseFloat(lines.shift());
var pi = 3.14159;
var VOLUME = (4/3.0) * pi * R * R * R;

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);

