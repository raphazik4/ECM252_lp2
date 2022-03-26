const print = console.log
const express = require('express')
const app = express()

// estamos aplicando um middleware - é executado antes de qualquer alvo definido abaixo (GET/POST)
app.use((req, res, next) => {
    print("Requisição recebida...")
    next()
})
app.use(express.json())

const lembretes = {'teste': 'dados'} // objeto apontado pela variável não pode mudar, mas o objeto em si pode ser alterado
let contador = 0

// Configuração do que fazer quando receber requisição do tipo GET
// exemplo.com.br/lembretes
app.get('/lembretes', (requestData, response) => {
    response.send(lembretes)
})

// Configuração do que fazer quando receber requisição do tipo POST
// exemplo.com.br/lembretes
app.post('/lembretes', (requestData, response) => {
    contador++
    //{texto: "Lembrete, como fazer café, ir dormir, etc."}
    const { texto } = requestData.body
    lembretes[contador] = {contador, texto} // json implícito: {contador: contador, texto: texto}
    response.status(201).send(lembretes[contador]) // status para criado - devolve
})

//
app.listen(4000, () => {
    print("Lembretes. Escutando a porta 4000")
})