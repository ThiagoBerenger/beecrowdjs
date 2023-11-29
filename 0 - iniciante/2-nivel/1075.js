var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines.shift())

for (let i = 1; i <= 10000; i++) {
    if (i % N === 2) {
        console.log(i)
    }
}

