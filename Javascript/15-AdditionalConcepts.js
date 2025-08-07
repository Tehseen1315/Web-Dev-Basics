// Math.Random function

function f1(){
    return Math.random();
}

console.log(f1());

// Number produced is between 0 and 1 but not 1 .

//How to obtain number between 0 to 10 
function f2(){
    return Math.floor(Math.random() *10);
}
console.log(f2());

// parseInt fn : Coverts string to integer 
function convert(int){
    return parseInt(int);
} 
console.log(convert("56"));

// Using parseInt function with radix
function binaryToInt(int){
    return parseInt(int);
}
console.log(parseInt("10011",2)); // 2 is the base ; 10 is the default base

// Ternary Operator 
