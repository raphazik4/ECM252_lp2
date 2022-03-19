const print = console.log
require('dotenv').config() // atualiza as variáveis do process.env com as atuais no .env (carrega no programa) - require é o import do java, assim importa-se o dotenv e depois executa-se seu método config()
const axios = require('axios')

//console.log(process.env.APPID) // remove this after you've confirmed it working

// facilitando o trabalho - maneira mais fácil abaixo
// const APPID = process.env.APPID
// const UNITS = process.env.UNITS
// const LANGUAGE = process.env.LANGUAGE
// const BASE_URL = process.env.BASE_URL
// const PROTOCOL = process.env.PROTOCOL

// operador de desestruturação (caso hajam +200 variáveis de ambientes)
const { APPID, UNITS, LANGUAGE, BASE_URL, PROTOCOL, Q } = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

// Requisição IO-Bound (2 tipos: IO-Bound caracterizado por operações de entrada e saída, programa que só acessa o hd por exemplo // CPU-Bound caracterizado pela utilização da CPU, programa que só faz continha)
// geralmente não travamos o fluxo principal do endpoint "segurando outras requisições", portanto utilizamos o then (o axios.get retorna uma promisse) ou seja promisses
// realizamos todas as operações relacionadas a requisições IO-Bound dentro da promisse
// axios.get(url).then(res => {
//     print(res.data)
//     return res.data
// })
// .then (res => {
//     print('\n\n' + JSON.stringify(res.list))
//     return res.list
// })
// .then (res => {
//     for (let previsao of res){
//         print(`
//             ${new Date (+previsao.dt*1000).toLocaleString()},
//             Min: ${previsao.main.temp_min}\u00B0C,
//             Max: ${previsao.main.temp_max}\U00B0C,
//             Hum: ${previsao.main.humidity},
//             ${previsao.weather[0].description}
//         `)
//     }
// })

// Problema, analisar a quantidade de previsões que tem percepção humana acima de 30 graus
let goodTempCount = 0
let temperature = 25

axios.get(url).then(resposta => {
    return resposta.data
})
.then(dados => {
    return dados.list
})
.then(lista => {


    // lista.forEach(previsao => {
    //     print(previsao.main.feels_like)
    //     if (previsao.main.feels_like > temperature)
    //         goodTempCount++
    // });
    // print("Quantidade de temperaturas maiores do que " + temperature + "°: " + goodTempCount)

    goodTempCount = lista.filter( (item) => (item.main.feels_like) > temperature ).length
    print("Quantidade de temperaturas maiores do que " + temperature + "°: " + goodTempCount)

})

// Tentativa de pegar todas as keys de uma vez em formatação JSON
//const envJSON = process.env
//console.log(Object.keys(envJSON))