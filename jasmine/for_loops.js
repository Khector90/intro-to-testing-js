"use strict";


//exercise 2
//exercises for loops, good luck to me.
// let input = prompt("Pick a Number to multiple: ");
//
//
// function showMultiplicationTable(input) {
//
//     for (let i = 0; i <= 10; i++) {
//         let x = input * i;
//         console.log(input + " x " + i + " = " + x);
//     }
//
// }
// showMultiplicationTable(7);

//exercise 3

// for (let i = 0; i <= 10; i++){
//     let randomNumber = Math.floor(Math.random() * 201) + 20;
//     let check = randomNumber % 2;
//     // console.log(randomNumber, check)
//     if(check === 0){
//         console.log(randomNumber + " is even");
//     } else{
//         console.log(randomNumber + " is odd" )
//     }
// }

//exercise 4
// create a for loop
//console.log to display 1-9
// make it display in a pyramid
// for (let i = 1; i < 10; i++){
//     let result = [];
// for (let j = 1; j <= i; j++){
//     result.push(i);
//     // console.log(result);
// }
// console.log(result.join(""));
//
//
// }

//exercise 5
for (let i = 100; i >= 5; i--) {
    if(i % 5 === 0) {
        console.log(i);
    }
}