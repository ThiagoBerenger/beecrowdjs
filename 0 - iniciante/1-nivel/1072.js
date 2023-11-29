var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift())

dentroDoIntervalo = 0
foraDoIntervalo = 0

for (let i = 0; i < n; i++){
    const valor = parseInt(lines.shift())
    if (valor >= 10 && valor <= 20) {
        dentroDoIntervalo++
    } else {
        foraDoIntervalo++
    }
}

console.log(`${dentroDoIntervalo} in`)
console.log(`${foraDoIntervalo} out`)