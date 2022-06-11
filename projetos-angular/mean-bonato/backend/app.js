require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Console } = require('console');
const Cliente = require('./models/cliente')

app.use(bodyParser.json())
app.use(cors())

const {
  MONGODB_CONNECTION
} = process.env;

// Conexão com banco de dados
mongoose.connect(`${MONGODB_CONNECTION}`)
.then( () => {console.log('Conexão OK')}).catch( (e) => {console.log('Conexão NÃO OK: ' + e)})

// Definição de rotas

app.delete('/api/clientes/:id', (req, res, next) => {
  const id = req.params.id
  Cliente.deleteOne({_id: id}).then((data) => {
    res.status(200).json({
      mensagem: 'Cliente removido com sucesso!',
      id: data.id
    });
  })
})

app.get('/api/clientes', (req, res, next) => {
  Cliente.find().then((data) => {
    res.status(200).json({
      mensagem: 'Tudo OK',
      clientes: data
    });
  });
})

app.post('/api/clientes', (req, res, next) => {
  new Cliente(req.body).save().then((cliInserido) => {
    res.status(201).json({
      mensagem: `Cliente inserido`,
      id : cliInserido._id
  });
  })
});

// Exportação do módulo
module.exports = app;