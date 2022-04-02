const print = console.log
print("Iniciando microsserviço de OBSERVAÇÕES.")
const express = require('express')
const {v4: uuidv4} = require('uuid') // importa o modulo uuid e pega a referência da função uuidv4() da chave v4
const app = express()

// Middleware (executado) antes de ir pros destinos
app.use(express.json())

// Definição de dados
const path = '/lembretes/:id/observacoes' // significa que o valor será substituido
const port = 5000

const observacoesPorLembreteId = {'': ''}
const data = {'teste': 'dados'}

// GET
app.get(path, (req, res) => {
    print("Requisição GET recebida.")
    const requestId = req.params.id
    if (observacoesPorLembreteId[requestId] === undefined) res.status(404).send("<html><body><h1 style='color:red'>ERRO 404</h1><p><img src = 'https://pbs.twimg.com/media/E5bbxjGWUAEwBnT.jpg'></p></body></html>")
    else res.status(200).send(observacoesPorLembreteId[requestId])
    
})

// POST - host:porta/lembretes/id-lembrete/observacoes, ex host:4000/lembretes/2/observacoes
app.post(path, (req, res) => { // o :id identifica que entre as 2 barras (anterior e posterior) haverá um valor
    print("Requisição POST recebida.")
    const idObs = uuidv4()
    const { texto } = req.body

    // Atualizando dados
    const requestId = req.params.id // pega-se os parâmetros da requisição - id
    const observacoesDoLembrete = observacoesPorLembreteId[requestId] || [] // || [], verifica se a primeira parte da expressão é válida
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteId[requestId] = observacoesDoLembrete

    res.status(201).send("Recurso adicionado:\n" + JSON.stringify(observacoesDoLembrete))
})

// Abrindo porta 5000 para receber requisições
app.listen(port, () => {
    print('Observações. Porta ' + port + '.')
})