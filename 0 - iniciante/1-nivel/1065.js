var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = input.split('\n').map(Number)

valoresPares = 0

for (let i = 0; i < 5; i++) {
    if (valores[i] % 2 === 0) {
      valoresPares++;
    }
  }

console.log(`${valoresPares} valores pares`)