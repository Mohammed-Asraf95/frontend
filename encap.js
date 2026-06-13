class BankBalance {
    #balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.#balance;
    }

    deposit(amt) {
        this.balance += amt
        console.log(`"Deposited: "${amt}`)
    }
}

let b = new BankBalance(20000)
b.deposit(200)
console.log("available balance is ", b.getBalance());