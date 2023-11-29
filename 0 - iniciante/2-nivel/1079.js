var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines.shift())

for (let i = 0; i < N; i++) {
    const valores = lines.shift().split(' ').map(parseFloat)
    const media = (valores[0] * 2 + valores[1] * 3 + valores[2] * 5) / 10
    console.log(media.toFixed(1))
}

