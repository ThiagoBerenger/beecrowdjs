var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 1
let j = 7

while (i <= 9) {
    for (let count = 0; count < 3; count++) {
        console.log(`I=${i} J=${j}`)
        j--
    }
    i += 2
    j += 5
}