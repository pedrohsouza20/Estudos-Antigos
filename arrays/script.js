var arrayNumbers = [1, 9, 5, 3, 15, 4, 1, 12, 144, 2, 4, 5, 6, 55, 2];

const order = arrayNumbers.sort(function(a,b){
    return a-b;
})
console.log(order)

const removeRepetead = order.filter((number, index) => 

        order.indexOf(number) === index
)

console.log(removeRepetead)

const sumNumbers = arrayNumbers.reduce((accumulator, number) => {
    return accumulator + number;
}, 0)

console.log(sumNumbers)