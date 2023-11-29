var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift())

totalCoelhos = 0
totalRatos = 0
totalSapos = 0


for (let i = 0; i < n; i++) {
    const [quantidade, tipo] = lines[i].split(' ');
    
    if (tipo === 'C') {
        totalCoelhos += parseInt(quantidade)
    } else if (tipo === 'R') {
        totalRatos += parseInt(quantidade)
    } else if (tipo === 'S') {
        totalSapos += parseInt(quantidade)
    }
}

const totalCobaias = totalCoelhos + totalRatos + totalSapos
const percentualCoelhos = (totalCoelhos / totalCobaias) * 100
const percentualRatos = (totalRatos / totalCobaias) * 100
const percentualSapos = (totalSapos / totalCobaias) * 100


console.log(`Total: ${totalCobaias} cobaias`)
console.log(`Total de coelhos: ${totalCoelhos}`)
console.log(`Total de ratos: ${totalRatos}`)
console.log(`Total de sapos: ${totalSapos}`)
console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`)



