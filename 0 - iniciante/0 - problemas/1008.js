var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var NUMBER = parseInt(lines.shift());
var HOURS = parseInt(lines.shift());
var salaryHours = parseFloat(lines.shift());

var SALARY = salaryHours * HOURS;

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);