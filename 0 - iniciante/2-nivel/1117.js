var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

const notas = []
const contador = 0

while (contador < 2) {
    let nota = parseFloat(lines.shift())

    if (nota < 0 || nota > 10) {
        console.log('nota invalida')
    } else {
        notas.push(nota)
        contador++
    }
}

let media = (notas[0] + notas[1] / 2)
console.log('media = ' + media.toFixed(2))