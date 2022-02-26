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

// Coerção
const n1 = 2 // valor primitivo não pode ser alterado (porém o tipo pode - encontra-se outro objeto de valor primitivo 2 com outro tipo)
const n2 = '3' // não existe o tipo char
// Coerção implícita (n1 é convertido para string que é concatenado com n2)
const n3 = n1 + n2
console.log("valor de n3: " + n3 + "\ttipo de n3: " + typeof(n3))
// Coerção explícita, pode ser convertido para number também com: n1 + +n2 - o '+' converte n2 para number
const n4 = n1 + Number(n2) 
console.log("valor de n4: " + n4 + "\ttipo de n4: " + typeof(n4))

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

const nomes = [
    "Ana Maria",
    "Antonio",
    "Alex",
    "Martin",
    "Rodrigo",
    "Cristina",
    "Amir",
    "Alojão"
]


// ambiente de linguagem declarativa (especifica-se o que você quer e o ambiente cuida disso) o JS é um ambiente declarativo
// exemplo: SQL
// Pessoa: id, nome, idade
// SELECT nome, idade FROM pessoa - declara-se o que se quer e o ambiente cuida do resto, não especifica-se os loops, etc.

// arrow function (função sem nome)
// () => { } serve para ser passada como parametro

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

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const soma = valores.reduce((ac, atual) => ac + atual) // se não é passado um valor inicial, ac vale o primeiro item do array e atual vale o segundo
//Função callback (cria-se uma função que vai ser chamada por alguem no futuro), por exemplo função chamada ao pressionar botões

console.log(soma)