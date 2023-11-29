var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ').map(Number)

/* Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo. */

var horaInicial = parseInt(valores[0])
var horaFinal = parseInt(valores[1])

var duracao

if(horaInicial < horaFinal){
    duracao = horaFinal - horaInicial
} else if(horaInicial > horaFinal) {
    duracao = 24 - horaInicial + horaFinal
} else {
    duracao = 24
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`)


