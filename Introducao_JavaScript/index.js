const print = console.log

function delayMilliseconds(time = 1000){
    const futureTime = new Date().getTime() + time // wait 1 second for default
    while (new Date().getTime() <= futureTime);
}
// JavaScript é uma linguagem dinâmicamente tipada e interpretada

// //cons são valores constantes, que apontam sempre para o valor atribuido inicialmente
// const nome = "Rapha"    // O objeto "Rapha" possuí tipo, String
// const endereco = `Rua K, 12
//     Instituto Maua com 2 termos     tabulado`
// const sexo = 'Female'   // "", '', `` são todos Strings, apenas o `` possui alguma vantagem
// const exemplo_aspas = 'Aspas = ""'
// const idade = 21        // O objeto 21 possuí tipo, number. Enquanto idade é um ponteiro

// // Tipagem dinâmica: o tipo pode mudar em tempo de execução
// //let é uma variável que pode apontar para valores diferentes (pode ser reatribuído)
// let a = 2
// let nomeCompleto = "Joao da Silva"
// a = "abc"

// // Seguir o princípio do menor privilégio para escolher const ou let

// //var é uma variável também, e pode ser reatribuído, porém com um escopo contraintuitivo
// var c = 2 + 5
// var d = "abcd"

// Exemplo var
// qualquer variavel declarada sem especificar seu tipo vai ser var por padrão
// var linguagem = "JavaScript"
// console.log ("Aprendendo " + linguagem)
// // variavel pode ser redeclarada
// var linguagem = "Java"
// console.log ("Aprendendo " + linguagem)
// // variavel pode ser reatribuida
// linguagem = "Python"
// console.log ("Aprendendo " + linguagem)

// // Exemplo construção de trecho de (içamento / içada) utilizando var
// var idade = 18
// //var nome - é como se o nome existisse assim
// console.log ("Oi, " + nome) // variável não declarada tem valor indefinido
// if (idade >= 18){
//     var nome = "João" // variavel existe fora do escopo
//     console.log ("Parabéns, " + nome)
//     console.log ("Você pode dirigir")
// }
// console.log ("Até mais " + nome)
// // isto ocorre pois ao executar o script, ocorrem 2 passagens pelo código
// // na primeira passagem (leitura) o interpretador constroi uma estrutura de dados contendo as váriaveis declaradas
// // na segunda passagem (execução) o interpretador executa atribuições, testes e métodos
// // variável nome foi içada

// // Exemplo construção de trecho de (içamento / içada) utilizando let
// var idade = 18
// console.log ("Oi, " + nome) // variável não declarada - erro
// if (idade >= 18){
//     let nome = "João" // na primeira passada do javaScript com o let, ele armazena também o escopo da variável
//     console.log ("Parabéns, " + nome)
//     console.log ("Você pode dirigir")
// }
// console.log ("Até mais " + nome)
// // na primeira passagem (leitura) o interpretador constroi uma estrutura de dados contendo as váriaveis declaradas
// // se a variável for o let, também é armazenado seu escopo

// Sistema de tipos existe e ocorre somente em tempo de execução - tipagem dinâmica.
// let a = "abc" // - a é String
// a = 2 // - a é number

// let a = null
// let b
// console.log(a) // - a é null (valor atribuido)
// console.log(typeof(b)) // - b é undefined (camada de proteção contra valores aleatórios da memória)

// Linguagens fortemente tipada
// exemplo em C que não é:
// int a = 3.5; (perde-se o 0.5)
// exemplo em java que é fortemente tipada
// int a = (int) 3.5; o valor não é "perdido"

// // Coerção
// const n1 = 2 // valor primitivo não pode ser alterado (porém o tipo pode - encontra-se outro objeto de valor primitivo 2 com outro tipo)
// const n2 = '3' // não existe o tipo char
// // Coerção implícita (n1 é convertido para string que é concatenado com n2)
// const n3 = n1 + n2
// console.log("valor de n3: " + n3 + "\ttipo de n3: " + typeof(n3))
// // Coerção explícita, pode ser convertido para number também com: n1 + +n2 - o '+' converte n2 para number
// const n4 = n1 + Number(n2) 
// console.log("valor de n4: " + n4 + "\ttipo de n4: " + typeof(n4))

// = atribuição
// == comparação (com coerção implícita) -> IGNORAR A EXISTÊNCIA (exceto em sistemas LEGADOS)
// === comparação (SEM coerção implícita, compara primeiro por tipo E depois por (caso o tipo seja igual) valor)

