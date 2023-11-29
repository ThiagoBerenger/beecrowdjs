var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let max = -Infinity //Inicializa o valor máximo como negativo infinito

let pos = 0 //inicializa a posição como zero

for (let i = 1; i <= 100; i++) {
    const numero = parseInt(lines.shift())

if (numero > max) { //Verifica se o numero atual é maior que o máximo
    max = numero //Atualiza o valor máximo
    pos = i //Atualiza a posição
    }
}

console.log(max)
console.log(pos)