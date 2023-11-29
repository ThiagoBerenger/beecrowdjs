var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal. */

var [codigo, quantidade] = lines.shift().split(' ').map(Number)

var precos = [4.0, 4.5, 5.0, 2.0, 1.5]

var total = precos[codigo - 1] * quantidade

console.log("Total: R$ " + total.toFixed(2))
