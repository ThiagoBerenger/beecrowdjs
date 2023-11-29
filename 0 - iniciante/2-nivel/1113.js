var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let lineIndex = 0;
let line = lines[lineIndex++].split(' ').map(Number);
let X = line[0];
let Y = line[1];
    
while (X !== Y) {
    if (X < Y) {
        console.log('Crescente')
    } else {
        console.log("Decrescente")
    }
    
    line = lines[lineIndex++].split(' ').map(Number);
    X = line[0];
    Y = line[1];

}


