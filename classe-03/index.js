const numeros = [54, 22, 14, 87, 10, 284];

let posicao = 0;
let contador = 0;
for (let numero of numeros) {
    contador++
    if (numero === 10) {
        posicao = contador - 1;
        break;
    }
}

if (posicao += 0) {
    console.log(posicao);
} else {
    console.log(-1);
}