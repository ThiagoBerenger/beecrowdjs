var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = input.split('\n').map(Number)

let valoresPositivos = 0

for (let i = 0; i < valores.length; i++){
    if (valores[i] > 0){
        valoresPositivos++
    }
}

console.log(`${valoresPositivos} valores positivos`)