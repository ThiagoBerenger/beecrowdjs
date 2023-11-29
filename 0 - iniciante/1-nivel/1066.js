var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = input.split('\n').map(Number)

valoresPares = 0
valoresImpares = 0


for (let i = 0; i < 5; i++) {
    if (valores[i] % 2 === 0) {
        valoresPares++
    } else {
        valoresImpares++
    }
}

valoresPositivos = 0
valoresNegativos = 0

for (let i = 0; i < 5; i++) {
    if (valores[i] > 0) {
        valoresPositivos++
    } else if (valores[i] < 0) {
        valoresNegativos++
    }
}

console.log(`${valoresPares} valor(es) par(es)`)
console.log(`${valoresImpares} valor(es) impar(es)`)

console.log(`${valoresPositivos} valor(es) positivo(s)`)
console.log(`${valoresNegativos} valor(es) negativo(s)`)
