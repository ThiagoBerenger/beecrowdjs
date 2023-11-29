var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

 
//Essa linha é responsável por separar a primeira linha de entrada em três valores individuais e armazená-los na variável valores. 
var [A, B, C] = lines[0].split(' ').map(Number); //.map(Number) converte ara converter cada elemento do array resultante em um número.

var areaTriangulo = (A * C) / 2; 
var areaCirculo = 3.14159 * Math.pow(C, 2);
var areaTrapezio = ((A + B) * C) / 2;
var areaQuadrado = Math.pow(B , 2);
var areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)

