let num1 = Number(prompt("Enter the first number"))
let num2 = Number( prompt("Enter the second number"))

function sum() {
    return num1 + num2;
}

console.log("Sum", sum())

function subtraction() {
    return num1 - num2;
}

console.log("Subtraction", subtraction())

let userName = prompt("What's your name?");
let userAge = Number(prompt("How old are you?"));

console.log(`Hello, ${userName}! You are ${userAge} years old.`);


function count (num) {
    
   for (let i = num; i > 0 ; i--  ){
    console.log(i);
   }
}

count(5);