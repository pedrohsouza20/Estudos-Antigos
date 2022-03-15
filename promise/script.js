//new Promise() = cria uma promessa, que pode ser resolvida ou rejeitada
//setTimeout() foi utilizado para testar a assincronia do código

//Promise.all coleta todas as promessas assim que a ultima delas obtiverem retorno

//Promise.race retorna a primeira promessa resolvida ou rejeitada, e o valor dela 
//será o valor da primeira promise resolvida

const firstPromise = new Promise((res, rej) => {
    setTimeout((toSet) => {
        res('resolvido')
    }, 1200)
})

const secondPromise = new Promise((res, rej) => {
    setTimeout((toSet) => {
        res('resolvido 2')
    }, 300)
})

//Retorna as 2 promises

const bothPromise = Promise.all([firstPromise, secondPromise])
.then((x) => {
    console.log(x)
})

//Retorna a Promise que for concluida primeiro

const firstPromiseReady = Promise.race([firstPromise, secondPromise])
.then((x) => {
    console.log(x)
})