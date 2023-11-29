var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let lineIndex = 0
let line = lines[lineIndex++].split(' ').map(Number)
let X = [0]
let Y = [1]

while (X !== 0 && Y !== 0) {
    if (X < 0 && Y > 0) {
        console.log('segundo')
    } else if (X < 0 && Y < 0) {
        console.log('terceiro')
    } else if (X > 0 && Y < 0) {
        console.log('quarto')
    } else {
        console.log('primeiro')
    }

line = lines[lineIndex++].split(' ').map(Number)
X = line[0]
Y = line[1]

} 
