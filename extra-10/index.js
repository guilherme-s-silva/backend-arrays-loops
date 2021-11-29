const numeros = [15, 23, 22, 4, 45, 14]

let maiorNumero = numeros[0];
let menorNumero = numeros[0];
let diferenca = 0;

for (i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = (numeros[i]);
    }
    if (numeros[i] < menorNumero) {
        menorNumero = (numeros[i]);
    }

}
diferenca = maiorNumero - menorNumero;
console.log(diferenca);