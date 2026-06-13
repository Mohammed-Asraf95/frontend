class CoffeeMachine {
    boilWater() {
        console.log("Boiling Water...");
    }
    addCoffee() {
        console.log("Adding coffee Powder...");
    }
    addMilk() {
        console.log("Adding Milk...");
    }
    serveCoffee() {
        console.log("Coffee Ready");
    }
}
const machine = new CoffeeMachine();

machine.boilWater();
machine.addCoffee();
machine.addMilk();
machine.serveCoffee();