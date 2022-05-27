//Programa que realiza a soma de dois números recebidos no terminal e verifica se são iguais, se a soma é maior, menor ou igual a 10 e a 20
function operacao(a, b) {
    var soma = a + b;
    if (a==b){
        if(soma > 10) {
            if (soma > 20){
                console.log('Os números', a, 'e', b, 'são iguais. Sua soma é', soma, ', que é maior que 10 e maior que 20.');
            }
            else if (soma < 20){
                console.log('Os números', a, 'e', b, 'são iguais. Sua soma é', soma, ', que é maior que 10 e menor que 20.');
            }
            else{
                console.log('Os números', a, 'e', b, 'são iguais. Sua soma é', soma, ', que é maior que 10 e igual a 20.');
            }
            }
        else if (soma < 10){
            console.log('Os números', a, 'e', b, 'são iguais. Sua soma é', soma, ', que é menor que 10 e menor que 20.');
            }
        else{
            console.log('Os números', a, 'e', b, 'são iguais. Sua soma é', soma, ', que é igual a 10 e menor que 20.');
        }
    }
    else{
        if(soma > 10) {
            if (soma > 20){
                console.log('Os números', a, 'e', b, 'não são iguais. Sua soma é', soma, ', que é maior que 10 e maior que 20.');
            }
            else if (soma < 20){
                console.log('Os números', a, 'e', b, 'não são iguais. Sua soma é', soma, ', que é maior que 10 e menor que 20.');
            }
            else{
                console.log('Os números', a, 'e', b, 'não são iguais. Sua soma é', soma, ', que é maior que 10 e igual a 20.');
            }
        }
        else if (soma < 10){
                console.log('Os números', a, 'e', b, 'não são iguais. Sua soma é', soma, ', que é menor que 10 e menor que 20.');
            }
        else{
            console.log('Os números', a, 'e', b, 'não são iguais. Sua soma é', soma, ', que é igual a 10 e menor que 20.');
        }
    }
}

const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o valor do primeiro número:\n", function (answer) {
    var a = parseInt(answer);
    leitor.question("Digite o valor do segundo número:\n", function (answer2) {
        var b = parseInt(answer2);
        operacao(a,b);
        leitor.close();
    });
});

