var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 1
let j = 60

while (j >= 0) {
    console.log(`I=${i} J=${j}`) // o console.log deve ser colocado antes das operações i+=3 e j-=5, para que o primeiro valor seja impresso antes de realizar as atualizações.
    i += 3
    j -= 5
}