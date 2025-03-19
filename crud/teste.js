import {getAll, pesquisar} from "./index.js";

// async function teste() {
    

setTimeout(async ()=>{
    let res = await  getAll();

    console.log(res)
}, 5000)
//}

//teste()

setTimeout(async ()=>{
    let res = await  pesquisar(1)

    console.log(res)
}, 2000)

