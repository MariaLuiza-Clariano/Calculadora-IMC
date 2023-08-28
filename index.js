/*
IMC é uma sigla para indice de Massa Corpórea,
parâmetro adotado pela Organização Mundial de Saúde
para calcular o peso ideal de cada pessoa.

Como calcular o IMC?
O IM é cauculado dividindo o peso (em Kg) pela altura ao quadrado (em metros), de acordo
com a seguinte formúla: peso / (altura x altura).

Em nosso caulculo devemos retornar os seguintes valores para usuário:

Resultado do calculo | Resultado para usúario
Abaixo de 17         | Muito abaixo do peso
Entre 17 e 18.49     | Abaixo do peso
Entre 18.50 e 24.99  | Peso normal
Entre 25 e 29.99     | Acima do peso
Entre 30 e 34.99     | Obesidade I
Entre 35 e 39.99     | Obesidade II
*/

const peso = 64;
const altura = 1.76;
const imc = Number ((peso / (altura * altura)).toFixed(2));
//colocamos o Number para que o resultado não vire uma string
//usamos o toFixed para retornar apenas as duas casas depois do ponto
console.log(imc);

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso");
        break;

     case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
         break;

    case imc >= 18.50 && imc <= 24.99:
        console.log("Peso normal");
        break;

    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso");
        break;

    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I");
        break;

    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II");
        break;

    default: 
        break;
}
