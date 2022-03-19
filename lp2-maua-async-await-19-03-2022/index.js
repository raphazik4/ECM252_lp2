const print = console.log

// async function hello(nome){
//     return `Hello, ${nome}` // o async faz a função retornar uma promise resolve (implicitamente)
// }

// Similar ao utilizar o async
// function hello(nome){
//     return new Promise((resolve, reject) => {
//         resolve(nome)
//     })
// }

function fatorial(n){
    if (n < 0) return Promise.reject("O valor não pode ser negativo.") // similar a new Promise((resolve, reject) => reject("O valor não pode ser negativo".))
    let res = 1
    for(let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

// function chamadaComThenCatch(valor){
//     fatorial(10)
//     .then(res => print(res))
//     .catch(erro => print(erro))

//     fatorial(-10)
//     .then(res => print(res))
//     .catch(erro => print(erro))
// }

// chamadaComThenCatch()

async function chamadaComAsyncAwait(){
    
    const f1 = await fatorial(10) // só pode ser utilizado dentro de uma função async - espera o resultado e recebe ele ao invés da promise
    print (f1)

    try {
        const f2 = await fatorial(-10)
        print (f2)
    } catch (erro) {
        print(erro)
    }
    
    
}

chamadaComAsyncAwait()