var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

var n = parseInt(lines.shift());

for (var i = 0; i < n; i++) {
  var numbers = lines[i].split(' ').map(Number);
  var X = numbers[0];
  var Y = numbers[1];

  if (Y === 0) {
    console.log('divisao impossivel');
  } else {
    var resultado = X / Y;
    console.log(resultado.toFixed(1));
  }
}