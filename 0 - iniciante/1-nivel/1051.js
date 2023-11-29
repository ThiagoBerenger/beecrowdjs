var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const salario = Number.parseFloat(input).toFixed(2)

let imposto = 0;


if (salario > 2000 && salario <= 3000) {
    imposto = (salario - 2000) * 0.08;
} else if (salario > 3000 && salario <= 4500) {
    imposto = 1000 * 0.08 + (salario - 3000) * 0.18;
} else if (salario > 4500) {
    imposto = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28;
} else {
    console.log('Isento')
}

if (imposto > 0){
console.log(`R$ ${imposto.toFixed(2)}`)
}