// console.log (1 == 1)
// console.log (1 == '1')
// console.log (1 === 1)
// console.log (1 === '1') // false - sem conversão implícita
// console.log(true == 1) // true
//console.log(true == 2) // false
//console.log(1 == [1]) // true
// console.log(1 == [])
// console.log(1 == [2])
// console.log(1 == [1, 1])
// console.log(Number([1, 1]))
// console.log(typeof(Number([1, 1])))
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log([] === []) // vetores vazios são dois objetos diferentes na memória Heap
// const a = []
// const b = a
// console.log( a === b)
// console.log("" === "") // faz comparação por valores apenas
// a = "abc"
// b = "abc"
// console.log( a === b)
//console.log([1, 1] == true)
//console.log(Boolean([1, 1]))

// Vetores
// const v1 = [] // Similar ao ArrayList do java
// console.log(v1.length)
// v1[0] = 3.4
// v1[2] = "abc"
// v1[10] = 2
// console.log(v1.length)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }
//
// Trecho em C para exemplo
// int v[4]; - tamanho 4 para sempre
// 
// const v = []
// console.log(v.length)
// v = [] // NÃO É POSSÍVEL REATRIBUIR O VETOR
// v[100] = 2
// console.log(v.length)
// const v2 = [2, "abc", true]

// Metodos auxiliares dos vetores

// class Pessoa{
//     andar(){

//     }

//     variavel = andar; // ARMAZENA-SE O MÉTODO NA VARIÁVEL

//     m(){
//         andar()
//         variavel(); // chama o andar() que está armazenado na variavel
//     }
// }

// const nomes = [
//     "Ana Maria",
//     "Antonio",
//     "Alex",
//     "Martin",
//     "Rodrigo",
//     "Cristina",
//     "Amir",
//     "Alojão"
// ]


// // ambiente de linguagem declarativa (especifica-se o que você quer e o ambiente cuida disso) o JS é um ambiente declarativo
// // exemplo: SQL
// // Pessoa: id, nome, idade
// // SELECT nome, idade FROM pessoa - declara-se o que se quer e o ambiente cuida do resto, não especifica-se os loops, etc.

// // arrow function (função sem nome)
// // () => { } serve para ser passada como parametro

// // encontrar todos os nomes que começam com A
// const apenasA = nomes.filter((n) => { // n de nome, como se fosse um foreach, o filter itera sobre os componentes de nomes, aplicando a função a cada um, acessando o valor pelo n
//     return n.startsWith("A")
// })
// // a coleção inicial nomes permanece inalterada, pode-se armazenar em apenasA
// console.log(apenasA)

// // encontrar coleção composta pelas iniciais
// const mapeamento = nomes.map((nome) => nome.charAt(0))
// console.log(mapeamento)

// // Verificar se todos os elementos correspondem a um certo critério
// const resultado = nomes.every((nome) => nome.startsWith("A")) // verifica se todos os elementos começam com A
// console.log(resultado)

// const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const soma = valores.reduce((ac, atual) => ac + atual) // se não é passado um valor inicial, ac vale o primeiro item do array e atual vale o segundo
// //Função callback (cria-se uma função que vai ser chamada por alguem no futuro), por exemplo função chamada ao pressionar botões

// console.log(soma)

// // Criando funções:
// function nome(parametro1, parametro2, parametroN){
//     //Corpo da funcao
//     console.log("Chada da função")
// }
// nome()
// // Não tem sobrecarga de métodos, caso haja mais de uma definição da mesma função, a dupla passagem sobreescreve a função e a predominante será a última
// function soma (a, b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)
// const dobro = (n) => 2*n
// console.log(dobro(3))
// console.log(typeof(dobro))

// // funções são cidadãs de primeira classe, pode receber funções como parâmetro, produzir e chamalas
// // função que recebe outra função como parâmetro ou que cria uma funçãp: Higher Order function
// let umaFuncao = () => print("Fui armazenada em uma variável")
// umaFuncao()

// function f (funcao){ // higher order function
//     // callable
//     funcao()
// }

// function g(){ // higher order function
//     function outraFuncao(){
//         print("Fui criada por g")
//     }
//     return outraFuncao
// }

// f(function () {
//     print("Estou sendo passada para f")
// })

// //f(3) // valor não callable sendo tratado como callable
// print(g())
// g()()


// //desenvolver uma nova coleção
// //que possui todos os elementos
// //de v que fazem com que f produza true
// function filter(v, f){
//     const returnList = []
//     let counter = 0
//     v.forEach(element => {
//         if (f(element)){
//             returnList[counter] = element
//             counter++
//         }
//     });
//     return returnList
// }

