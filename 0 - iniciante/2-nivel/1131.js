var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let grenais = 0;
let vitoriasInter = 0;
let vitoriasGremio = 0;
let empates = 0;


while (true) {
  const [golsInter, golsGremio] = lines.shift().split(' ').map(Number)
  grenais++

  if(golsInter > golsGremio) {
    vitoriasInter++
  } else if (golsGremio > golsInter) {
    vitoriasGremio++
  } else {
    empates++
  }

  console.log('Novo grenal (1-sim 2-nao)')
  const resposta = lines.shift()

  if (resposta === '2') {
    break
  }
}

console.log(`${grenais} grenais`);
console.log(`Inter:${vitoriasInter}`);
console.log(`Gremio:${vitoriasGremio}`);
console.log(`Empates:${empates}`);

if (vitoriasInter > vitoriasGremio) {
  console.log('Inter venceu mais');
} else if (vitoriasGremio > vitoriasInter) {
  console.log('Gremio venceu mais');
} else {
  console.log('Nao houve vencedor');
}