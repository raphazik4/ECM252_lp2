const print = console.log
const express = require('express')
const app = express()

// Middleware (executado) antes de ir pros destinos
app.use(express.json())

const data = {'teste': 'dados'}

//POST
//host:porta/lembretes/id-lembrete/observacoes, ex host:4000/lembretes/2/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => { // o :id identifica que entre as 2 barras (anterior e posterior) haverá um valor
    
})

//GET
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(data)
})

app.listen(5000, () => {
    print('Lembretes. Porta 5000.')
})