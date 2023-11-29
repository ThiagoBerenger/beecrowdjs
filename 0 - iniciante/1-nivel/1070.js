var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const x = parseInt(lines.shift())

let count = 0

for (let i = x; count < 6; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count++;
    }
}

