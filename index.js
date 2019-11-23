// Your code here
class Pet {
    constructor(name){
        this.name = name
    }

    
}
class Cat extends Pet {
    speak(){
        return this.name + " says meow!"
    }
}

class Dog extends Pet{
    speak(){
        return this.name + " says woof!"     
    }
}

class Bird extends Pet{
    constructor(name, sex){
        super(name)
        this.sex = sex
    }
    speak(){
        if(this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`
        }else{
            return `${this.name} says squawk!`
        }
    }
}