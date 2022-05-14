const express = require('express')
const bodyParser = require('body-parser')
//para enviar eventos para os demais microsserviços
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

// Definição de dados
const eventPath = '/eventos'
const mssPath = ['http://localhost:4000/eventos', 'http://localhost:5000/eventos']
const port = 10000

app.post(eventPath, (req, res) => {
    // Variáveis
    const event = req.body

    // Broadcast
    mssPath.forEach(mss => {
        axios.post(mss, event)
    })

    // Resposta
    res.status(200).send({msg:"Request received - event fowarded"})
    console.log('POST request received & answered')
})

// Abrindo porta 10000 para receber requisições
app.listen(port, ()=>{
    console.log("Barramento. Porta " + port + '.')
})