var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = input.trim().split('\n').map(Number);

for (i = 0; i < valores.length; i++) {

    if (valores[i] !== 2002) {
        console.log("Senha Invalida")
    } else {
        console.log("Acesso Permitido")
        break
    }
}



