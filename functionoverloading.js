function add() {
    console.log(10 + 10);
}

function add(a) {
    console.log(a + 10);
}

function add(a, b) {
    console.log(a + b);
}

add();
add(10);
add(10, 20);

//Spread operator ... / Rest opeartor ( feature ES6)

function add(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum = sum + num;
    }
    return sum;
    console.log(`The sum is $(sum)`);
}
console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,30));