
/*Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1))) 



Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal. */

//A função Math.sqrt() retorna a raiz quadrada de um número


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var valores1 = lines[0].split(' ').map(parseFloat)
var valores2 = lines[1].split(' ').map(parseFloat)

var x1 = valores1[0]
var y1 = valores1[1]

var x2 = valores2[0]
var y2 = valores2[1]

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4))