var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/* Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

Perimetro = XX.X

Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal. */

// Perímetro = A + B + C

// Área = b * h / 2

var [A, B, C] = lines[0].split(' ').map(Number)

if (A + B > C && A + C > B && B + C > A){
        var perimetro = A + B + C
        console.log("Perimetro = " + perimetro.toFixed(1)) 
    } else { 
        var area = ((A + B) * C) / 2
        console.log("Area = " + area.toFixed(1))}