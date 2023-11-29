var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado. */ 

var valores = lines[0].split(' ').map(Number)

var crescente = valores.slice().sort(function(a, b) {
    return a - b
})


console.log(crescente.join('\n'))
console.log('')
console.log(valores.join('\n'))
