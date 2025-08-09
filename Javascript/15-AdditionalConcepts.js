"use-strict";
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

function equal(a, b){
    return a === b ? "It is equal" : "It is not equal";
}
console.log(equal(5,6));

//Using multiple ternary operator
function checkNum(num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"; 
}
 console.log(checkNum(0));

 //How to prevent object mutation 
 function xyz(){
    const MATH_CONSTANTS = {
        PI : 3.14
    }
    Object.freeze(MATH_CONSTANTS);
    try{
     MATH_CONSTANTS.PI = 99;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
 }

 console.log(xyz());

 //Arrow functions : kind of short anonymous functions 

 var date = function(){
    return new Date();
 }

 //Below is the arrow version 
 var date = () => new Date();
 console.log(date());

 // Class syntax 
 function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
 }
 
 var Vegetable = makeClass();
 var lettuce = new Vegetable("lettuce");
 console.log(lettuce.name);

 //Getters and Setters
 function getSet(){
    class Thermostat{
        constructor(temp){
            this._temp =5/9 *( temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(newTemperature){
            this._temp = newTemperature;
        }
    }
    return Thermostat;
 }
 const Thermostat = getSet();
 const thermos = new Thermostat(76);
 let temp = thermos.temperature;
 console.log(temp);
 thermos.temperature = 26;
 temp = thermos.temperature;
 console.log(temp);

 //Import and export 
import {turnCapital} from "./16-exportFile.js"
 const capitalized = turnCapital("hello!");
 console.log(capitalized);