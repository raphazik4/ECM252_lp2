const print = console.log
print("Iniciando microsserviço de BARRAMENTO.")
const { default: axios } = require('axios')
const express = require('express')
const app = express()

// Middleware (executado) antes de ir pros destinos
app.use(express.json())

// Definição de dados
const eventPath = '/eventos'
const lembretesPath = 'localhost:4000/eventos'
const observacoesPath = 'localhost:5000/eventos'
const port = 10000

// GET

// POST
app.post(eventPath, (req, res) => {
    const evento = req.body // {tipo: LembreteCriado, dados: {}}

    axios.post(lembretesPath, evento)
    axios.post(observacoesPath, evento)

    res.status(200).json({"msg":ok})
})

// Abrindo porta 10000 para receber requisições
app.listen(port, ()=>{
    print("Barramento. Porta " + port + '.')
})