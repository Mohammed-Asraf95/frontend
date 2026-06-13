const fly = {
    fly() {
        console.log("Flying");
    }
};

const swim = {
    swim() {
        console.log("Swimming");
    }
};

class Duck {}
Object.assign(Duck.prototype, fly,swim)
let d = new Duck();
d.fly();
d.swim();