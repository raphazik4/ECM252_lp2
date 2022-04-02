const print = console.log
print("Iniciando microsserviço de LEMBRETES.")
const express = require('express')
const app = express()

// Aplicação de middleware - é executado antes de qualquer alvo definido abaixo (GET/POST)
app.use((req, res, next) => {
    //print("Executando middleware...")
    next()
})
app.use(express.json()) // Próximo middleware, chamado no next() acima

// Definição de dados
const path = '/lembretes'
const port = 4000

const lembretes = {'teste': 'dados'} // objeto apontado pela variável não pode mudar, mas o objeto em si pode ser alterado

// Variáveis auxiliares
let contador = 0

// GET - Configuração do que fazer quando receber requisição do tipo GET, exemplo.com.br/lembretes
app.get(path, (requestData, response) => {
    print("Requisição GET recebida.")
    response.send(lembretes)
})

// POST - Configuração do que fazer quando receber requisição do tipo POST, exemplo.com.br/lembretes
app.post(path, (requestData, response) => {
    print("Requisição POST recebida.")
    contador++
    //{texto: "Lembrete, como fazer café, ir dormir, etc."}
    //const texto = requestData.body.texto - modo de pegar dados pelo js
    const { texto } = requestData.body // desestruturação
    lembretes[contador] = {contador, texto} // json implícito: {contador: contador, texto: texto}
    response.status(201).send(lembretes[contador]) // status para criado - devolve
})

// Abrindo porta 4000 para receber requisições
app.listen(port, () => {
    print("Lembretes. Escutando a porta 4000")
})