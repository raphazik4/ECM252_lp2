const print = console.log
const express = require('express')
const app = express()

// Configuração do que fazer quando receber requisição do tipo GET
// exemplo.com.br/lembretes
app.get('/lembretes', (requisitionData, response) => {
    return "RETORNO DO MÉTODO GET"
})

// Configuração do que fazer quando receber requisição do tipo POST
// exemplo.com.br/lembretes
app.post('/lembretes', (requisitionData, response) => {
    return "RETORNO DO MÉTODO"
})

//
app.listen(4000, () => {
    print("Lembretes. Escutando a porta 4000")
})