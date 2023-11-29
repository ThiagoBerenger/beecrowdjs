var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let lineIndex = 0;
let line = lines[lineIndex++].split(' ').map(Number);
let M = line[0];
let N = line[1];

while (M > 0 && N > 0) {
  let sum = 0;
  let sequence = '';

  if (M > N) {
    M = N;
    N = line[0];
  }

  for (let i = M; i <= N; i++) {
    sum += i;
    sequence += i + ' ';
  }

  console.log(sequence.trim() + ' Sum=' + sum);

  line = lines[lineIndex++].split(' ').map(Number);
  M = line[0];
  N = line[1];
}
