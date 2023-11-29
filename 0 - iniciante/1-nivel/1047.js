var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . */

const[horaInicio, minutoInicio, horaFim, minutoFim] = lines.shift().split(' ').map(Number);

let duracaoHora, duracaoMinuto;

if (horaInicio === horaFim && minutoInicio === minutoFim) {
    duracaoHora = 24;
    duracaoMinuto = 0;
} else if (horaInicio > horaFim || (horaInicio === horaFim && minutoInicio > minutoFim)) {
    duracaoHora = 24 - horaInicio + horaFim;
    duracaoMinuto = 60 - minutoInicio + minutoFim;
    duracaoHora--; // Subtrai 1 da duração das horas
    if (duracaoMinuto >= 60) {
        duracaoMinuto -= 60;
        duracaoHora++; // Adiciona 1 à duração das horas se os minutos ultrapassarem 60
    }
} else {
    duracaoHora = horaFim - horaInicio;
    duracaoMinuto = minutoFim - minutoInicio;
}

if (duracaoHora < 0) {
    duracaoHora += 24; // Adiciona 24 às horas se a duração for negativa
}

if (duracaoMinuto < 0){
    duracaoMinuto += 60;
    duracaoHora--;
}

console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`)