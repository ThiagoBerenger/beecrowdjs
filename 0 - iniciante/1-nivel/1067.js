var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const x = parseInt(lines.shift())

for (let i = 1; i <= x; i++){
    if (i % 2 !== 0 && i < 1000) {
        console.log(i)
    }
}