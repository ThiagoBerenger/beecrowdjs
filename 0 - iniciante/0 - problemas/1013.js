var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//A fórmula Math.abs(a - b) calcula a diferença entre a e b sem considerar o sinal, garantindo que o resultado seja sempre positivo.

var valores = lines[0].split(' ').map(Number);
var a = valores[0];
var b = valores[1];
var c = valores[2];

var maiorAB = (a + b + Math.abs(a - b)) / 2; // descobre o maior valor entre a e "b
var maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2; // descobre o maior valor entre maiorAB e c

console.log(maior + " eh o maior");
