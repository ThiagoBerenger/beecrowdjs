var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido. */

var idadeDias = parseInt(lines.shift())

var anos = Math.floor(idadeDias / 365);
var meses = Math.floor((idadeDias % 365) / 30);
var dias = (idadeDias % 365) % 30;

console.log(anos + " ano(s)")
console.log(meses + " mes(es)")
console.log(dias + " dia(s)")

