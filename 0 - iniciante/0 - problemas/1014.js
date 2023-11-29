// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

 //Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines[0]); //distancia
var y = parseFloat(lines[1]); //combustivel

var consumoMedio = x / y;

console.log(consumoMedio.toFixed(3) + " km/l");

//Você tentou acessar uma variável não definida;
//Você definiu um array ou vetor com menos capacidade que o requisitado pelo problema;
//Você está tentando acessar uma posição inválida em memória.