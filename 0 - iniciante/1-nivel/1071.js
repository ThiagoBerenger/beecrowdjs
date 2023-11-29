var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const x = parseInt(lines.shift())
const y = parseInt(lines.shift())

let menor = Math.min(x, y)
let maior = Math.max(x, y)

let somaImpares = 0

for (let i = menor + 1; i < maior; i++) {
    if (i % 2 !== 0) {
        somaImpares += i
    }
}

console.log(somaImpares)