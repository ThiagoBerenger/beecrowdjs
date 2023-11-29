var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = parseFloat(lines.shift());
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

TOTAL = salario + vendas * 15 / 100;

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);