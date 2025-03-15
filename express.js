const express = require('express');
const app = express();



const fs = require("fs");



app.get("/", function (req, res) {
    res.send("Bem vindo ao meu site")
}
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/contato",async function (req, res) {
   
    fs.readFile("alunos.csv", "utf-8" ,function(erro, data){
        let t = data.split("\n").length
        let t1 = 
           "<ul>"
                t.forEach(element => {
                    t1 = t1 + "<li>" + element + "</li>"
                })
                
                    
            t1 + "</ul>"
        res.send(t1)
        
    })
})

app.post("/calc", function(req,res){
    let rest = parseFloat(req.body.n1) + parseFloat(req.body.n2)
    res.send(`Resultado ${rest}`)
})

app.post("/contato", function (req, res) {
    let valores = req.body.nome + "," + req.body.email + "\n";

    let options = {
        flag: "a"
    }
    fs.writeFile("alunos.csv", valores, options,function(){
        res.send("deu boa")
    })
    //res.json(valores)
})


app.listen(3000, function () {
    console.log("Servidor rodando na url http://localhost:3000")
}
)

