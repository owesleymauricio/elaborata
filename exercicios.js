//Exercicio 028
//Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
//
//Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function t(horario){

    if(horario == 'm'){
        return "Bom dia"
    }else if(horario == 'v'){
        return "Boa tarde"
    }else if(horario == 'n'){
        return "Boa noite"
    }else{
        return "valor invalido"
    }
}

console.log(t('v'))




//Exercicio 034
//Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c.
//
//O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
//
//Se o usuário informar o valor de A igual a zero, a equação não é do segundo
//    grau e o programa não deve fazer pedir os demais valores,
//    sendo encerrado;
//Se o delta calculado for negativo, a equação não possui raízes reais.
//    Informe ao usuário e encerre o programa;
//Se o delta calculado for igual a zero a equação possui apenas uma raiz
//    real; informe-a ao usuário;
//Se o delta for positivo, a equação possui duas raiz reais;
//    informe-as ao usuário;

let a = 4
let b = 2
let c = 2

let res = ((a*2) / 100) + b + c

console.log(res)

