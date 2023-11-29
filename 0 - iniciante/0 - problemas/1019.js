var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido. */

var tempoSegundos = parseInt(lines.shift())

var horas = Math.floor(tempoSegundos / 3600) // calcula as horas - 1 hora = 3600 segundos
var minutos = Math.floor((tempoSegundos % 3600) / 60) // calcula os minutos
var segundos = tempoSegundos % 60 // calcula os segundos

console.log(`${horas}:${minutos}:${segundos}`)


