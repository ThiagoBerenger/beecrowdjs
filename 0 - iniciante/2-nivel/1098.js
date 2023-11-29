var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 0
let j = 1

while (i <= 2) {
    for (let count = 0; count < 3; count++) {
      if (Number.isInteger(i)) {
        console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`);
      } else {
        console.log(`I=${i.toFixed(1).replace('.0', '')} J=${j.toFixed(1).replace('.0', '')}`);
      }
      j++;
    }
    i += 0.2;
    j = i + 1;
  }