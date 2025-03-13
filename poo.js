const fs = require("fs")

// class é o molde do objeto
class Caneta {

    cor;
    quantidade = 100

    constructor(cor = "azul"){
        this.cor = cor
    }

    escrever(palavra) {

        if(this.quantidade > 0){
        console.log("escreveu " + palavra)
        this.quantidade = this.quantidade - palavra.length
        }else{
            console.log("acaboua a tinta")
        }
    }
}

//herança
// canetaQuadro é filho  ... extends é sempre o pai
class CanetaQuadro extends Caneta{
    quantidade = 10000 // pode sobreescrever as caracteristicas do pai
}

class CanetaLaser extends CanetaQuadro{

}

// let can1 = new CanetaQuadro()
// let can2 = new CanetaLaser()
// 
// 
// let canetaAzul = new Caneta("verde");
// let canetaVerde= new Caneta("preto");
// let canetaAmarelo = new Caneta();
// 
// //canetaAmarelo.cor = "preto"
// canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
// canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
// 
// canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
// canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
// 
// 
// 
// console.log(can1)
// console.log(can2)

//Exercicio 036
//Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.



// console.log("digite o numero 1:")
// process.stdin.on('data', function(data){
// 
//     let n1 = data.toString("utf-8").trim()
// 
// 
// 
//     if(n1 === "s"){process.exit()}
// 
// });



console.log("Digite auma data corretamente com esse formato 'dd/mm/aaaa': ")
process.stdin.on('data', function(data){
    
    let input = data.toString("utf-8").trim()

    if (input === "s") { 
        console.log("Saindo...");
        process.exit();
    }

    let dataFormat = input.split("/");


    if(dataFormat.length !== 3){
        console.log("formato invalido, escreva novamente")
        return
    }

    let dia = parseInt(dataFormat[0], 10)
    let mes = parseInt(dataFormat[1], 10)
    let ano = parseInt(dataFormat[2], 10)

    if(dia < 1 || dia > 32){
        console.log("o dia deve ser entre 1 e 31.")
        return
    }
    if(mes < 1 || mes >= 12){
        console.log("O mes deve ser entre 1 a 12.")
        return
    }
    if(ano < 1000 || ano > 9999){
        console.log("O formato do mes deve ser com 4 numeros.")
        return
    }


    console.log(`O formato ${dia}/${mes}/${ano} esta correto.`)
    console.log("Para sair digite 's'")
})