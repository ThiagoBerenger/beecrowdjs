var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift())

for (let i = 0; i < n; i++) {
    const [x, y] = lines.shift().split(' ').map(Number)
    let sum = 0

    for (let j = Math.min(x, y) + 1; j < Math.max(x, y); j++) {
        if (j % 2 !== 0) {
            sum += j
        }
    
        
    }
    console.log(sum)

}
