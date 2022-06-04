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
  MONGODB_USER, MONGODB_PASSWORD,
  MONGODB_CLUSTER, MONGODB_HOST, MONGODB_DATABASE
} = process.env;

// Conexão com banco de dados
mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then( () => {console.log('Conexão OK')}).catch( (e) => {console.log('Conexão NÃO OK: ' + e)})

// Definição de rotas

app.delete('/api/clientes/:id', (req, res, next) => {
  const id = req.params.id
  Cliente.deleteOne({_id: id}).then((res) => {
    res.json({mensagem: `O cliente de id ${id} foi removido com sucesso`})
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
  new Cliente(req.body).save().then(() => {
    res.status(201).json({mensagem: 'Cliente inserido'});
  })
});

// Exportação do módulo
module.exports = app;