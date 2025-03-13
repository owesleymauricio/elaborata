
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

let can1 = new CanetaQuadro()
let can2 = new CanetaLaser()


let canetaAzul = new Caneta("verde");
let canetaVerde= new Caneta("preto");
let canetaAmarelo = new Caneta();

//canetaAmarelo.cor = "preto"
canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")

canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")
canetaAmarelo.escrever("lorem       jnonmfvoimoifvmkoifmkiobfgob")



console.log(can1)
console.log(can2)

//Exercicio 036
//Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

