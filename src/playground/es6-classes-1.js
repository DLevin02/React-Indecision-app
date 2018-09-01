
class Person {
    constructor(name = 'Anonymoouseindabut', age = 0) {
        this.name = name;
        this.age = age;
    } 
    getGreeting() {
        return `Hi I am ${this.name} and my age is ${this.age}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, homeLocation) {
        super(name, age, major)
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting ${this.homeLocation}`;
        }
        return greeting;
    }

}


const me = new Traveler('Drew Levin', 16, 'Computer Science', 'Charlotte');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());