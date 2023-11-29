var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal. */

var valor =  parseFloat(lines.shift())

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

var quantidadeNotas = []
var quantidadeMoedas = []

console.log("NOTAS:");

for (var i = 0; i < notas.length; i++) {
  quantidadeNotas[i] = Math.floor(valor / notas[i]);
  console.log(quantidadeNotas[i] + " nota(s) de R$ " + notas[i].toFixed(2));
  valor = valor % notas[i];
}

console.log("MOEDAS:")

for (var i = 0; i < moedas.length; i++) {
    quantidadeMoedas[i] = Math.floor(valor / moedas[i]);
    console.log(quantidadeMoedas[i] + " moeda(s) de R$ " + moedas[i].toFixed(2));
    valor = valor % moedas[i] + 0.00001;
  }