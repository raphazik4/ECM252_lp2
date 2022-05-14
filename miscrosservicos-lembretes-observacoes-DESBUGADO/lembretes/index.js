const express = require ('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
const lembretes = {}
contador = 0

// Definição de dados
const eventPath = 'http://localhost:10000/eventos'
const path = '/lembretes'
const port = 4000

app.get(path, (req, res) => {
    console.log('GET request received')

    res.send(lembretes)
})

app.post(path, async (req, res) => {
    console.log('POST request received')

    // Variáveis
    contador ++
    const {texto} = req.body

    // Construção dos dados
    lembretes[contador] = {
        contador, texto
    }

    // Mensagem ao barramento de eventos
    await axios.post(eventPath, {
        tipo: 'LembreteCriado',
        dados: {
            contador,
            texto
        }
    })

    // Respostas
    res.status(200).send(lembretes[contador])
    console.log(`O lembrete '${contador}' do foi criado com sucesso`)
})

// Abrindo porta 4000 para receber requisições
app.listen(port, () => {
    console.log("Lembretes. Porta " + port + '.')
})

// Endpoint para o barramento de eventos
app.post('/eventos', (req, res) => {
    console.log('\nBarramento de eventos:')

    console.log(req.body)
    res.status(200).send({msg:"ok"})
})