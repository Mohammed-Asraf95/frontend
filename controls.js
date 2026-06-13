//If statement
let age = 20;
if(age >= 18) {
    console.log("Eligible to vote");
}

//if-else
    var num = -5;
if(num >= 0) {
    console.log(num + " is Positive");
} else {
    console.log(num + " is negative");
}

//if-else ladder
var num = 0;
if(num>0) {
    console.log("Positive")
} else if(num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Nested if

let marks = 85;
if(marks >= 40) {
    if(marks >= 100) {
        console.log("Distinction");
    } else {
        console.log("First class");
    }
    } else {
        console.log("Fail");
    }

    //switch cas
    let garde = 'D';
    switch(grade) {
        case 'A': console.log("Excellent");break;
        case 'B': console.log("Good");break;
        case 'C': console.log("Average"); break;
        case 'D': console.log("Poor");break;
        default: console.log("Invalid grade");
    }

    //looping --------
    //forloop
    for(let i=1; i<=10; i++) {
        Process.stdout.write(i + " ");
    }
    //while loop
    let i=1;
    while(i <= 5) {
        console.log(i);
        i++;
    }
    