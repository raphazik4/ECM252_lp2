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