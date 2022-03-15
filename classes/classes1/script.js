class Person{
    constructor(name, age, favAct){
        this._name = name;
        this._age = age;
        this._favoriteActivity = favAct;
    }

    whatLikes(){
        return `${this._name} tem ${this._age} anos e gosta de ${this._favoriteActivity}`
    }
}

const firstPerson = new Person('André', 30, 'jogar');
console.log(firstPerson.whatLikes())

const secondPerson = new Person('Maria', 22, 'estudar')
console.log(secondPerson.whatLikes())

const thirdPerson = new Person('Paulo', 17, 'andar de skate')
console.log(thirdPerson.whatLikes())

//@import url(applayoutauthauth-layout.css);

class OpenPages{
    constructor(pageFetch){
        this.pageFetch = pageFetch;
    }
}