
//let c = []
//let par = []
//let impar = []
//
//for(let x = 0; x <= 20; x++){
//    c.push(x)
//
//    if(x % 2 === 0){
//        par.push(x)
//    }else{
//        impar.push(x)
//    }
//}
//
//console.log("todos os numeros: ", c)
//console.log("pares: ", par)
//console.log("impares: ", impar)

//console.log("Digite 5 números inteiros separados por vírgulas: ");
//
//process.stdin.on("data", function (data) {
//    let input = data.toString("utf-8").trim(); 
//
//    if (input.toLowerCase() === "s") process.exit(); 
//
//    // splita depois mapeia transformado em number
//    let numeros = input.split(",").map(num => parseInt(num.trim())); 
//    // faz um reduce para somar 
//    let soma = numeros.reduce((acc, num) => acc + num, 0); 
//    // faz a multiĺicação
//    let multiplicacao = numeros.reduce((acc, num) => acc * num, 1); 
//
//    console.log("\nNúmeros digitados:", numeros.join(" "));
//    console.log(`A soma dos números é ${soma}`);
//    console.log(`A multiplicação dos números é ${multiplicacao}`);
//
//    process.exit(); 
//});


//Exercicio 097
//Faça um Programa que peça as quatro notas de 10 alunos, calcule e
//armazene num vetor a média de cada aluno, imprima o número de alunos
//com média maior ou igual a 7.0.

let alunos = [1,2,3,4,5,6,7,8,9,10]
let notas = [1,2,3,4]

for(let aluno of alunos){
    console.log(aluno)
    let als = aluno
    for(let nota of notas){
    let nots = nota

    }

    console.log(als)
    console.log(nots)



}
