var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const diaInicial = parseInt(lines[0].match(/\d+/)[0])
const [horaInicial, minutoInicial, segundoInicial] = lines[1].match(/\d+/g).map(Number)
const diaFinal = parseInt(lines[2].match(/\d+/)[0])
const [horaFinal, minutoFinal, segundoFinal] = lines[3].match(/\d+/g).map(Number)

const segundosPorDia = 24 * 60 * 60

const segundosInicial = diaInicial * segundosPorDia + horaInicial * 60 * 60 + minutoInicial * 60 + segundoInicial

const segundosFinal = diaFinal * segundosPorDia + horaFinal * 60 * 60 + minutoFinal * 60 + segundoFinal

let diferencaSegundos = segundosFinal - segundosInicial

const dias = Math.floor(diferencaSegundos / segundosPorDia)
diferencaSegundos -= dias * segundosPorDia

const horas = Math.floor(diferencaSegundos / 3600)
diferencaSegundos -= horas * 3600

const minutos = Math.floor(diferencaSegundos / 60)
diferencaSegundos -= minutos * 60

const segundos = diferencaSegundos

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
