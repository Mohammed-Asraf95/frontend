class Parent {
    constructor(name) {
        this.name = name
    }
    marry() {
        console.log("Marry at 28");
    }
}
class child extends Parent {
    constructor (name, age) {
        super(name);
        this.age = age;
    } 
    marry() {
        super.marry();
        console.log("Marry at 32")
    }
}

let c = new child("Marry, 23");
console.log(c.name);
console.log(c.age);
c.marry()