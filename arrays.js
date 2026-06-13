let stu_info = [102, "Asraf", 9.2, true]
console.log(stu_info);
console.log(stu_info[1]);

let arr = new Array(1, 2, 3, 4)
    console.log(arr)

arr.push(5)
arr.unshift(0)
arr.pop()
console.log(arr);

//splice & slice 
let num = [10, 20, 30, 40 , 50];
console.log(num);
num.splice(4, 0 , 60, 70, 80)
console.log(num.splice(2,3))

let arr1 = num.slice(3, 5)
console.log(arr1)
console.log(num);

let fruit = ["apple", "mango", "banana", "cherry"];
console.log(fruit.indexOf("cherry"));
console.log(fruit.includes("mango"));
console.log(fruit.sort());
console.log(fruit.reverse());

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

let numbers = [1, 2, 3];
numbers.forEach(number => console.log(`The number is $(numer * 5)`));

let squared = numbers.map(num => num * num);
console.log(squared);
console.log(numbers);

let evenNumbers = numbers.filter(num => num %2===0);
console.log(evenNumbers);
console.log(numbers);

numbers = [1, 2, 3, 4];
let sum = numbers.reduce((sum, num) => sum + num,0);
console.log(sum);
let newarr = numbers.concat(fruits);
console.log(newarr)
let narr = newarr.concat(stu_info)
console.log(narr);
let words = ["Hello", "world", 0.089];
let sentence = words.join(" - ");
console.log(sentence);

let fru =["apple, banana", "cherry"];
let [a, b, c] = fru;
console.log(a);
console.log(b);


