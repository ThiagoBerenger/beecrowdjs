var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Lendo os dados de entrada
var linha1 = lines[0].split(' ');
var linha2 = lines[1].split(' ');

var codigo_peca1 = parseInt(linha1[0]);
var numero_peca1 = parseInt(linha1[1]);
var valor_unitario1 = parseFloat(linha1[2]);

var codigo_peca2 = parseInt(linha2[0]);
var numero_peca2 = parseInt(linha2[1]);
var valor_unitario2 = parseFloat(linha2[2]);

var valor_total = (numero_peca1 * valor_unitario1) + (numero_peca2 * valor_unitario2);

console.log("VALOR A PAGAR: R$ " + valor_total.toFixed(2));





