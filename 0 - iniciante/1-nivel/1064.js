var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = input.split('\n').map(Number)

//A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

let valoresPositivos = 0
let somaValores = 0

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 0){
        valoresPositivos++
        somaValores += valores[i]
    }
}

const media = somaValores / valoresPositivos

console.log(`${valoresPositivos} valores positivos`)
console.log(media.toFixed(1))