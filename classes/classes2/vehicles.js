export default class Vehicles {
    constructor(wheels, doors, fuel, pontecy){
        this._wheels = wheels;
        this._doors = doors;
        this._fuel = fuel;
        this._potency = pontecy;
    }
}

class Car extends Vehicles{
    constructor(wheels, doors, fuel, potency, banks){
        super(wheels, doors, fuel, potency)
        this._banks = banks;
    }
}

class Motorcycle extends Vehicles{

}

const civic = new Car(4, 4, 'Flex', '173 HP', 5)

const hornet = new Motorcycle(2, 0, 'Flex', '102 HP to 12.000 rpm')

console.log(civic, hornet)