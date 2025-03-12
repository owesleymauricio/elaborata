// criar um arquivo

const fs = require("fs")
const soma = require("./funcao.js")

console.log(soma(1,2))


let conteudo = "teste1 teste2 teste3";
let options = { flag: "a"}

//console.log("antes")
//
//fs.writeFile("texto.txt", conteudo, options, function(erro){
//    console.log(erro)
//    console.log("gravou")
//})
//
//console.log("depois")
//
//fs.readFile("texto.txt", "utf-8", function(erro, data){
//    console.log(erro);
//    console.log(data);
//})