// // [2]
// print(filter([1,2,3],e => e%2 ===0))

// //produzir uma coleção nova
// //que, para cada elemento de v[i]
// //possui o valor resultante de f(v[i])
// function map(v, f){
//     let returnList = []
//     let counter = 0
//     v.forEach(element => {
//         returnList[counter] = f(element)
//         counter++
//     });
//     return returnList
// }

// //[4,3]
// print(map(['abcd', 'abc'], e => e.length))

// const user = "19.00828-7"
// const mensagem = 'msg ' + user + ' "Contagem: '

// for (let i = 0; i < 50; i++){
// require('child_process').exec(mensagem + i + ' "')
// }

// function eAgora(){
//     let cont = 1
//     function f1(){
//         print(cont)
//     }
//     cont++
//     function f2(){
//         print(cont)
//     }
//     // ISSO É UM OBJETO JSON
//     return {f1, f2}
// }

// let res = eAgora()
// res.f1()
// res.f2()

// JSON - Javascript Object Notation (delimitado por {} no js)
// Consiste de pares chave - valor separados por vírgulas
// let pessoa = {
//     nome: "José",
//     idade: 17
// }
// // Acessando os dados:
// print(pessoa.nome)
// print(pessoa['idade'])

// let p = {
//     nome: "Martin",
//     idade: 20,
//     endereco: {
//         logradouro: "CU DO MUNDO",
//         distancia: Infinity,
//         numero: 666
//     },
//     elo: "Ferro Infinity"
// }

// print(p.endereco.distancia)

// Para manipular JSON em outras linguagens: java (gson) - buscar bibliotecas

// let c = {
//     cnpj: 215252663522553621456755876465876,
//     endereco: {
//         logradouro: 'Rua das rolinhas',
//         numero: 223,
//         bairro: 'Maua JSON'
//     },
//     veiculos: [
//         {
//             marca: "Tesla",
//             modelo: "PUSSY",
//             ano: "2099",
//             revisoes: [
//                 {
//                     data: '14/02/3982',
//                     consultor: 'Martin'
//                 },
//                 {
//                     data: '69/69/6969',
//                     consultor: 'PI PA PA PA RO PO'
//                 }
//             ]
//         },
//         {
//             marca: "Renault",
//             modelo: "Kwid",
//             ano: "2019"
//         },
//         {
//             marca: "Hotwheels",
//             modelo: "CARINHAFELIZ",
//             ano: "196969"
//         }
//     ]
// }

// print(c.veiculos[0].revisoes[0].consultor)

// É POSSÍVEL ARMAZENAR FUNCOES DENTRO DE JSONS

// const calc = {
//     soma : (a,b) => a+b,
//     subtracao: (a,b) => a-b,
//     multiplicacao: (a,b) => a*b,
//     divisao: (a,b) => a/b,
//     potenciacao: (a,b) => a**b,
//     raiz: (a,b) => a**(1/b)
// }

// calc.multiplicacao = (multiplicador1, multiplicador2) => multiplicador1*multiplicador2
// print(calc.soma(2,3))
// print(calc.raiz(4,2))
// print(calc.multiplicacao(2,3))

// OMISSÃO DE VALORES EM JSON
// se o nome da chave for o mesmo nome de uma variavel pode-se suprimir a declaração
// exemplo:

// const nome = 'Martin Ropke'
// const oculos = true
// const martinData = {nome, oculos}

// print(martinData)

// // Estruturas sequenciais

// print("Eu primeiro")
// print("Agora eu...")
// print("Sempre vou ser a última...")

// // Exemplo:
// const a = 2+7
// const b = 5
// const c = a + b // necessária
// print(c)

// function demorada(time = 2000){
//     print("Inicia-se a demorada")
//     const atualMais2Segundos = new Date().getTime() + time
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8+4
//     print("Fim da demorada")
//     return d
// }

// const a = 2 + 4
// const b = 5 + 9
// //const d = demorada() // a execução da linha seguinte fica bloqueada até que essa termine

// setTimeout(() => { // AGENDAMENTO DE EXECUÇÃO DO ESCOPO, o bloco interno é executado em no mínimo 500 ms
//     print("Funcao agendada")
//     const d = demorada()
//     print (d)
// }, 500)

// const e = a + b + 2 // processamento síncrono, bloqueante
// print(e)
// demorada(5000)

