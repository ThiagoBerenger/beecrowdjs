var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salarioInicio = parseFloat(lines.shift());

var salarioFinal

if(salarioInicio <= 400.00) {
    salarioFinal = salarioInicio * 15 / 100 + salarioInicio
} else if(salarioInicio <= 800.00){
    salarioFinal = salarioInicio * 12 / 100 + salarioInicio
} else if(salarioInicio <= 1200.00){
    salarioFinal = salarioInicio * 10 / 100 + salarioInicio
} else if(salarioInicio <= 2000.00){
    salarioFinal = salarioInicio * 7 / 100 + salarioInicio
} else {
    salarioFinal = salarioInicio * 4 / 100 + salarioInicio
}

var reajuste = (salarioInicio - salarioFinal) * -1

var emPorcento = ((salarioInicio - salarioFinal) / salarioInicio * 100)

if(emPorcento < 0){
    
}

console.log(`Novo salario: ${salarioFinal.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${Math.abs(emPorcento.toFixed(0))} %`)
