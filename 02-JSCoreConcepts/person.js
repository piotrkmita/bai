class Person {
    constructor(name, surename) {
        this.name = name;
        this.surename = surename;
    }

    fullName() {
        console.log(`${this.name} ${this.surename.toUpperCase()}`);
    }

    initials(){
        console.log(`${this.name.charAt(0).toUpperCase()}.${this.surename.charAt(0).toUpperCase()}.`)
    }


}

const person = new Person("Jan","Nowak");
const person2 = new Person("Piotr", "Kmita")
person.fullName()
person.initials()

person2.fullName()
person2.initials()