// setTimeout(() => { // SEM PARALELISMO, SISTEMA DE AGENDAMENTO DE FUNCOES APÓS A EXECUCAO TOTAL DO SCRIPT (vai colocando os blocos em uma fila ordenada pelo parâmetro passado após o bloco)
//     print("Dentro da timeout")
// }, 0) // PURO ORDENAMENTO DA FILA CASO NEGATIVO, OU ESPERA NO MÍNIMO O VALOR EM MILISEGUNDOS PARA A EXECUCAO NA ORDEM DA FILA

// delayMilliseconds(1000)
// print("Fora da timeout")

// CUIDADO COM O SINCRONISMO
// let abelha = 222
// setTimeout(() => {
//     print(abelha)
// }, 500)

// abelha = 666

// CALLBACKS - SITEMA ANTIGO CORRIGIDO POR PROMISE
// const fs = require('fs')
// // funções callback
// // intenção: abrir um txt e exibir na tela
// const abrirArquivo = function(nomeArquivo){

//     const funcaoCallBackParaExiberConteudoNoFuturo = function(erro, conteudo) {
//         if (erro)
//             print(`Deu erro: ${erro}`)
//         else{
//             print(`Conteúdo:\n${conteudo.toString()}`)
//             print("")
//             const triplo = +conteudo.toString() * 3
            
//             const finalizar = (erro) => { // outra funcao callback
//                 if (erro)
//                     print("Erro ao salvar o triplo")
//                 else
//                     print("Triplo salvo com sucesso")
//             }

//             fs.writeFile('triplo.txt', triplo.toString(), finalizar)
//         }
//     }

//     fs.readFile(nomeArquivo, funcaoCallBackParaExiberConteudoNoFuturo) //funcao callback passada como parametro
// }

// abrirArquivo("arquivo.txt")

// PROMISE
// 3 estados possíveis:
//    - Pending : Computação ainda não terminou, está pendente
//    - Fullfilled : Computação finalizada com sucesso (o estado não retorna para pending)
//    - Rejected : Computação finalizada com erro (o estado não retorna para pending)

// // exemplos:
// // somatorio da PA: 1 + 2 + ... + n-1 + n
// function calculoDemorado(numero){
//     // Promisse recebe como parametro uma função que é a computação relacionada a ela
//     // deseja-se que a computação seja assíncrona

//     // Essa função recebe 2 funções como parâmetros
//     const p = new Promise(function(resolve, reject) {
//         // --- Computação demorada ---
//         if (numero < 0)
//             reject("Por favor, informa apenas valores positivos.") // função chamada no catch
//         else{
//             let resultado = 0
//             for (let i = 1; i<=numero; i++)
//                 resultado += i
//             delayMilliseconds(3000)

//             // --- Chama-se a função resolve passando o resultado ---
//             resolve(resultado) 
//         }
//     })
    
//     return p
// }

// const res = calculoDemorado(100)
// //res.then((resultado) => print(resultado)) // then associa a função passada como parâmetro para a resolve e depois começa a computação

// res.then((resultado) => print(resultado)).catch((mensagemDeErro) => print("Falhou: " + mensagemDeErro)) // catch associa a função interna com o reject que é executado caso ocorra um erro
// // Se deu certo, executa-se o then e NÃO é executado o catch, caso contrário executa-se APENAS o catch

// const res2 = calculoDemorado(-1)
// res2.then((resultado) => print(resultado)).catch((mensagemDeErro) => print("Falhou: " + mensagemDeErro)) // catch associa a função interna com o reject que é executado caso ocorra um erro

// const testeDePromise = function (parametroGeral, op = 1){
//     return new Promise((funcaoAceitacao, funcaoRejeicao) => {
//         funcaoRejeicao(parametroGeral)
//         funcaoAceitacao(parametroGeral)        
        
//     })
// }

// const funcaoResultado = testeDePromise("Parametro geral")
// //print(typeof(funcaoResultado))
// print( funcaoResultado
// .then((valor) => print("Resultado da aceitacao: " + valor), (valor) => print("Resultado rejeicao: " + valor)) )
// // .then((valor) => print("Resultado da aceitacao_1: " + valor), (valor) => print("Resultado rejeicao_1: " + valor))
// // .then((valor) => print("Resultado da aceitacao_2: " + valor), (valor) => print("Resultado rejeicao_2: " + valor))
// // .then((valor) => print("Resultado da aceitacao_3: " + valor), (valor) => print("Resultado rejeicao_3: " + valor))
// // .then((valor) => print("Resultado da aceitacao_4: " + valor), (valor) => print("Resultado rejeicao_4: " + valor))