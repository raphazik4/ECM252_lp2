const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const axios = require('axios')
const app = express()
app.use(bodyParser.json())

// Definição de dados
const eventPath = 'http://localhost:10000/eventos'
const path = '/lembretes/:id/observacoes' // significa que o valor será substituido
const observacoesPorLembreteId = {}
const port = 5000


app.get(path, (req, res) => {
    console.log('GET request received')

    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post(path, async (req, res) => {
    console.log('POST request received')

    // Variáveis
    const idObs = uuidv4()
    const {texto} = req.body
    const lembreteId = req.params.id

    // Construção dos dados
    const observacoesDoLembrete = 
        observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete

    // Mensagem ao barramento de eventos
    await axios.post(eventPath, {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs,
            texto,
            lembreteId
        }
    })

    // Respostas
    res.status(201).send(observacoesDoLembrete)
    console.log(`A observação '${idObs}' do lembrete '${lembreteId}' foi criada com sucesso`)
})

// Abrindo porta 5000 para receber requisições
app.listen(port, () => {
    console.log('Observações. Porta ' + port + '.')
})

// Endpoint para o barramento de eventos
app.post('/eventos', (req, res) => {
    console.log('\nBarramento de eventos:')

    console.log(req.body)
    res.status(200).send({msg:"ok"})
})