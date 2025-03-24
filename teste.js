import {atualizar, cadastrar, deletar, getAll, pesquisar} from "./index.js";

// async function teste() {
    

//setTimeout(async ()=>{
//    let res = await  getAll();
//
//    console.log(res)
//}, 5000)
////}
//
////teste()
//
//setTimeout(async ()=>{
//    let res = await  pesquisar(1)
//
//    console.log(res)
//}, 2000)

async function teste(){
    let val = {
        telefone: "(41) 1234-4321",
        idade: 10
    }

    let res = await atualizar(6, val)

    console.log(res)
}

teste()

