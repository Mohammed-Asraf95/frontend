function add() {
    let a = 10 + 20;
    console.log(a);
}

add()

function square() {
    let sum = 10;
    let res = sum * sum;
    console.log(res);
}
square();

//types of functions
//1.without i/p and o/p
function square() {
    let num = 10;
    let res = num*num;
    console.log(res);
}
square();

//2.with i/p and without o/p
function square1(num) {
    let res = num* num;
    console.log(res);
} 
square1(4);

//3. without i/p with o/p
function square2() {
    let num = 10;
    return num * num;
}
console.log(square2());

//withi/p with o/p
function square3(num) {
    return num* num;
}
let res = square3(3);
console.log(`The square of the ${num} is ${res}`);