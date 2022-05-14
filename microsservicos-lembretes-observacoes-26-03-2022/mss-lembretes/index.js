const print = console.log
print("Iniciando microsserviço de LEMBRETES.")
const { default: axios } = require('axios')
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
const event = '/eventos'
const eventPath = 'http://localhost:10000/eventos'
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
app.post(path, async (requestData, response) => { // async para poder usar o await na parte do barramento
    print("Requisição POST recebida.")
    contador++
    //{texto: "Lembrete, como fazer café, ir dormir, etc."}
    //const texto = requestData.body.texto - modo de pegar dados pelo js
    const { texto } = requestData.body // desestruturação
    lembretes[contador] = {contador, texto} // json implícito: {contador: contador, texto: texto}

    // ------------- Barramento -----------------
    try{
        await axios.post(eventPath, {
            tipo: "Lembrete Criado",
            dados: {
                contador, texto
            }
        })
    }
    catch(e){
        print(e)
        response.status(500).send(e)
    }
    
    // ------------- Barramento -----------------
    finally{
        print("Resposta para o cliente")
        response.status(201).send(lembretes[contador]) // status para criado - devolve
    }
})

// Abrindo porta 4000 para receber requisições
app.listen(port, () => {
    print("Lembretes. Porta " + port + '.')
})

// RECEBIMENTO DE REQUISIÇÕES DO BARRAMENTO DE EVENTOS
app.post(event, (req, res) => {
    print("RECEBIDA RESPOSTA DO BARRAMENTO")
    res.status(200)
})