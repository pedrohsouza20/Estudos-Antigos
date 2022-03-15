var firstNumber = 5;

setTimeout((returnSum) => console.log(firstNumber + 10)
, 1000)

// -- Funcao normal -- //

setTimeout(function nome(parameter, parameter2){
    //action
})

// -- Arrow Function -- //

setTimeout((parameter, parameter2) => {
    console.log('Primeira Arrow Function')
},100)

setTimeout(()=>{
    console.log('Segunda Arrow Function')
},200)

setTimeout(()=> {console.log('Terceira Arrow Function')},300)