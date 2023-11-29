var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const palavra1 = lines[0];
const palavra2 = lines[1];
const palavra3 = lines[2];

if (palavra1 === 'vertebrado') {
  if (palavra2 === 'ave') {
    if (palavra3 === 'carnivoro') {
      console.log('aguia');
    } else if (palavra3 === 'onivoro') {
      console.log('pomba');
    }
  } else if (palavra2 === 'mamifero') {
    if (palavra3 === 'onivoro') {
      console.log('homem');
    } else if (palavra3 === 'herbivoro') {
      console.log('vaca');
    }
  }
} else if (palavra1 === 'invertebrado') {
  if (palavra2 === 'inseto') {
    if (palavra3 === 'hematofago') {
      console.log('pulga');
    } else if (palavra3 === 'herbivoro') {
      console.log('lagarta');
    }
  } else if (palavra2 === 'anelideo') {
    if (palavra3 === 'hematofago') {
      console.log('sanguessuga');
    } else if (palavra3 === 'onivoro') {
      console.log('minhoca');
    }
  }
}