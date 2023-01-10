class Person {
    constructor(name, age, hasCar, carName, money){
        this.name = name;
        this.age = age;
        this.hasCar = hasCar;
        this.carName = carName;
        this.money = money;
        this.engineRunning = false;
    }
    get personName(){
        console.log(`My name is ${this.name}`)
    }
    getAge(){
        console.log(`I am ${this.age}`)
    }
    getCarInfo(){
        this.hasCar ? console.log(`My car is ${this.carName} `) : console.log(`I don't have car`)
    }
    changeCarName(newCarName){
        this.carName = newCarName
        console.log(`I changed car`)
    }
    getMoney(){
        console.log(`You have ${this.money}`)
    }
    startEngine(){
        this.engineRunning = true
    }
    stopEngine(){
        this.engineRunning = false
    }
    getEngineStateInfo(){
        return this.engineRunning
    }
    drive(distance, patrolPrice){
        if (this.checkIsTripPossible(distance, patrolPrice) && this.getEngineStateInfo()){
            console.log(`Car can drive ${distance} km`)
        } else if (!this.getEngineStateInfo()) {
            console.log("Before trip you should start engine")
        } else {
            console.log("You don't have enough money for this trip")
        }
    }
    checkIsTripPossible(distance, patrolPrice){
        let totalPriceForTrip = distance * patrolPrice
        if (this.money >= totalPriceForTrip) {
            this.money -= totalPriceForTrip
            return true
        } 
        return false
    }
}

let newPerson = new Person ("Taras", 32, true, "Renault", 1000)

newPerson.personName
newPerson.getAge()
newPerson.getCarInfo()
newPerson.changeCarName("Audi")
newPerson.getCarInfo()
newPerson.startEngine()
newPerson.drive(10, 20)
newPerson.drive(1000, 20)
newPerson.getMoney()




