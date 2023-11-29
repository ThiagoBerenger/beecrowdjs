var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada: 

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

*/

var valores = lines.shift().split(' ').map(Number)

//ordenar os valores em ordem crescente. Se a for negativo, logo b > a, então a será colocado antes de b.

valores.sort(function(a, b){
    return b - a;
})

var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])

if (A >= B + C){
    console.log("NAO FORMA TRIANGULO")
} else if (A * A === B * B + C * C){
    console.log("TRIANGULO RETANGULO")
} else if (A * A > B * B + C * C){
    console.log("TRIANGULO OBTUSANGULO")
}else if(A * A < B * B + C * C){
    console.log("TRIANGULO ACUTANGULO")
} 

if(A === B && B === C){
    console.log("TRIANGULO EQUILATERO")
} else if (A === B || B === C || C === A){
    console.log("TRIANGULO ISOSCELES")
} 