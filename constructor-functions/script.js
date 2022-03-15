function Car(mark, value){
    this.mark = mark;
    this.price = value;
}

const honda = new Car('Honda', 5000);
const fiat = new Car('Fiat', 2000)
console.log(Car)


function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
} 

const person1 = new Person('André', 25, 'Detroit')
console.log(person1)

person1.name = 'Carlos';
console.log(person1)

console.log(person1.name = 'Maria')