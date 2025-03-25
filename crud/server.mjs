import express from "express";
import cors from "cors";

import { getAll, cadastrar, deletar } from "./model/clientes.mjs";



// express
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 3000;

if(process.env.PROD == "true"){
    port = 80
}else{
    port = 3000;
}

console.log(process.env)
// route action
app.get('/clientes', async (req, res) => {

    let data = await getAll();

    res.json(data);
})

app.post("/cliente-novo", async (req, res) => {
    let data = req.body;

    let result = await cadastrar(
        data.nome,
        data.email,
        data.cidade,
        data.telefone,
        data.idade);
    res.json(result).status(201)
})

app.post("/clientes/delete", async (req, res) => {
    
    let {id} = req.body;
    return await deletar(id)
        .then((result) => {
            res.json(result).status(200)
        })
        .catch((error) => {
            res.json(error).status(500)
        })
})

app.listen(3000, () => {
    console.log("deu boa")
})