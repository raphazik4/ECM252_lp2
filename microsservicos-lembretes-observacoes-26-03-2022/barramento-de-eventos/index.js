const print = console.log
print("Iniciando microsserviço de BARRAMENTO.")
const { default: axios } = require('axios')
const express = require('express')
const app = express()

// Middleware (executado) antes de ir pros destinos
app.use(express.json())

// Definição de dados
const eventPath = '/eventos'
const lembretesPath = 'http://localhost:4000/eventos'
const observacoesPath = 'http://localhost:5000/eventos'
const port = 10000

// GET

// POST
app.post(eventPath, async (req, res) => {
    print("Requisição POST recebida")
    const evento = req.body // {tipo: LembreteCriado, dados: {}}

    try{
        await axios.post(lembretesPath, evento)
        await axios.post(observacoesPath, evento)
    }
    catch (e){
        print(e)
        res.status(500).send(e)
    }

    res.status(200).json({"msg":ok})
})

// Abrindo porta 10000 para receber requisições
app.listen(port, ()=>{
    print("Barramento. Porta " + port + '.')
})